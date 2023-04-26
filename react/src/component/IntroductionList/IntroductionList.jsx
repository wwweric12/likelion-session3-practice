import React from "react";
import Introduction from "../Introduction/Introduction";
import "./IntroductionList.css";

export default function IntroductionList(props) {
  const { introduction } = props.data;
  return (
    <div>
      <a name="introduction"></a>
      <section className="introduction">
        {introduction.map((data, index) => (
          <Introduction data={data} key={index} />
        ))}
      </section>
    </div>
  );
}
