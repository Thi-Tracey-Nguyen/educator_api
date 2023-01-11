import express from 'express'
import { EducatorModel } from './db.js'

const app = express()

const PORT = 4001


app.use(express.json())

app.get('/educators', async (req, res) => {
    const educators = await EducatorModel.find()
    res.send(educators)
})

app.post('/educators', async (req, res) => {
    const newEdu = req.body
    await EducatorModel.create(newEdu)
    res.status(201).send(newEdu)
})

app.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${PORT}`))

