import './App.css';
import React from 'react';

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import Warfield from "./components/Warfield";


const App = () => {
  return (
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/
          }
          {/* <Route exact path="/" component={Home} /> */}
          <Route path='/' element={<Home/>} />
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          {/* <Route path="/warfield" component={Warfield} /> */}
          <Route path='/warfield' element={<Warfield/>} />
            
          {/* If any route mismatches the upper 
          route endpoints then, Navigate triggers 
          and Navigates app to home component with to="/" */}
          <Route path='*' element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    
  )
}


export default App;
