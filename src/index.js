import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //context를 app에서도 쓸 수 있게 된다
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
