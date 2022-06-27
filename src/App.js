import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';
// Finally, Routing starts from here!!
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes
//   // Link
// } from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#2f2f2f';
      // showAlert("Dark Mode has been Enabled", "success");

      // document.title = 'dark modeee';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light Mode has been Enabled", "success");
    }
  }

  

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">



      {/* <Routes> */}

          {/* <Route exact path="/about" element={<About/>} /> */}
          
          {/* <Route exact path="/" element={<TextForm showAlert = {showAlert} heading = "Enter Your Text Below" mode = {mode} />}/> */}
          {/* <TextForm showAlert = {showAlert} heading = "Enter Your Text Below" mode = {mode} /> */}

      {/* </Routes> */}


        <TextForm showAlert = {showAlert} heading = "Enter Your Text Below" mode = {mode} />

        {/* <About/> */}




      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
