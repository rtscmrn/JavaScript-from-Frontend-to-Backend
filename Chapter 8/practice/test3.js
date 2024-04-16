var mongoose = require("mongoose");
console.log("mongoose version =", mongoose.version);


var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
var clientSchema = mongoose.Schema({
 lastname : String,
 firstname : String,
 address : String
});