var argv = require("yargs").argv

console.log(argv)

if (argv._[0] == "greet" && typeof argv.name != "undefined") {
 console.log("Hello " + argv.name);
}

else {
 console.log("Hello world");
}