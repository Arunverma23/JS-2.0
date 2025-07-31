const user = {
    user_name : "arun",
    price : 999,

    welcome_message : function()
    {
        console.log(` ${this.user_name} , welcome to website`)
        console.log(this)
    }


}

// user.welcome_message()
// user.user_name = "sneha"
// user.welcome_message()

// console.log(this)

// function chai(){
//     let user_name = "arun"
//     console.log(this.user_name) // this not applicable on function
// }

// chai()

// const chai = ()=>{
//     let user_name = "arun"
//     console.log(this.user_name)
// } 

// chai()

// syntax of arrow function

// const addtwo = (num1 , num2 )=>{
//     return num1+num2
// }

// implicit return 

// const addtwo = (num1 , num2)=> num1+num2

// const addtwo = (num1,num2)=>(num2+num1)

// const addtwo = (num1,num2)=>({
//     username : "hitesh"
// })

// console.log(addtwo(2,3))





