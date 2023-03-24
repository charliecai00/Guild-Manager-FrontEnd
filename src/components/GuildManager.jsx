import './GuildManager.css';
import React from 'react';
import { useState, useEffect } from 'react';

const GuildManager = () => {
  // const apiUrl = "https://guild-manager.herokuapp.com/Guild/Reload"
  const apiUrl = "http://127.0.0.1:8000/Guild/Reload";
  const [guilds, setguilds] = useState();
  let fetchedData;
  function pullJson() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        fetchedData = result.Response.map(function(guildName, ind){
          return(
            <a href="/guild" key={ind}>
              <button className="guild-button" href="/guild">{guildName}</button>
            </a>
          )
        })
        setguilds(fetchedData);
      })
  }
  useEffect(() => {
    pullJson();
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
        {guilds}
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
