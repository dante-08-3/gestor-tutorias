import TutoringCard from "./TutoringCard";

function TutoringList({ actividades, onCambiarEstado, onEliminar }) {
  if (actividades.length === 0) {
    return <p className="sin-datos">No hay actividades registradas.</p>;
  }

  return (
    <section className="lista">
      {actividades.map((actividad) => (
        <TutoringCard
          key={actividad.id}
          actividad={actividad}
          onCambiarEstado={onCambiarEstado}
          onEliminar={onEliminar}
        />
      ))}
    </section>
  );
}

export default TutoringList;