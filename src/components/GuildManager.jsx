import './GuildManager.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RELOAD_URL, CREATE_GUILD_URL  } from './url';

const GuildManager = () => {
  const navigate = useNavigate();
  const [guilds, setGuilds] = useState();
  const [formData, setFormData] = useState("");

  const handleClick = (event) => {
    localStorage.setItem("currGuild", event.target.value);
    navigate('/guild');
  };

  function pullJson() {
    fetch(RELOAD_URL)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setGuilds(result.Response);
      })
  }

  useEffect(() => {
    pullJson();
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(CREATE_GUILD_URL, { "Name": formData })
      .then((response) => {
        console.log(response.data);
        pullJson();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setFormData(value);
  };

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
        {guilds && guilds.map(function (guildInfo, ind) {
          return (
            <button
              className="guild-button"
              value={JSON.stringify({ ID: guildInfo.ID, Name: guildInfo.Name })}
              onClick={handleClick}
              key={ind}
            >
              {guildInfo.Name}
            </button>
          )
        })}
      </div>
      <div className="new_guild">
        <form onSubmit={handleSubmit}>
          <label id="new_guild_text" htmlFor="new_guild_Name">New Guild:</label>
          <span>
            <input Name="new_guild_Name" id="new_guild_text" type="text" value={formData} onChange={handleInputChange} />
          </span>
        </form>
      </div>
    </div>
  );
};


export default GuildManager;
