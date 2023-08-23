import React, { useState } from "react";

export default function Textforms(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text has been Capitalized", "success")
  };
  const handleLowClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("Your text has been converted", "success")

  };
  const handleClearClick = () => {
    let newText2 = "";
    setText(newText2);
    props.showAlert("Text area cleared", "success")

  };

  const copyClick = () =>{
    let text = document.getElementById("my-box")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Your text has been copied", "success")

  }
  const extraSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success")

  }

  const Speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Your words are speaking", "success")

  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const replacecasefunc = () => {
    let existing_text = prompt("Enter which word to replace : ");
    let replaced_text = prompt("Enter New Text");
    setText(text.replaceAll(existing_text, replaced_text))
    props.showAlert("Your text has been relaced", "success")

  }
  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("First letter of each word is capitalized", "success")

}
  return (
    <>
      <div>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb 3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleonChange}
              style = {{backgroundColor: props.mode === "dark"? "gray": "white",
              color: props.mode === "dark"? "white":"#061326"}}
              id="my-box"
              rows="10"
            ></textarea>
          </div>
          <button style={{background: props.mode === "dark"? "black": "white", color: props.mode === "dark"? "white": "black"}}className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button style={{background: props.mode === "dark"? "black": "white", color: props.mode === "dark"? "white": "black"}} className="btn btn-primary my-3 mx-1" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button style={{background: props.mode === "dark"? "black": "white", color: props.mode === "dark"? "white": "black"}} className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>
            Clear
          </button>
          
          <button style={{background: props.mode === "dark"? "black": "white", color: props.mode === "dark"? "white": "black"}} className="btn btn-primary my-3 mx-1" onClick={Speak}>
            Speak
          </button>
          <button style={{background: props.mode === "dark"? "black": "white", color: props.mode === "dark"? "white": "black"}} className="btn btn-primary my-3 mx-1" onClick={copyClick}>
            Click to Copy
          </button>
          <button style={{background: props.mode === "dark"? "black": "white", color: props.mode === "dark"? "white": "black"}} className="btn btn-primary my-3 mx-1" onClick={extraSpaces}>
            Remove Extra Spaces
          </button>
          <button style={{background: props.mode === "dark"? "black": "white", color: props.mode === "dark"? "white": "black"}} className="btn btn-primary my-3 mx-1"  onClick={replacecasefunc}>
            Replace words
          </button>
          <button style={{background: props.mode === "dark"? "black": "white", color: props.mode === "dark"? "white": "black"}} className="btn btn-primary my-3 mx-1" onClick={handleCapitalize}>
          Capitalize first letter
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          You have {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read for Average readers</p>
        <p>{0.02 * text.split(" ").length} Minutes read for Slow readers</p>
        <p>{0.004 * text.split(" ").length} Minutes read for Fast readers</p>
        <h2>Preview</h2>
        <p className="preview-txt">{text.length> 0? text:"Enter your text to preview"}</p>
      </div>
    </>
  );
}
