import { useState } from "react";

function TutoringForm({ onAgregar }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    categoria: "",
    objetivo: "",
    grupo: "",
    producto: "",
    fecha: "",
    estado: ""
  });

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (
      !formulario.nombre ||
      !formulario.categoria ||
      !formulario.objetivo ||
      !formulario.grupo ||
      !formulario.producto ||
      !formulario.fecha ||
      !formulario.estado
    ) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    onAgregar(formulario);

    setFormulario({
      nombre: "",
      categoria: "",
      objetivo: "",
      grupo: "",
      producto: "",
      fecha: "",
      estado: ""
    });
  };

  return (
    <form className="formulario" onSubmit={enviarFormulario}>
      <h2>Registrar actividad</h2>

      <label>Nombre de la actividad</label>
      <input
        type="text"
        name="nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
        placeholder="Ejemplo: Taller de hábitos de estudio"
      />

      <label>Categoría</label>
      <select
        name="categoria"
        value={formulario.categoria}
        onChange={manejarCambio}
      >
        <option value="">Selecciona una categoría</option>
        <option value="Académica">Académica</option>
        <option value="Personal">Personal</option>
        <option value="Profesional">Profesional</option>
        <option value="Institucional">Institucional</option>
      </select>

      <label>Objetivo</label>
      <textarea
        name="objetivo"
        value={formulario.objetivo}
        onChange={manejarCambio}
        placeholder="Escribe el propósito formativo de la actividad"
      ></textarea>

      <label>Grupo</label>
      <input
        type="text"
        name="grupo"
        value={formulario.grupo}
        onChange={manejarCambio}
        placeholder="Ejemplo: II-603"
      />

      <label>Producto esperado</label>
      <input
        type="text"
        name="producto"
        value={formulario.producto}
        onChange={manejarCambio}
        placeholder="Ejemplo: Reporte de seguimiento"
      />

      <label>Fecha</label>
      <input
        type="date"
        name="fecha"
        value={formulario.fecha}
        onChange={manejarCambio}
      />

      <label>Estado</label>
      <select name="estado" value={formulario.estado} onChange={manejarCambio}>
        <option value="">Selecciona un estado</option>
        <option value="Planeada">Planeada</option>
        <option value="Realizada">Realizada</option>
        <option value="En seguimiento">En seguimiento</option>
      </select>

      <button type="submit">Guardar actividad</button>
    </form>
  );
}

export default TutoringForm;