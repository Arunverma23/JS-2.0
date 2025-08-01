//  const coding = ["js", "rubby", "python", "cpp", "java"]

// const values = coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })

// console.log(values)

const nums = [1,2,3,4,5,6,7,8,9,10]

// const num = nums.filter((num)=>num>5)
// console.log(typeof(num)) //object
// console.log(num)

// const num = nums.filter((num)=>{
//     return num>4
// })

const new_nums = []

nums.forEach((num)=>{
    if(num>4)
    {
        new_nums.push(num)
    }
})

console.log(new_nums)