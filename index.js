import express from 'express'
import mongoose from 'mongoose'

const app = express()

const PORT = 4001

async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://thinguyen:thinguyen@cluster0.ijsnswl.mongodb.net/coder_academy?retryWrites=true&w=majority')
        console.log('Mongoose conneted')
    } 
    catch (err) {
        console.log(err.message)
    }
}

dbConnect()

async function dbClose() {
    try {
        await mongoose.connection.close()
        console.log('Mongoose closed')
    }
    catch (err) {
        console.log(err)
    }
}

const educatorSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    skills: { type: [String], required: true }
})

const EducatorModel = mongoose.model('Educator', educatorSchema)

app.use(express.json())

app.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${PORT}`))

export { educatorSchema, EducatorModel, dbClose }