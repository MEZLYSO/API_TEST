const express = require("express");
const app = express();
const studentsRoutes = require("./views/studentsRoutes.js");
const teacherRoutes = require("./views/teacherRoutes.js");
const studentController = require("./controllers/studentsControllers.js");

app.get("/");

app.use("/estudiantes", studentsRoutes);
app.use("/profesores", teacherRoutes);
app.listen(3001, () => {
  console.log("Servidor escuchando en https://127.0.0.1:3001");
});
