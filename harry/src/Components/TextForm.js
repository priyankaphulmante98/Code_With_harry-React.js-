import React, {useState} from 'react';
// import React from 'react'



export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText("You have clicked to handleUpClick")
    }
    const handleOnChange = (event) => {
        // console.log("on change")
        setText(event.target.value);
        // setText("newText"); //correct way to change the state
    }
       const [text, setText] = useState();
   
  return (
    <div>
    <h1>{props.heading}</h1>
   <div className="mb-3">
  <textarea className="form-control"id="myBox" rows="8" 
     value={text} onChange={handleOnChange}></textarea>
   </div>
  <button className="btn btn primary" onClick={handleUpClick}>
    Conver to uppercase</button>
    </div>
  )
}
