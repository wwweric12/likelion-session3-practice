import React from "react";
import "./Introduction.css";
export default function Introduction(props) {
  return (
    <div className="introduction-box">
      <h1 className="introduction-title">{props.data.title}</h1>
      <p className="introduction-desc">{props.data.content}</p>
    </div>
  );
}
