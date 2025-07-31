const tinder_user = new Object() // singleton object

tinder_user.id = "123abc"
tinder_user.name = "arun verma"
tinder_user.is_logged_in = false;

// console.log(tinder_user)

const regular_user = {
    email : "arun@gmail.com",
    full_name:{
        first_name : "arun",
        middle_name : "",
        last_name : "verma"
    }

}

// console.log(regular_user.full_name.first_name)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = {obj1 , obj2} // not good
// const obj3 = Object.assign({} , obj1,obj2) // {} is prefer

const obj3 = {...obj1, ...obj2}

console.log(obj3)

const user = [
    {
        id:1,
        email :"arun@mail.com"
    },
    {
        id:2,
        email:"arun@gmail.com"
    }
]

console.log(user[1].email)

// console.log(Object.keys(tinder_user)) // userfull
// console.log(Object.values(tinder_user)) // usefull
// console.log(object.entries(tinder_user) // ver less use

console.log(tinder_user.hasOwnProperty('name')) // to chech property has or not 
