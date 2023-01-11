import express from 'express'
import { EducatorModel, LocationModel } from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => {
    res.send(await EducatorModel.find().populate({ path: 'location', select: 'name' }))
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

export default router