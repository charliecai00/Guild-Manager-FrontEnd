import './GuildManager.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap';

const GuildManager = () => {
      return (
        <div>
        <meta charSet="utf-8" />
        <title>GuildManager</title>
        <link rel="stylesheet" href="GuildManager.css" media="screen" />
        <link rel="stylesheet" href="shared.css" />
        {/* The title */}
        <div className="guildmanager_title">
          <h1 className="title_text">GUILD MANAGER
          </h1>
        </div>
        <div className="select_guild">
          <h2 className="subtitle_text">
            Select A Guild
          </h2>
        </div>
        <div className="guild_container">
          <button className="guild-button">Awesome Guild</button>
          <button className="guild-button">Cool Guys</button>
          <button className="guild-button">The Thieves Guild</button>
          <button className="guild-button">Awesome Guild</button>
          <button className="guild-button">Awesome Guild</button>
          <button className="guild-button">Awesome Guild</button>
          <button className="guild-button">Awesome Guild</button>
          <button className="guild-button">Awesome Guild</button>
          <button className="guild-button">Awesome Guild</button>
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
