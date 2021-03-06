import React from "react";
import "./InlineSpan.css";

function InlineSpan({ title, text, image, order }) {
  return (
    <div className={order ? "inlineSpan left" : "inlineSpan right"}>
      <span className="inlineImg">
        <a href={image} target="_blank">
          <img src={image} alt="InfoImage" />
        </a>
      </span>
      <span className={"inlineText"}>
        <h1>{title}</h1>
        <p>{text}</p>
      </span>
    </div>
  );
}

export default InlineSpan;
