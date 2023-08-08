import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
// import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
function App() {
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="" />
      <div className="container my-3">
        {/* <Routes>
        
        <Route path='/' element={ <TextForm heading="Enter the text to analyze below" />} /> 
        <Route path='/about' element={<About />} />            
         
        </Routes> */}

         <TextForm heading="Enter the text to analyze below" />

      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
