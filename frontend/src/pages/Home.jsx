import { useEffect, useState } from "react";
import Header from "../components/Header";
import TutoringForm from "../components/TutoringForm";
import TutoringList from "../components/TutoringList";
import Modal from "../components/Modal";

import {
  obtenerActividades,
  crearActividad,
  actualizarEstado,
  eliminarActividad
} from "../services/tutoringService";

function Home() {
  const [actividades, setActividades] = useState([]);
  const [actividadEliminar, setActividadEliminar] = useState(null);

  const cargarActividades = async () => {
    const datos = await obtenerActividades();
    setActividades(datos);
  };

  useEffect(() => {
    cargarActividades();
  }, []);

  const agregarActividad = async (actividad) => {
    await crearActividad(actividad);
    cargarActividades();
  };

  const cambiarEstado = async (id, estado) => {
    await actualizarEstado(id, estado);
    cargarActividades();
  };

  const confirmarEliminar = async () => {
    await eliminarActividad(actividadEliminar.id);
    setActividadEliminar(null);
    cargarActividades();
  };

  return (
    <div className="contenedor">
      <Header />

      <main className="layout">
        <TutoringForm onAgregar={agregarActividad} />

        <div className="panel">
          <h2>Actividades registradas</h2>

          <TutoringList
            actividades={actividades}
            onCambiarEstado={cambiarEstado}
            onEliminar={setActividadEliminar}
          />
        </div>
      </main>

      {actividadEliminar && (
        <Modal
          mensaje={`¿Seguro que deseas eliminar la actividad "${actividadEliminar.nombre}"?`}
          onConfirmar={confirmarEliminar}
          onCancelar={() => setActividadEliminar(null)}
        />
      )}
    </div>
  );
}

export default Home;