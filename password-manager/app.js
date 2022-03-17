const {getItem, setItem} = require("node-persist")
const storage = require("node-persist");

console.log("Starting password manager!!!")

async function createAccount(account) {
 await storage.init();
 var accounts = await storage.getItem("accounts");

 if (typeof accounts == "undefined") {
  var accounts = []
  accounts.push(account)
  await storage.setItem("accounts", accounts)
 }
 else {
  accounts.push(account);
  await storage.setItem("accounts", accounts)
 }
}

async function getAccount(name) {
 await storage.init();
 var accounts = await storage.getItem("accounts")

 if (typeof accounts == "undefined") {
  console.log("No accounts yet")
 }

 else {
  accounts.map((account) =>{
   if (account.name == name) {
    console.log(account)
   }
  })
 }


}

getAccount("Facebook")