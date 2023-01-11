import { EducatorModel, dbClose } from './db.js'

await EducatorModel.deleteMany()
console.log('Deleted all educator documents')

const educators = [
    { name: 'Alex', skills: ['HTML', 'CSS', 'JavaScript'] }, 
    { name: 'Iryna', skills: ['HTML', 'CSS', 'JavaScript'] }, 
    { name: 'Glen', skills: ['HTML', 'CSS', 'JavaScript']}, 
]

await EducatorModel.insertMany(educators)
console.log('Educator documents created')
dbClose()

