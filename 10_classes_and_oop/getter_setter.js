class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }   
    
    get email(){
        return `${this._email.toUpperCase()}`
        // return this.email
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}arun`
    }

    set password(value){
        this._password = value
    }
    
}

const arun = new user("xyz@meta.com","abc")
console.log(arun.password)
console.log(arun.email)