import './GuildManager.css';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import VariableContext from './context';

const GuildManager = () => {
  const herokuUrl = "https://guild-manager.herokuapp.com"
  const apiUrl = "http://127.0.0.1:8000/Guild/Reload";
  const [guilds, setguilds] = useState();
  const [formData, setFormData] = useState("");
  const { currGuild, setCurrGuild } = useContext(VariableContext);

  const reloadUrl = `${herokuUrl}/Guild/Reload`;
  const createGuildUrl = `${herokuUrl}/Guild/Create`;
  
  let fetchedData;

  const handleClick = (event) => {
    // console.log(event.target.value);
    setCurrGuild(event.target.value);
    // navigate to the '/guild' route
    window.location.href = '/guild';
  };
  
  function pullJson() {
    fetch(reloadUrl)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        fetchedData = result.Response.map(function(guildInfo, ind){
          return(
            <button className="guild-button" 
                    value={JSON.stringify({"id": guildInfo.id, "name": guildInfo.name})}
                    onClick={handleClick}
                    key={ind}>
              {guildInfo.name}
            </button>
          )
        })
        setguilds(fetchedData);
      })
  }

  useEffect(() => {
    pullJson();
  }, [])

  useEffect(() => {
    console.log(currGuild);
  }, [currGuild]);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(createGuildUrl, {"Name": formData})
      .then((response) => {
        console.log(response.data);
        pullJson();
        // Do something with the response, like update state or redirect
      })
      .catch((error) => {
        console.log(error);
        // Handle the error, like displaying an error message
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
        {guilds}
        
              {/* <button className="guild-button" 
                      value={JSON.stringify({"id": "000", "name": "inline"})}
                      onClick={handleClick}>
                {"test"}
              </button> */}
  
      </div>
      <div className="new_guild">
        <form onSubmit={handleSubmit}>
          <label id="new_guild_text" htmlFor="new_guild_name">New Guild:</label>
          <span>
            <input name="new_guild_name" id="new_guild_text" type="text" value={formData} onChange={handleInputChange} />
          </span>
        </form>
      </div>
    </div>
  );
};


export default GuildManager;
