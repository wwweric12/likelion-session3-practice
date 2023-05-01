import React from "react";
import "./Title.css";
export default function Title(props) {
  const { title, titleDesc } = props.data;
  return (
    <>
      <section className="title">
        <h1 className="title-head">{title}</h1>
        <p className="title-desc">{titleDesc}</p>
      </section>
      <a name="profile"></a>
    </>
  );
}
