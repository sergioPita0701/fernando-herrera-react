import React, { useContext } from "react";
import { UserContext } from "./context/UseContex";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 3, name: "sergio", email: "alvaro@gmail.co" })
        }
      >
        Estabelcer Usuario
      </button>
    </>
  );
};
