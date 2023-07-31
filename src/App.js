import React, { useContext, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, { AuthContextProvider } from "./context/AuthContext";

function App() {
  //전역으로 관리할 수 있게 context로 넣어주어야 함 => context로 전체 컴포넌트를 감싸주어야 함

  //login, logoutHandler 처리
  const context = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
