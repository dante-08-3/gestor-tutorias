import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let actividades = [
  {
    id: 1,
    nombre: "Sesión de orientación académica",
    categoria: "Académica",
    objetivo: "Apoyar a los estudiantes en la organización de sus materias.",
    grupo: "II-603",
    producto: "Reporte de seguimiento",
    fecha: "2026-05-13",
    estado: "Planeada"
  }
];

// Obtener todas las actividades
app.get("/actividades", (req, res) => {
  res.json(actividades);
});

// Registrar una nueva actividad
app.post("/actividades", (req, res) => {
  const nuevaActividad = {
    id: Date.now(),
    nombre: req.body.nombre,
    categoria: req.body.categoria,
    objetivo: req.body.objetivo,
    grupo: req.body.grupo,
    producto: req.body.producto,
    fecha: req.body.fecha,
    estado: req.body.estado
  };

  actividades.push(nuevaActividad);
  res.status(201).json(nuevaActividad);
});

// Actualizar estado de una actividad
app.put("/actividades/:id", (req, res) => {
  const id = Number(req.params.id);

  actividades = actividades.map((actividad) =>
    actividad.id === id
      ? { ...actividad, estado: req.body.estado }
      : actividad
  );

  res.json({ mensaje: "Actividad actualizada correctamente" });
});

// Eliminar una actividad
app.delete("/actividades/:id", (req, res) => {
  const id = Number(req.params.id);

  actividades = actividades.filter((actividad) => actividad.id !== id);

  res.json({ mensaje: "Actividad eliminada correctamente" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});