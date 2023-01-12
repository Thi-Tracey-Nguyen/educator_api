import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

try {
    const m = await mongoose.connect(process.env.ATLAS_DB_URL)
} 
catch (err) {
    console.log(err.message)
}

async function dbClose() {
        await mongoose.connection.close()
        console.log('Mongoose disconnected')
    }

const educatorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    skills: { type: [String], required: true }, 
    location: { type: mongoose.ObjectId, ref: 'Location' }
})

const EducatorModel = mongoose.model('Educator', educatorSchema)

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const LocationModel = mongoose.model('Location', locationSchema)

export { educatorSchema, EducatorModel, locationSchema, LocationModel, dbClose }