const user = {
    username: "arun",
    age : 23,
    isLoggedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from DB")
        // console.log(`username:${this.username}`)
        // console.log(this)
    }

}

const user2 = {
    username: "sneha",
    age : 25,
    isLoggedIn : false,

    getUserDetails : function(){
        // console.log("Got user details from DB")
        // console.log(`username:${this.username}`)
        // console.log(this)
    }

}

// we should avoid to create multiple user like this 

// console.log(user.username)
// user.getUserDetails()
// console.log(user.getUserDetails())
// console.log(this)

// new is used to create new instance or context => constructor function

const date = new Date()

function User(username,age,loginCount,isLoggedIn){
    this.username = username
    this.age = age
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Good Evening ${this.username}`)
    }

    return this
}

const userOne = new User("Arun",12,1,true)
const userTwo = new User("Sneha","12",1,true)

// console.log(userOne)
// console.log(userTwo)
// userOne.greetings()
// console.log(userTwo.greetings())
console.log(userOne.constructor)

// wheneven we use "new" keyword 
// step 1 -> new object create
// step 2 -> constructor called
// step 3 -> arguement injected with help of this keyword
// step 4 -> return values


