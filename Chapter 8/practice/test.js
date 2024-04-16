var mongoose = require("mongoose");
console.log("mongoose version =", mongoose.version);

mongoose.connect("mongodb://localhost/mydb_test");
console.log("Connecting to mydb_test database in progress...");
