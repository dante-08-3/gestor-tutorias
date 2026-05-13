const API_URL = "http://localhost:4000/actividades";

export async function obtenerActividades() {
  const respuesta = await fetch(API_URL);
  return await respuesta.json();
}

export async function crearActividad(actividad) {
  const respuesta = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(actividad)
  });

  return await respuesta.json();
}

export async function actualizarEstado(id, estado) {
  const respuesta = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ estado })
  });

  return await respuesta.json();
}

export async function eliminarActividad(id) {
  const respuesta = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  return await respuesta.json();
}