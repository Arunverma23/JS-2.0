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

console.log(login_user_message())

