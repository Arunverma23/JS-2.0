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

// const new_nums = []

// nums.forEach((num)=>{
//     if(num>4)
//     {
//         new_nums.push(num)
//     }
// })

// console.log(new_nums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let user_books = books.filter((bk)=> bk.genre === 'History')

  user_books = books.filter((bk)=> bk.publish >= 1990 && bk.genre === 'History')

  

  console.log(user_books)