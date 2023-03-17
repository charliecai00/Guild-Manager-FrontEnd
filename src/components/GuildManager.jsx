import './GuildManager.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap';

const GuildManager = () => {
  // const apiUrl = "https://guild-manager.herokuapp.com/Guild/Reload"
  const apiUrl = "http://127.0.0.1:8000/Guild/Reload"

  function pullJson(){
    fetch(apiUrl)
    .then(response=>response.json())
    .then(result => {
      console.log(result)
    })
    // return 
  }
  useEffect(()=>{
    pullJson()
  }, [])

      return (
        <div>
        <meta charSet="utf-8" />
        <title>GuildManager</title>
        <link rel="stylesheet" href="GuildManager.css" media="screen" />
        <link rel="stylesheet" href="shared.css" />
        {/* The title */}
        <div className="guildmanager_title">
          <h1 className="title_text">GUILD MANAGER</h1>
        </div>
        <div className="select_guild">
          <h2 className="subtitle_text">
            Select A Guild
          </h2>
        </div>
        <div className="guild_container">
          <Button className="guild-button" href="/guild">Awesome Guild</Button>
          <Button className="guild-button" href="/guild">Cool Guys</Button>
          <Button className="guild-button" href="/guild">The Thieves Guild</Button>
          <Button className="guild-button" href="/guild">Awesome Guild</Button>
          <Button className="guild-button" href="/guild">Awesome Guild</Button>
          <Button className="guild-button" href="/guild">Awesome Guild</Button>
          <Button className="guild-button" href="/guild">Awesome Guild</Button>
          <Button className="guild-button" href="/guild">Awesome Guild</Button>
          <Button className="guild-button" href="/guild">Awesome Guild</Button>
        </div>
        <div className="new_guild">
          <form action="/action_page.php">
            <label id="new_guild_text" htmlFor="new_guild_name">New Guild:</label>
            <span>
              <input name="new_guild_name" id="new_guild_text" type="text" placeholder="New Guild Name" />
            </span>
          </form>
        </div>
      </div>
      );
    };


  export default GuildManager;
