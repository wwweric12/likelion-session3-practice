import React from "react";
import Header from "./component/Header/Header";
import Profile from "./component/Profile/Profile";
import Title from "./component/Title/Title";
import Footer from "./component/Footer/Footer";
import Data from "./component/Data.json";
import IntroductionList from "./component/IntroductionList/IntroductionList";
import DarkModeContext from "./context/DarkModeContext";
import "./App.css";
export default function App() {
  return (
    <DarkModeContext>
      <Header />
      <Title data={Data} />
      <Profile data={Data} />
      <IntroductionList data={Data} />
      <Footer data={Data} />
    </DarkModeContext>
  );
}
