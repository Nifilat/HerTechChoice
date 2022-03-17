const storage = require("node-persist")


console.log('Starting Password Manager!!!!!');

async function store() {
 await storage.init();
 var name = await storage.getItem("name")
 var realname = await storage.getItem("realname")

 console.log(name +" " + realname)
 
 
}

store();