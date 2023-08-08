import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase wad clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    // console.log("Uppercase wad clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclClick = () => {
    // console.log("Uppercase wad clicked"+text);
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handlecpClick = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handlersClick = (event) => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  };



  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleloClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecpClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handlersClick}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
