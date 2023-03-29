import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import GuildManager from "./components/GuildManager";
import Guild from "./components/Guild";
import Hero from "./components/Hero";
import Quest from "./components/Quest";
import QuestReport from "./components/QuestReport";
import VariableContext from './components/context';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

const App = () => {
  const [currGuild, setCurrGuild] = useState({"id": "0", "name": ""});
  const [theme, setTheme] = useState("dark");

  return (
    //Case 1: using router, PageTwo doesn't know the variables
      <Router>
        <VariableContext.Provider value={{ currGuild, setCurrGuild, theme, setTheme }}>
        <Routes>
          <Route path='/' element={<GuildManager/>} />
          <Route path='/guild' element={<Guild/>} />
          <Route path='/hero' element={<Hero/>} />
          <Route path='/quest' element={<Quest/>} />
          <Route path='/questReport' element={<QuestReport/>} />
          <Route path='/1' element={<PageOne/>} />
          <Route path='/2' element={<PageTwo/>} />

          {/* If any route mismatches the upper 
          route endpoints then, Navigate triggers 
          and Navigates app to home component with to="/" */}
          {/* <Route path='*' element={<Navigate replace to="/" />} /> */}
        </Routes>
        </VariableContext.Provider>
      </Router>

        // Case 2 : this is working, variables are reflected in PageTwo
        // <VariableContext.Provider value={{ currGuild, setCurrGuild, theme, setTheme }}>
        //     <PageOne/>
        //     <PageTwo/>
        // </VariableContext.Provider>

  );
}

export default App;
