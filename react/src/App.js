import React, { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import Profile from "./component/Profile/Profile";
import Title from "./component/Title/Title";
import Footer from "./component/Footer/Footer";
import Data from "./component/Data.json";
import IntroductionList from "./component/IntroductionList/IntroductionList";
import DarkModeContext from "./context/DarkModeContext";
import "./App.css";
import Login from "./component/Login/Login";
import { UserInfo } from "./UserInfo";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    localStorage.setItem("UserInfo", JSON.stringify(UserInfo));
  }, []);
  return isLogin ? (
    <DarkModeContext>
      <Header />
      <Title data={Data} />
      <Profile data={Data} />
      <IntroductionList data={Data} />
      <Footer data={Data} />
    </DarkModeContext>
  ) : (
    <Login data={setIsLogin} />
  );
}
