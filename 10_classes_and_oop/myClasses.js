// ES 6

class User {
    constructor(username,email,password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptpassword(){
        return `123${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const corn = new User("Arun","xyz.com","@run")
console.log(corn.encryptpassword())
console.log(corn.changeUsername())

// behind the scene (without class)

function user(username,email,password){
    this.username = username,
    this.email = email,
    this.password = password
}

user.prototype.encryptpassword = function(){
    return `123${this.password}abc`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const chips = new user("Arun","xyz.com","@run")
console.log(chips.encryptpassword())
console.log(chips.changeUsername())

