import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
     <>
    {/* <Navbar /> */}
     <Navbar title="texttuals"  />
     {/* <TextForm heading= "enter the text to analyse below"/> */}
 <About />
 </>
  );
}

export default App;
