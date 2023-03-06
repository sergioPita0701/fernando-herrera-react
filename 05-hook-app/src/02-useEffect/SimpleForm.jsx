import React, { useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "fernando",
    email: "fernando@gmail.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

//   useEffect(() => {
//     //   first;

//     return () => {
//       // second;
//     };
//     //[] cuando el componete se redenriza o cuandoes creado
//   }, []);
//   useEffect(() => {
//     //   first;

//     return () => {
//       // second;
//     };
//     //[] cuando el componete se redenriza o cuandoes creado
//   }, [formState]);
//   useEffect(() => {
//     //   first;

//     return () => {
//       // second;
//     };
//     //[] cuando el componete se redenriza o cuandoes creado
//   }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "sergio" && <Message />}
    </>
  );
};
