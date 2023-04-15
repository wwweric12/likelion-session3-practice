import "../Main.css";
import { useState } from "react";
import HobbyList from "./HobbyList";
import SpecialList from "./SpecialList";
import Info from "./Info";
import DarkMode from "./DarkMode";
import Data from "./Data.json";

const Main = () => {
  const [isDark, setIstDark] = useState(false);
  return (
    <>
      <div className={isDark ? "darkMode" : ""}>
        <DarkMode darkMode={setIstDark} isDark={isDark} />
        <Info data={Data} dark={isDark} />
        <HobbyList data={Data} dark={isDark} />
        <SpecialList data={Data} dark={isDark} />
      </div>
    </>
  );
};

export default Main;
