const user = {
    _email: 'qwe@gmail.com',
    _password: 'qwe',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }
}

// const corn = user
// console.log(corn.email)
// console.log(user.email);
// console.log(user.password);


const corn_crisp = Object.create(user)
console.log(corn_crisp.email)