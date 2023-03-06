import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  // const { data, isLoading, hasError } = useFetch(
  //   `https://pokeapi.co/api/v2/ability/${counter}`
  // );
  // console.log(data, isLoading, hasError);
  //cuando duvuleve un array en vez de un objeto
  //!!udefing = !true = false
  // const { author, quote } = !!data && data[0];
  const quote = "gaaaaaaaaaaaa";
  const isLoading = false;
  const author = "Chupetin";
  return (
    <>
      <h1>Breakingbad Quotes</h1>
      <hr />

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
