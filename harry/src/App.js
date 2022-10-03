import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, {useState} from 'react'
import Alert from './Components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] =useState(null)



  const showAlert = (message, type) => {
 setAlert({
  msg: message,
  type :type,
 })

 setTimeout(() => {
     setAlert(null);
 },2000);

  }


  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ="black";
      showAlert("Dark mode has been enabled",'sucess');

    }else{
    setMode('light');
    document.body.style.backgroundColor ="white";
    showAlert('light mode has been enabled', 'sucess');
    }
  }

  return (
     <>
    {/* <Navbar /> */}
     <Navbar title="texttuals" mode={mode} toggleMdoe={toggleMode} />
   <Alert alert={alert} />
     <TextForm showAlert={showAlert} heading= "enter the text to analyse below"/>
 <About />
 </>
  );
}

export default App;
