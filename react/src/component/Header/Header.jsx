import React from "react";
import "./Header.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { BiMoon, BiSun } from "react-icons/bi";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <header className="header">
        <button className="btn" onClick={toggleDarkMode}>
          {!darkMode && <BiMoon />}
          {darkMode && <BiSun />}
        </button>
        <ul className="header-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
        </ul>
        <div className="header-bar"></div>
      </header>
      <a name="home"></a>
    </>
  );
}
