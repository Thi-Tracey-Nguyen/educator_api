import mongoose from 'mongoose'

try {
    const m = await mongoose.connect('mongodb+srv://thinguyen:thinguyen@cluster0.ijsnswl.mongodb.net/coder_academy?retryWrites=true&w=majority')
    console.log('Mongoose conneted')
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