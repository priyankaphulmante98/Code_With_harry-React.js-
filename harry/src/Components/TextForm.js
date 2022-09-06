import React, {useState} from 'react';
// import React from 'react'



export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText("You have clicked to handleUpClick")
    }

    const handleLowClick = ()=>{
        console.log("lowercase was clicked" +  text);
        let hello = text.toLowerCase();
        setText(hello);
    }

    const handleClearClick = ()=>{
        let hi = " ";
        setText(hi);
    }

    const handleOnChange = (event) => {
        // console.log("on change")
        setText(event.target.value);
        // setText("newText"); //correct way to change the state
    }

    
    const [text, setText] = useState();
    return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
   <div className="mb-3">
  <textarea className="form-control"id="myBox" rows="8" 
     value={text} onChange={handleOnChange}></textarea>
   </div>
  <button className="btn btn primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
  <button className="btn btn primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container">
        <h1>Your text summary</h1>
        <b><p>{text.split(" ").length} words and {text.length} characters</p></b>
        <b><p>{0.008 * text.split(" ").length}Minutes read</p></b>
        <h2>Prview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
