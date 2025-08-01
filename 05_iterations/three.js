// for of loop

// [" " , " " , " "] string in array 
// [{} , {} , {}] object in array

const arr = [1, 2, 3, 4, 5, 6]

// for (const num of arr) {
//     console.log(num)
// }

// const greetings = "hello arun"
// for (const greet of greetings) {
//     if(greet==" ")
//     {   
//         console.log()
//         continue
//     }
//     console.log(`each char is : ${greet}`)
    
// }

// Maps : known for unique values

const map = new Map()
map.set('IN',"INDIA")
map.set('US','UNITED STATE')

// console.log(map)

for (const [key,value] of map) {
    console.log(key , value)
}

const myobj = {
    game1 : 'nfs',
    game2 : 'sm'
}

// for (const key of myobj) {  // not for objects
// console.log(key)
// }

