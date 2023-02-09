import React from "react";
import "../stylesheet/Tarea.css";
import { AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";

function Tarea({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea,
  editarTarea,
}) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      {/* <div className="tarea-contenedor-icono" onClick={() => editarTarea(id)}>
        <AiOutlineEdit className="tarea-icono" />
      </div> */}
      <div className="tarea-contenedor-icono" onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;
