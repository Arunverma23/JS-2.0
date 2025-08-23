function SetUsername(username){
    // complex DB calls

    this.username = username
    console.log("called")
}

function Createuser(username, email, password){
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const corn = new Createuser("arun","xyz.com","123")
console.log(corn)