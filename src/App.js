import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, {useState} from 'react'
import Alerts from './components/Alerts';
import About from './components/About';
// import { BrowserRouter as Router, Switch , Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message)=>{
      setAlert({
        type: type,
        message: message
      })
      setTimeout (()=>{
        setAlert(null);
      },1500);
  }
  const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(24 39 57)';
        showAlert("success","Dark mode has been enabled.");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("success","Light mode has been enabled.");
      }
  }
  // const cls = "light";
  // const handleMode = (cls)=>{
  //   console.log(cls);
  // }
  return (
    <>
    {/* <Router> */}
      <Navbar title = "Text Utils" aboutText = "About Us" mode = {mode} toggleMode = {toggleMode}/>
      <Alerts alert = {alert}/>
      {/* <Switch>
          <Route exact path="/About">
            <About /> 
          </Route>
          <Route exact path="/">  */}
          <TextForms to="/" showAlert={showAlert} heading="welcome to  text converter, Enter your text" mode={mode} /> 
          {/* </Route>
      </Switch>
    </Router> */}
    </>
  );
}

export default App;
