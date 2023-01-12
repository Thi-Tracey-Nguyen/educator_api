import express from 'express'
import { EducatorModel, LocationModel } from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        res.send(await EducatorModel.find()
            .populate({ path: 'location', select: 'name' }))
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const educator = await EducatorModel.findById(req.params.id)
            .populate({ path: 'location', select: 'name' })

        if (educator) {
            res.status(200).send(educator)
        } else {
            res.status(404).send({ error: 'Not Found' })
        }
    } 
    catch (err) {
        console.log({ error: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const {name, skills, location} = req.body
        const locationObject = await LocationModel.findOne({name: location})
        const newEdu = {name, skills, location: locationObject._id}
        const insertedEdu = await EducatorModel.create(newEdu)
        res.status(201).send(insertedEdu)
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const educator = await EducatorModel.findByIdAndDelete(req.params.id)

        if (educator) {
            res.status(204)
        } else {
            res.status(404).send({ error: 'Not Found' })
        }
    } 
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    const { name, location, skills } = req.body
    // const newEducator = { 
    //     name: "David Foster", 
    //     location: "63be9bdba71cbbc4fa36e51e", 
    //     skills: ["Excel", "SQL"] 
    // } 
    const newEducator = { name, location, skills }

    try {
        const educator = await EducatorModel.findByIdAndUpdate(req.params.id, newEducator, { returnDocument: 'after' }).populate('location')

        if (educator) {
            res.send(educator)
        } else {
            res.status(500).send({ error: 'Not Found' })
        }
    }
    catch (err) {
        res.status(500).send({ error: err.message })
        // console.log(err)
    }
})

export default router