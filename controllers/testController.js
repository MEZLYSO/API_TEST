const db = require("../database/conexion.js");

class testController {
  constructor() {}

  consultar(req, res) {
    res.json({ msg: "Consulta desde Controller" });
  }
  ingresar(req, res) {
    res.json({ msg: "ingresar desde Controller" });
  }
  actualizar(req, res) {
    res.json({ msg: "Actualizar desde Controller" });
  }
  borrar(req, res) {
    res.json({ msg: "Borrar desde Controller" });
  }
}

module.exports = new testController();
