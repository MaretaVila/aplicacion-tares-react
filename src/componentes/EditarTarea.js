import React, { useState } from "react";
import "../stylesheet/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function EditarTarea(props) {
  const [input, setInput] = useState("");

  const editarTarea = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder={editarTarea}
        name="texto"
        onChange={editarTarea}
      />
      <button className="tarea-boton">Editar Tarea</button>
    </form>
  );
}

export default EditarTarea;
