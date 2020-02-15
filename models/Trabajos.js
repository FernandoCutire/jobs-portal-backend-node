const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creando el esquema trabajos
const TrabajoSchema = new Schema({
    titulo: {
        type: String,
        required: true
      },
      nombreEmpresa: {
        type: String,
        required: true
      },
      descripcion: {
        type: String,
        required: true
      },
      correoEmpresa: {
        type: String,
        required: true
      },
      tecnologias: {
        type: Array,
        required: false,
        default: ["HTML", "CSS", "JS"]
      },
      salario: {
        type: Number,
        required: false,
      },
      date: {
        type: Date,
        default: Date.now
      }
});

module.exports = Trabajo = mongoose.model("trabajos", TrabajoSchema);

