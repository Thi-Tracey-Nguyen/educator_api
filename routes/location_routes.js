import express from 'express'
import { LocationModel } from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        res.send(await LocationModel.find())
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const location = await LocationModel.findById(req.params.id)

        if (location) {
            res.status(200).send(location)
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
        const { name } = req.body
        const newLocation = { name }
        const insertedLocation = await LocationModel.create(newLocation)
        res.status(201).send(insertedLocation)
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const location = await LocationModel.findByIdAndDelete(req.params.id)

        if (location) {
            res.status(204)
        } else {
            res.status(404).send({ error: 'Not Found' })
        }
    } 
    catch (err) {
        res.status(500).send({ error: err.message })
    }
})

// router.put('/:id', async (req, res) => {
//     const { name, location, skills } = req.body
//     // const newEducator = { 
//     //     name: "David Foster", 
//     //     location: "63be9bdba71cbbc4fa36e51e", 
//     //     skills: ["Excel", "SQL"] 
//     // } 
//     const newEducator = { name, location, skills }

//     try {
//         const educator = await EducatorModel.findByIdAndUpdate(req.params.id, newEducator, { returnDocument: 'after' }).populate('location')

//         if (educator) {
//             res.send(educator)
//         } else {
//             res.status(500).send({ error: 'Not Found' })
//         }
//     }
//     catch (err) {
//         res.status(500).send({ error: err.message })
//         // console.log(err)
//     }
// })

export default router