import React, { useState, useEffect } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../stylesheet/ListaDeTareas.css";
import EditarTarea from "./EditarTarea";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  // Agregar tarea al estado
  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  //  Trim es un metodo que nos permite quitar los espacios del principio y del final de una cadena de caracteres

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  // Marcar tarea como completada

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  // Editar tareas

  // const editarTarea = (data) => {
  //   let { id, tarea } = data;
  //   localStorage.setItem("id", id);
  //   localStorage.setItem("tarea", tarea);
  // };

  // const editarTarea = (id, tareaNueva) => {
  //   tareas(
  //     tareas.map((tarea) => {
  //       if (tarea.id === id) {
  //         return { ...tarea, texto: tareaNueva };
  //       }
  //       return tarea;
  //     })
  //   );
  // };

  // Guardar Tareas en el localStorage

  useEffect(() => {
    let data = localStorage.getItem("tareas");
    if (data) {
      setTareas(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}

// key es una forma que tiene react de identificar ese elemento en la lista y debe ser unico como el id

export default ListaDeTareas;
