
// let a = 10
// const b = 20
// var c = 30

// let a = 300

// if(true)
// {
//     let a = 10
//     const b = 20
//     // var c = 30
//     console.log(a)
// }

// console.log(a) // not defined
// console.log(b) // not deifined
// console.log(c)

function one()
{
    const user_name = "Arun"

    function two()
    {
        const website = "youtube"
        console.log(user_name)
    }
    // console.log(website)

    two()
}

// one()

if(true)
{
    const user_name = "arun"
    if(user_name==="arun")
    {
         const website = " youtube india "
        //  console.log(user_name+website)
    }
    // console.log(website)
}

// console.log(user_name)


// ++++++++++++++++++++++ intresting ++++++++++++++++++++++++++

console.log(addone(5))

function addone(value){
    return value+1
}

addone(5)

console.log(addtwo(5))
const addtwo = function(value){
    return value + 2
}

addtwo(5)