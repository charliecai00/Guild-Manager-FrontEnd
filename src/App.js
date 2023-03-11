import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import GuildManager from "./components/GuildManager";
import Guild from "./components/Guild";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<GuildManager/>} />
          <Route path='/guild' element={<Guild/>} />
          {/* If any route mismatches the upper 
          route endpoints then, Navigate triggers 
          and Navigates app to home component with to="/" */}
          {/* <Route path='*' element={<Navigate replace to="/" />} /> */}
        </Routes>
      </Router>
  )
}

export default App;
