const db = require("../database/conexion.js");

class StudentsController {
  constructor() {}

  consultar(req, res) {
    const { id } = req.params;
    res.json({ msg: `Consulta desde Controller -> ${id}` });
  }
  ingresar(req, res) {
    try {
      db.query("SELECT * FROM Students", (err, rows) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).json(rows);
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  actualizar(req, res) {
    res.json({ msg: "Actualizar desde Controller" });
  }
  borrar(req, res) {
    res.json({ msg: "Borrar desde Controller" });
  }
}

module.exports = new StudentsController();
