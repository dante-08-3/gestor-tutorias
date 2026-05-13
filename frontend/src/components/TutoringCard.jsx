import CategoryBadge from "./CategoryBadge";

function TutoringCard({ actividad, onCambiarEstado, onEliminar }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{actividad.nombre}</h3>
        <CategoryBadge categoria={actividad.categoria} />
      </div>

      <p>
        <strong>Objetivo:</strong> {actividad.objetivo}
      </p>

      <p>
        <strong>Grupo:</strong> {actividad.grupo}
      </p>

      <p>
        <strong>Producto esperado:</strong> {actividad.producto}
      </p>

      <p>
        <strong>Fecha:</strong> {actividad.fecha}
      </p>

      <p>
        <strong>Estado:</strong> {actividad.estado}
      </p>

      <div className="acciones">
        <select
          value={actividad.estado}
          onChange={(e) => onCambiarEstado(actividad.id, e.target.value)}
        >
          <option value="Planeada">Planeada</option>
          <option value="Realizada">Realizada</option>
          <option value="En seguimiento">En seguimiento</option>
        </select>

        <button className="btn-eliminar" onClick={() => onEliminar(actividad)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TutoringCard;