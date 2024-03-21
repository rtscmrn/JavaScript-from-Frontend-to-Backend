// before: var mod1 = require("module1/module1");  
var mod1 = require("module1");  
// or require("./module1") without specifying the .js extension
console.log("mod1 =", mod1);

var total = mod1.add(2, 3);      // call of the add() function 
                                 // defined in module1
console.log("mod1.add(2, 3) = ", total);  // displays 5

var total = mod1.mult(2, 3);
console.log("mod1.mult(2, 3) = ", total);     // 2 * 3 = 6

//var mod2 = require("module2");

// other way:
//var mod3 = require("module3");
//console.log("mod3 =", mod3);

//using internal modules. for example of the system
var fs = require("fs");

fs.readFile("file2.txt", { encoding : "utf-8" }, function(error, data) {
    console.log(data);
});
console.log("The readFile() method was called");

var colors = require("colors");
console.log(colors.random("First text in random colors"));
console.log(colors.random("Second text in random colors"));
