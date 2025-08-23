const promise_one = new Promise((resolve,reject)=>{
    //  Do an async task
    //  DB calls , cryptography , network

    setTimeout(()=>{
        console.log("ASYNC task is complete");
        resolve();
    },1000)
});

promise_one.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("ASYNC task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("promise 2 consumed")
})

const promise_three = new Promise(function(resoleve,reject){
     setTimeout(()=>{
     resoleve({username:"Arun" , email:"info.arunverma23@gmail.com"})
     },1000)
})

promise_three.then((user)=>{
  console.log(typeof user)
})

const promise_four = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error)
        {
            resolve({username:"arun",pass:"@run"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

// promise_four.then().catch()

const username = promise_four
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)

})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("The Promise is either resolved or rejected")
})

const promise_five = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error)
        {
            resolve({username:"Arun" , age:"23"})
        }
        else{
            reject("ERROR : JS went wrong")
        }

    },1000)
})

async function consume_promise_five(){
    // const response = await promise_five
    // console.log(response)

    try{
        const resposne = await promise_five
        console.log(resposne)
    } catch(error){
        console.log(error)
    }
}

consume_promise_five()

// async function get_all_user(){

//     // const response = await fetch('https://randomuser.me/api')
//     // const data = response.json()
//     // console.log(data)

//     try{
//          const response = await fetch('https://randomuser.me/api')
//          const data = await response.json()
//          console.log(data)
//         //  console.log(response)
//     } catch(error){
//         console.log("E :", error)
//     }
    
// }

// get_all_user()

fetch('https://randomuser.me/api')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>
console.log(error))