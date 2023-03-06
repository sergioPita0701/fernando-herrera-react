import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { CallBackHook } from "./06-memos/CallBackHook";
// import { MemorizeHook } from "./06-memos/MemoHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainAPP";

// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayaotEfect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWhitCustomHook } from "./01-useState/CounterWhitCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import './08-useReducer/intro-reducer'

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* // <React.StrictMode> */}
    <MainApp />
    {/* //  </React.StrictMode> */}
  </BrowserRouter>
);
