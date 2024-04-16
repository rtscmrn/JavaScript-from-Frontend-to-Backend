var mongoose = require("mongoose");
console.log("mongoose version =", mongoose.version);

async function connectToDb() {
  try {
    await mongoose.connect("mongodb://localhost/mydb_test2", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successful connection to mydb_test2 database");
  } catch (error) {
    console.error("Error connecting to mydb_test2 database:", error);
  }
}

connectToDb();

//begin
// Definición del esquema
const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    telefono: String,
  });
  
  // Creación del modelo
  const Cliente = mongoose.model("Cliente", clienteSchema);
  
  
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
  async function saveClients() {
    try {
      await cliente1.save();
      await cliente2.save();
      await cliente3.save();
    } catch (error) {
      console.error("Error saving clients:", error);
    }
  }
  
  saveClients();
  

  // Consulta de todos los registros
  async function findClients() {
    try {
      const clientes = await Cliente.find({});
      console.log(clientes);
    } catch (error) {
      console.error("Error finding clients:", error);
    }
  }
  
  findClients();
  
//end

