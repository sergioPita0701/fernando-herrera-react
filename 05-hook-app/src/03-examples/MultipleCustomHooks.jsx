import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";


export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/ability/${counter}`
  );
  console.log(data, isLoading, hasError);
  //cuando duvuleve un array en vez de un objeto
  //!!udefing = !true = false
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>Breakingbad Quotes</h1>
      <hr />
      <h3>{data}</h3>
      <h3>{isLoading}</h3>
      <h3>{hasError}</h3>

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}
      <button
        className="btn btn-primary"
        onClick={() => increment}
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  );
};
