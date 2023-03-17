import './Guild.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap';

function clickMe(){
  alert("You clicked me!");
}

const Guild = () => {
      return (
        <div>
          <meta charSet="utf-8" />
          <title>Guild</title>
          <link rel="stylesheet" href="Guild.css" media="screen" />
          <link rel="stylesheet" href="shared.css" />
          {/* The title */}
          <div className="guild_title_block">
            <h1 className="title_text">The Thieves Guild</h1>
          </div>
          {/* the grid block */}
          <span className="grid-container">
            <div className="grid-item">
              <div className="grid-title">
                <div>Heroes</div>
              </div>
              <a href="/hero">
                <button className="grid-button" >Hire</button>
              </a>
              <ul className="scrollable-list">
                <li className="elements-in-scrollable">John</li>
                <li className="elements-in-scrollable">Basquiat</li>
                <li className="elements-in-scrollable">Gandalf</li>
                <li className="elements-in-scrollable">Conan</li>
                <li className="elements-in-scrollable">Link 5</li>
              </ul>
            </div>
            <div className="grid-item">
              <div className="grid-title">
                <div>Parties</div>
              </div>
              <button className="grid-button">Create</button>
              <ul className="scrollable-list">
                <li className="elements-in-scrollable">Thieves</li>
                <li className="elements-in-scrollable">Robbers</li>
                <li className="elements-in-scrollable">Chill Dudes</li>
              </ul>
            </div>
            <div className="grid-item">
              <div className="grid-title">
                <div>Quests</div>
              </div>
              <a href="/quest">
                <button className="grid-button" >Buy</button>
              </a>
              <ul className="scrollable-list">
                <li className="elements-in-scrollable">The Woods</li>
                <li className="elements-in-scrollable">The Dragon</li>
                <li className="elements-in-scrollable">The Wave</li>
                <li className="elements-in-scrollable">The Storm</li>
              </ul>
            </div> 
          </span>
          {/* The detail box */}
          <span className="details">
            <div className="guild_status">
              Guild Stats:
              <br /> Funds: 30
              <br /> Heroes: 4
              <br /> Parties: 3
              <br /> Quests: 2
              <br /> Quests Completed: 4
            </div>
            {/* HERO DETAIL BOARD: display default set as "none"*/}
            <div className="hero_detail">
              <div id="hero_name">Hero Name</div>
              <div id="hero_param">
                STR: 9
                <br /> DEX: 32
                <br /> CON: 20
                <br /> WIS: 34
                <br /> INT: 12
                <br /> CHA: 7
                <br /> INT: 12
                <br /> CHA: 7
              </div>
              <div id="hero_health">
                Health:
                <div style={{textAlign: 'center'}}>3</div>
              </div>
              <div id="hero_exp">
                EXP:
                <div style={{textAlign: 'center'}}>20</div>
              </div>
              <button id="hero_heal">
                HEAL
              </button>
              <button id="hero_fire">
                FIRE
              </button>
            </div>
            {/* PARTY DETAIL BOARD: display default set as "none"*/}
            <div className="party_detail">
              <div id="party_name">Party Name</div>
              <div id="hero_list">
                John
                <br /> Conan
              </div>
              <button id="add_hero">
                Add Hero
              </button>
              <button id="remove_hero">
                Remove Hero
              </button>
              <button id="disband_hero">
                Disband Hero
              </button>
            </div>
            {/* QUEST DETAIL BOARD: display default set as "none"*/}
            <div className="quest_detail">
              <div id="quest_name">Quest Name</div>
              <div id="challenge_list">
                Challenge Lvl: 5
              </div>
              <button id="start_quest">
                Start
              </button>
              <button id="sell_quest">
                Sell
              </button>
            </div>
          </span>
        </div>
      );
    };


  export default Guild;
