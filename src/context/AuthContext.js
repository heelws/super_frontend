// AuthContext 안에 함수, 값들, 로직들, 전역으로 관리해야 할 것들을 넣어 필요한 곳에 가져가서 import 해서 쓰기만 하면 된다
import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (emali, password) => {},
  onLogout: () => {},
});

//app.js에서 말고 authcontext.js 안에 context에서 prodiver 역할까지
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //첫 로그인 시에 로그인 판단하는 로직
  useEffect(() => {
    const storedUserLoggedInIfo = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInIfo === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}; //props.children : AuthContextProvider로 감싸면 그 안에 JSX 문법 컴포넌트들이 아래로 내려올 수 있게

export default AuthContext;
