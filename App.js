// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  let [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
   })

   setTimeout(()=>{
        setAlert(null)
   } , 2000)
  }

  const toggleMode=()=>{
     if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#073e75";
      showAlert("Dark mode is enabled" , "success")
      document.title = "Text converter - dark mode"
      

     }
     else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled" , "success")
      document.title = "Text converter - light mode"
     }
  }

  
  return (
    
     <>
     
     {/* <Router> */}
     <Navbar title="text" abouttext="About" mode={mode}  toggleMode = {toggleMode}></Navbar>
     
     <Alert alert={alert}></Alert>
        
     <div className="container my-3" >
     {/* <Routes>
          <Route path="about" element={<About/>}>
            
          </Route> */}
         
          {/* <Route path="/"  element={ <Textform heading="Enter your text" mode={mode}  showAlert={showAlert}></Textform>}> */}
          <Textform heading="Enter your text" mode={mode}  showAlert={showAlert}></Textform>
         
          {/* </Route>
        </Routes> */}
        </div>
     {/* </Router> */}
       
   


      
     
     
     
     
  

    </>
  );
}

export default App;
