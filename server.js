const express = require("express");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const bodyParser = require("body-parser");

// Conecta con el Index.js del server
const trabajos = require("./server/api/trabajos");

const app = express();


// Para el dotenv
var dotenv = require("dotenv");
dotenv.config();

// import CORS
const cors = require("cors");
app.options("*", cors());
app.use(cors());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());



// ------------------------------------------------ CONECTAR A MONGO DB -----------------------------------------//

// DB Config
const db = process.env.mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conexión a Mongodb correcta"))
  .catch(err => console.log(err));

// ------------------------------------------------ CONECTAR AL SERVIDOR -----------------------------------------//



// Routes
app.use("/api/trabajos", trabajos);


const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Servidor corriendo en el puerto ${port} !`)
);
