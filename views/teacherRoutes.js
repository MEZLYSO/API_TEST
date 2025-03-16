const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherControllers.js");

//General
router.get("/", (req, res) => {
  res.json({ msg: "Consulta profesor" });
});

router.post("/", (req, res) => {
  res.json({ msg: "Ingreso de profesor" });
});

router.put("/", (req, res) => {
  res.json({ msg: "Actualizacion de profesor" });
});

router.delete("/", (req, res) => {
  res.json({ msg: "Borrado de profesor" });
});

// Un estudiante

router
  .route("/:id")
  .get(teacherController.consultar)
  .post(teacherController.ingresar)
  .put(teacherController.actualizar)
  .delete(teacherController.borrar);

module.exports = router;
