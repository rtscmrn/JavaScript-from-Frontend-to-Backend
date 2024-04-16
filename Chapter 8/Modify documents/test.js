var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");

var clientSchema = mongoose.Schema({
 lastname : String,
 firstname : String,
 address : String
});

// creation of the Client class associated with the clients collection
var Client = mongoose.model("clients", clientSchema);

Client.updateOne({ lastname : "Clinton" }, { address : "New York" }, null, function(err, response) {
  console.log("response =", response);
});