// singleton

// objects literals

// Object.create // another method to create objects

const mysym = Symbol("key1")

const js_user = { name:"Arun" , "nam e":"Arun" ,[mysym] : "arun"}

// myArray = ["a","r","u","n"]

// console.log(js_user.name) // not prefer
// console.log(js_user."nam e") // not working

// console.log(js_user["name"])
// console.log(js_user["nam e"]) // good working
// console.log(js_user[mysym])

// js_user.name = "arunn"
// Object.freeze(js_user)
// console.log(js_user.name)
// console.log(js_user)
