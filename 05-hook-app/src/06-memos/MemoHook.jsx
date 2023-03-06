import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("ahi vamos");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemorizeHook = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  const memoreizedVule = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter <small>{counter}</small>
      </h1>
      <h4>{memoreizedVule}</h4>
      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Sho/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
