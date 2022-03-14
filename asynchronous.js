function display() {
 console.log("This works")
}
// setTimeOut function is used to delay an action. It receives two arguments; the callback(what you want your code to do) and the time you want it to be delayed for (in milliseconds)
setTimeout(display, 3000);

// production code takes some time like hardcore computation
// consuming code must wait for result
// For this you have to use a promise function. It is an object that links a code that is dependent on another.

// An example of a promise
let myPromise = new Promise(function(myResolve, myReject) {
 var a = 2+3;
 if (a == 4) {
   myResolve("It's resolved a is 4");

 } else {
  myReject("Error, a is not 4");
 }

 
})

myPromise.then(function(value) {
 console.log(value)
}, function (error) {
 console.log(error)
});