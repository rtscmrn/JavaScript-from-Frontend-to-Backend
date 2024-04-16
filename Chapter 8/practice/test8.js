var mongoose = require("mongoose");
console.log("mongoose version =", mongoose.version);

mongoose.connection.on("error", function() {
    console.log("mydb_test2 database connection error")
   });
   mongoose.connection.on("open", function() {
    console.log("Successful connection to mydb_test2 database");
   });
   console.log("Connecting to mydb_test2 database in progress...");
   
//begin
// Definición del esquema
const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    telefono: String,
  });
  
  // Creación del modelo
  const Cliente = mongoose.model("Cliente", clienteSchema);
  
  // Conexión a la base de datos
  mongoose.connect("mongodb://localhost/mydb_test2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  // Creación de tres registros
  const cliente1 = new Cliente({
    nombre: "Juan",
    apellido: "Pérez",
    telefono: "123456789",
  });
  
  const cliente2 = new Cliente({
    nombre: "María",
    apellido: "López",
    telefono: "987654321",
  });
  
  const cliente3 = new Cliente({
    nombre: "Pedro",
    apellido: "González",
    telefono: "456789012",
  });
  
  // Guardado de los registros
  cliente1.save();
  cliente2.save();
  cliente3.save();
  
  // Consulta de todos los registros
  Cliente.find({}, (err, clientes) => {
    if (err) console.error(err);
    console.log(clientes);
  });
  
//end

