const Descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

// console.log(Descripter)

const corn = {
    name: "cornCrisp",
    price: 5,
    IsAvailable: true,

    orderCorn : function(){
        console.log("corn spoiled")
    }


}

console.log(Object.getOwnPropertyDescriptor(corn, "name"))

Object.defineProperty(corn,'name',{
    writable:false,
    enumerable:false
})

// console.log(Object.getOwnPropertyDescriptor(corn,"name"))

for(let [key,value] of Object.entries(corn)){
    if(typeof value !== 'function'){
    console.log(`${key} : ${value} `)
    }
}