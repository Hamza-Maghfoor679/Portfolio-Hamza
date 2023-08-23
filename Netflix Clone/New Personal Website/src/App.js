import './App.css';

import Textforms from './components/Textforms';

import Navbar from './components/Navbar';

// import About from './components/About';
import React, { useState } from 'react';

import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);


  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      document.getElementById("mode-txt").innerHTML = "Enable Dark mode"
      showAlert("Light mode has been activated", "success")
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor = "#061326"
      document.body.style.color = "white"
      document.getElementById("mode-txt").innerHTML = "Disable Dark mode"
      showAlert("Dark mode has been activated", "success")
    }
  }


  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      },2000);
  }

  return (
    <>
   
 <Navbar title = "Text Manipulator" text = "Home" mode = {mode} toggleMode = {toggleMode}/>
 <Alert alert = {alert}/>
    <Textforms showAlert = {showAlert} heading="Enter your text below" mode = {mode}/>
 {/* <Navbar/> */}
 {/* <About mode = {mode}/> */}
    </>
  );
}

export default App;
