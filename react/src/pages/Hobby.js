import React from "react";

export default function Hobby(props) {
  return (
    <>
      <div className={props.isDark ? "hobbyContentDarkMode" : "hobbyContent"}>
        {props.data}
      </div>
    </>
  );
}
