var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");

var clientSchema = mongoose.Schema({
 lastname : String,
 firstname : String,
 address : String
});

// creation of the Client class associated with the clients collection
var Client = mongoose.model("clients", clientSchema);

Client.find({ $or : [ { lastname : "Clinton" }, { firstname : "Barack"} ] }, function(err, clients) {
  console.log(clients);
});