import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // state에서 쓰고있는 값들은 브라우저가 렌더링이 될 때마다 초기화
  // => isLoggedIn =  true라고 해도 브라우저를 새로고침하면 다시 로그인인

  useEffect(() => {
    // 만약 로그인이 되어 있다면 isLoggedIn =  true
    const stroedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    console.log(stroedUserLoggedInInfo);
    if (stroedUserLoggedInInfo === "1") setIsLoggedIn(true);
    // 만약 로그인이 되어 있지 않다면 isLoggedIn = false
    else setIsLoggedIn(false);
  }, []);

  const loginHandler = (email, password) => {
    //브라우저에서 로그인을 했는지 안했는지 기억할 수 있고 판단할 수 있는 값을 어딘가에 저장 => 로컬스토리지
    localStorage.setItem("isLoggedIn", "1"); // setItem : 값을 저장할 수 있게 만들어줌('key','value')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // isLoggedIn을 없애주는 로직 추가
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
