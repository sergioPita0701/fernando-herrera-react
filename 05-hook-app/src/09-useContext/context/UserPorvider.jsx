import { useState } from "react";
import { UserContext } from "./UseContex";
// const user = {
//   id: 123,
//   name: "sergio",
//   email: "sergiopita@gmail.com",
// };
export const UserPorvider = ({ children }) => {
  const [user, setUser] = useState();

  const loginUser = () => {};
  return (
    <UserContext.Provider
      value={{user: user, setUser: setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
