const express = require("express");
const router = express.Router();

//Genreral
router.get("/", (req, res) => {
  res.json({ msg: "Consulta profesores" });
});

router.post("/", (req, res) => {
  res.json({ msg: "Ingreso de profesores" });
});

router.put("/", (req, res) => {
  res.json({ msg: "Actualizacion de profesores" });
});

router.delete("/", (req, res) => {
  res.json({ msg: "Borrado de profesores" });
});

// Un profesor

router
  .route("/:id")
  .get((req, res) => {
    res.json({ msg: "Consulta profesor" });
  })
  .post((req, res) => {
    res.json({ msg: "Ingreso de profesor" });
  })
  .put((req, res) => {
    res.json({ msg: "Actualizacion de profesor" });
  })
  .delete((req, res) => {
    res.json({ msg: "Borrado de profesor" });
  });

module.exports = router;
