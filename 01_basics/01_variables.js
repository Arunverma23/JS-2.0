const account_Id = 12322;
let account_Email = "info.arunverma23.google.com";
var account_password = "1234";
account_city = "jaipur";

// account_Id = 2;

account_Email = "hs.com";
account_password = "2212";
account_city = "delhi";

console.log(account_Id);

/*

prefer not to use var 
beacuse of issue in block scope and functional scope
*/

let account_state;

console.table([account_Id,account_Email,account_password,account_city,account_state]);