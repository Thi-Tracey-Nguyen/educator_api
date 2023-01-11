import { EducatorModel, LocationModel, dbClose } from './db.js'

await EducatorModel.deleteMany()
console.log('Deleted all educator documents')
await LocationModel.deleteMany()
console.log('Deleted all location documents')

const locations = [
    {name: 'Melbourne'}, 
    {name: 'Sydney'}, 
    {name: 'Brisbane'}, 
]

const locationList = await LocationModel.insertMany(locations)

const educators = [
    { name: 'Alex', skills: ['HTML', 'CSS', 'JavaScript'], location: locationList[1] }, 
    { name: 'Iryna', skills: ['HTML', 'CSS', 'JavaScript'], location: locationList[0] }, 
    { name: 'Glen', skills: ['HTML', 'CSS', 'JavaScript'], location: locationList[2] }, 
]

await EducatorModel.insertMany(educators)
console.log('Educator documents created')
dbClose()

