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