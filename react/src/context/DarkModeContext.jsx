import React, { createContext, useEffect, useState, useContext } from "react";

const darkModeContext = createContext(); //context만들고

export default function DarkModeContext({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updatedDarkMode(!darkMode);
  };
  const updatedDarkMode = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches); //window.matchMedia는 브라우저에서 제공하는 API 중 하나로, 미디어 쿼리를 사용하여 현재 뷰포트의 상태를 조회할 수 있습니다. (prefers-color-scheme: dark)는 미디어 쿼리의 일종으로, 사용자의 운영체제 또는 브라우저가 다크 모드 설정이 되어 있는지를 나타냅니다..matches는 window.matchMedia의 반환 객체의 속성 중 하나로, 현재 미디어 쿼리의 조건이 충족되는지를 나타냅니다. "(prefers-color-scheme: dark)" 미디어 쿼리가 참인 경우, 즉 사용자의 다크 모드 설정이 되어 있는 경우에는 matches가 true로 반환됩니다. 반대로, 다크 모드 설정이 되어 있지 않은 경우에는 matches가 false로 반환됩니다.
    console.log(isDark);
    setDarkMode(isDark);
    updatedDarkMode(isDark);
  }, []);
  return (
    <darkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(darkModeContext); //자식에서 useContext를 쓰면서 다크모드인지 확인을 해야되기때문에 간편하게 하기위해서 이렇게 훅을 하나더 만듬
