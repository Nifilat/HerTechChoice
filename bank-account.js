var account = {};
function createAccount(name, age, address, balance) {
 account.name = name;
 account.age = age;
 account.address = address;
 account.balance = balance;
 account.status = true;

 console.log(account);

}

function depositAmount(amount) {

 if (account.status == true) {
   account.balance += amount;
   console.log("Your account balance is " + account.balance);
  
 }
 else {
  console.log ("Unable to deposit")
 }
 
}

function withdrawAmount(amount) {
 if(account.status == true) {
  if (account.balance >= amount) {
   account.balance -= amount
   console.log("Your account balance is " + account.balance);
  }
  else {
   console.log("Insufficient balance")
  }
 }
 else{
  console.log("Unable to withdraw")
 }
}

function changeStatus() {
 var currentStatus = account.status;
 account.status = !currentStatus;
 if(account.status == true) {
  console.log("Your account status is active")
 }
 else{
  console.log("Your account status is inactive")
 }
 
}

createAccount("Latunde Oluwanifemi", "24", "CMF Hostel", 20000);

changeStatus();
withdrawAmount(12000);