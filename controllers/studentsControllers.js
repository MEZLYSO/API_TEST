class StudentsController {
  constructor() {}

  consultar(req, res) {
    const { id } = req.params;
    res.json({ msg: `Consulta desde Controller -> ${id}` });
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

module.exports = new StudentsController();
