const Account_id=12301274

let account_email="amishv20@gmail.comva"

var account_pass="123456"

let account_state

accountCity="Phagwara"

// Account_id=12                        Not allowed 

account_email="amish@gmail.com"

account_pass="2468"

accountCity="Bengaluru"

/*
Prefer not to use var:=because of issue in block scope and functional scope
*/ 
// table is used to get output from more than one variable in form of table

console.table([Account_id,account_email,account_pass,accountCity,account_state])
