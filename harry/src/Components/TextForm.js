import React, {useState} from 'react';
// import React from 'react'



export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!" , "success");
        // setText("You have clicked to handleUpClick")
    }

    const handleLowClick = ()=>{
        console.log("lowercase was clicked" +  text);
        let hello = text.toLowerCase();
        setText(hello);
        props.showAlert("Converted to lowercase!" , "success");
    }

    const handleClearClick = ()=>{
        let hi = " ";
        setText(hi);
        props.showAlert("Ctext cleared!" , "success");
       
    }

    const handleOnChange = (event) => {
        // console.log("on change")
        setText(event.target.value);
       
        // setText("newText"); //correct way to change the state
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!" , "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Romve extra spaces!" , "success");
    }
  
    
    const [text, setText] = useState();
    return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
   <div className="mb-3">
  <textarea className="form-control"  style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" 
     value={text} onChange={handleOnChange}></textarea>
   </div>
  <button className="btn btn primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
  <button className="btn btn primary mx-2" onClick={handleClearClick}>Clear Text</button>
   <button className="btn btn primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    {/* <div className="container" style={{backgroundColor:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <b><p>{text.split(" ").length} words and {text.length} characters</p></b>
        <b><p>{0.008 * text.split(" ").length}Minutes read</p></b>
        <h2>Prview</h2>
        <p>{text.length>0 ? text : 'Enter somthing to textbox above to prview it here'}</p>
    </div> */}
    </>
  )
}


