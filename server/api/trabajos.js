// Servidor en express
const express = require("express");
const router = express.Router();

// ------------------------------- Cargar modelos -------------------------------------//
const Trabajo = require("../../models/Trabajos");

// ------------------------------- CRUD -------------------------------------//
router.get("/", (req, res) => {
  res.send("SERVER CORRIENDO");
});

// -------------------- GET --------------------
router.get("/trabajos/", (req, res) => {
  Trabajo.find()
    .then(item => res.status(200).send({ mensaje: "Get exitoso", res: item }))
    .catch(err => res.send({ msj: "Error en get", res: err }));
});

// -------------------- GET by ID --------------------
router.get("/trabajo/:id", (req, res) => {
  Trabajo.findById(req.params.id)
    .then(item => {
      item
        ? res.status(200).send({ mensaje: "Get exitoso", res: item })
        : res.status(404).send({ mensaje: "No Encontrado", res: item });
    })
    .catch(err => res.status(409).send({ msj: "Error en getById", res: err }));
});

// -------------------- POST --------------------
router.post("/crear/trabajo", (req, res) => {
  console.log(req.body);
  const nuevoTrabajo = new Trabajo(req.body);
  nuevoTrabajo.save((err, trabajo) => {
    return !err
      ? res.status(201).send({ mensaje: "Nuevo trabajo creado", res: trabajo })
      : res.status(400).send({ msj: "Error al crear Trabajo", res: err });
  });
});

// -------------------- UPDATE --------------------

router.put("/update/trabajo/:id", (req, res) => {
  const idTrabajo = req.params.id;
  Trabajo.findByIdAndUpdate(idTrabajo, { $set: req.body }, { new: true })
    .then(UpdateTrabajo => res.status(200).send(UpdateTrabajo))
    .catch(UpdateTrabajo => res.status(400).send(UpdateTrabajo));
});

// -------------------- DELETE --------------------

router.delete("/borrar/trabajo/:id", (req, res) => {
  Trabajo.findByIdAndRemove(req.params.id)
    .then(DeleteTrabajo => res.status(200).send(DeleteTrabajo))
    .catch(DeleteTrabajo => res.status(400).send(DeleteTrabajo));
});

module.exports = router;
