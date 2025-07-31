// immediately invoked fucntion expression

// to avoid global variables pollution we use iife
(function chai(){
    console.log(`DB connected`)
})();

( (name)=> {
    console.log(`db connected 2 ${name}`)
})('arun');

// chai()