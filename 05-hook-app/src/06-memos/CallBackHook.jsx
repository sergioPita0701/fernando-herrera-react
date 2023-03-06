import React, { useCallback, useState } from "react";
import { ShowImcrement } from "./ShowImcrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   };
  return (
    <>
      <h1>useCallBak hook : {counter}</h1>
      <hr />
      <ShowImcrement increment={incrementFather} />
    </>
  );
};
