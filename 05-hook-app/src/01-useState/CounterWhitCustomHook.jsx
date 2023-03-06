import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWhitCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter With Hook : {counter}</h1>
      <hr />
      <button onClick={() => increment(2)} className="btn btn-primary" >
        +2
      </button>
      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        -2
      </button>
    </>
  );
};
