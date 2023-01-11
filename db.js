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
    skills: { type: [String], required: true }
})

const EducatorModel = mongoose.model('Educator', educatorSchema)

export { educatorSchema, EducatorModel, dbClose }