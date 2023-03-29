const uuid = require('uuid')
// const uuidv4 = require('uuid/v4')

let token = uuid.v4()

console.log(token)
console.log(uuid.validate(token))

// let deprecated = uuidv4()

if({})
  console.log(1)

if("")
  console.log(2)

if([])
  console.log(3)

if([null])
  console.log(4)
