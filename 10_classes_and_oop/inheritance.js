class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const corn  = new Teacher("Arun","xyzgmail.com","@run")

// corn.addCourse()
// console.log(corn)

const chips = new User("SNEHA")
// chips.logMe()
// corn.logMe()

console.log(corn instanceof Teacher || corn instanceof User)
console.log(corn instanceof User)
// console.log(chips instanceof Teacher instanceof User)
