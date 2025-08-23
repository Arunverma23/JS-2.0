let myName = "arun     "

// console.log(myName.length)
// console.log(myName.trim().length)

// console.log(myName.trueLenght)

let Arr = ["thor","spiderman"]

let no = {
    thor:"2",
    spiderman:"5",
    
    getSpiderPower : function(){
        console.log(`spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.arun = function(){
    console.log("arun is good")
}

Array.prototype.sneha = function(){
    console.log("arun is bad")
}
// no.arun()
// Arr.arun()

// Arr.sneha()
// no.sneha()

// inheritance

const user = {
    username: " arun ",
    email : "xyz.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailiable : false 
}

const TASupport = {
    makeAssignment : ' philosphy ',
    fullTime : true,
    __proto__ : TeachingSupport 
}

Teacher.__proto__ = user

// this above approaching is outdated

// modern object ->

Object.setPrototypeOf(TeachingSupport,Teacher)

// console.log(TeachingSupport.makeVideo)

let anotherUserName = "arun      "

// String.prototype.trueLength = function(){
//     // console.log(`${this}`)
//     // console.log(`${this.name}`)
//     console.log(`true length is : ${this.trim().length}`)
// }

Object.prototype.trueLength = function(){
    // console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`true length is : ${this.trim().length}`)
}

anotherUserName.trueLength()

"aru    ".trueLength()
