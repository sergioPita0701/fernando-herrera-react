import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { descripcion, onInputChange, onResetForm } = useForm({
    descripcion: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (descripcion.length <= 1) return;
    const newtodo = {
      id: new Date().getTime(),
      done: false,
      descripcion: descripcion,
    };
    onNewTodo(newtodo);
    onResetForm();
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Que hay que hacer?"
          className="form-control"
          name="descripcion"
          value={descripcion}
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};
