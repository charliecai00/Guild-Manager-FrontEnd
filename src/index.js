import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Guild from './components/Guild';
// import GuildManager from './components/GuildManager';
// import DoingQuest from './components/DoingQuest';
// import Hero from './components/Hero';
// import Quest from './components/Quest';
import QuestReport from './components/QuestReport';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Guild/> */}
    {/* <GuildManager/> */}
    {/* <DoingQuest/> */}
    {/* <Hero/> */}
    {/* <Quest/> */}
    <QuestReport/>
    {/* <Guild/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
