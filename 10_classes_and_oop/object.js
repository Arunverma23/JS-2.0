function table(num){
    for(let i=0;i<11;i++)
    {
        console.log(`${num} * ${i} = ${num*i}`)
    }
}

table.power = 2

console.log(table(2))
console.log(table.power)
console.log(table.prototype)

function CreateUser(username , score){
    this.username = username
    this.score = score
}

CreateUser.prototype.increment = function(){
    this.score++
}

CreateUser.prototype.printme = function(){
    console.log(`score is ${this.score}`)
}

const corn = new CreateUser("corn",25)
const cornChips = new CreateUser("tea",15)

corn.increment()
corn.printme()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/