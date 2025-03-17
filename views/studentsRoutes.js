const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/studentsControllers.js");

//General
router.get("/", (req, res) => {
  res.json({ msg: "Consulta estudiantes" });
});

router.post("/", (req, res) => {
  //res.json({ msg: "Ingreso de estudiantes" });
  studentsController.ingresar;
});

router.put("/", (req, res) => {
  res.json({ msg: "Actualizacion de estudiantes" });
});

router.delete("/", (req, res) => {
  res.json({ msg: "Borrado de estudiantes" });
});

// Un estudiante

router
  .route("/:id")
  .get(studentsController.consultar)
  .post(studentsController.ingresar)
  .put(studentsController.actualizar)
  .delete(studentsController.borrar);

module.exports = router;
