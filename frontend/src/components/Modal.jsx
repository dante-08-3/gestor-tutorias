function Modal({ mensaje, onConfirmar, onCancelar }) {
  return (
    <div className="modal-fondo">
      <div className="modal">
        <h3>Confirmar acción</h3>
        <p>{mensaje}</p>

        <div className="modal-botones">
          <button className="btn-eliminar" onClick={onConfirmar}>
            Sí, eliminar
          </button>

          <button className="btn-secundario" onClick={onCancelar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;