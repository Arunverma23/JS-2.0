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