function my_name()
{
    console.log("Arun Verma")
    console.log("world")
}

// my_name()
// console.log(my_name)

// function add_two_numbers(number_1 , number_2)
// {
//    console.log(number_1 + number_2)
// }

function add_two_numbers(number_1 , number_2)
{
    // console.log(number_1 + number_2)

    //   let result = number_1 + number_2
    //   return result

    return number_1+number_2
}

// const result = add_two_numbers(1,24) // without arguemnt => NaN
// console.log("Result : " , result)

function login_user_message(username = "sam")
{   
    // if(username === undefined){
    if(!username){
        console.log("please enter a user name")
    }
    else
    {
    return `${username} just logged in`
    }
}

// console.log(login_user_message())

function calculate_cart_price(val1 , val2 , ...num1){
     return num1
}

// console.log(calculate_cart_price(2,2,0))

const user = {
    user_name  : "Arun Verma",
    prices : 199
}

function handleObject(anyobject){
    console.log(`user_name is : ${anyobject.user_name} and price is : ${anyobject.price}`)
}

// handleObject(user)

// handleObject({
//     user_name : "sum",
//     price:234
// })

const arr = [200 , 400 , 6000]

function return_second_value (getArry){
    return getArry[2]
}

// console.log(return_second_value(arr))
