const {getItem, setItem} = require("node-persist")
const storage = require("node-persist");
const argv = require("yargs").argv;

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

if (argv._[0] == "create") {
 var account = {
  "name": argv.name,
  "username": argv.username,
  "password": argv.password
 }
 createAccount(account);
}
else if (argv._[0] == 'get') {
 getAccount(argv.name)

}
else {
 console.log("Please enter a command")
}