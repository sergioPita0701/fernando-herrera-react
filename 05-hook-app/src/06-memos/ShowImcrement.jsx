import React from "react";

export const ShowImcrement = ({ increment }) => {
  console.log("me volvi a generar");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      imcrementar
    </button>
  );
};
