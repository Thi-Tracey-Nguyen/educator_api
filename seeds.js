import { EducatorModel, dbClose } from './index.js'

await EducatorModel.deleteMany()
console.log('Deleted all educator documents')

const alex = {
    name: 'Alex Holder', 
    skills: ['HTML', 'CSS', 'JavaScript']
}

await EducatorModel.create(alex)
console.log(alex)

dbClose()

