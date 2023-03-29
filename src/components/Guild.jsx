import './Guild.css';
import './shared.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import iconCloseImg from '../img/icon-close.png';

const Guild = () => {
  const [guildDetail, setGuildDetail] = useState({
    "ID": null,
    "Name": "",
    "Funds": null,
    "QuestsCompleted": null,
    "Amt. of Hero": null,
    "Amt. of Party": null,
    "Amt. of Quest": null,
    "Hero": [],
    "Party": [],
    "Quest": [],
  });
  const herokuUrl = "https://guild-manager.herokuapp.com"
  const guildDetailUrl = `${herokuUrl}/Guild/Guild_Detail`;

  const getGuildInfo = (heroId) => {
    axios.post(guildDetailUrl, { "id": heroId })
      .then((response) => {
        console.log(response.data.Response);
        setGuildDetail(response.data.Response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const clickHero = () => {
    console.log("hero clicked");
  }

  const clickParty = () => {
    console.log("party clicked");
  }

  const clickQuest = () => {
    console.log("quest clicked");
  }

  useEffect(() => {
    console.log(localStorage.getItem('currGuild'));
    const guildDetail = JSON.parse(localStorage.getItem('currGuild'));
    const heroId = guildDetail.id;
    getGuildInfo(heroId);
  }, []);

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Guild</title>
      {/* The title */}
      <div className="guild_title_block">
        <h1 className="title_text">{guildDetail.Name ?? ""}</h1>
      </div>
      {/* The exit icon */}
      <a href="/">
        <img className='exit'
          src={iconCloseImg}>
        </img>
      </a>
      {/* the grid block */}
      <span className="grid-container">
        <div className="grid-item">
          <div className="grid-title">
            <div>Heroes</div>
          </div>
          <a href="/hero">
            <button className="grid-button" >Hire</button>
          </a>
          <ul className="guild_scrollable-list">
            {guildDetail.Hero && guildDetail.Hero.map(function (hero, ind) {
              return (
                <button className="elements-in-scrollable"
                  key={ind}
                  onClick={clickHero}>
                  {hero.name}
                </button>
              )
            })}
          </ul>
        </div>
        <div className="grid-item">
          <div className="grid-title">
            <div>Parties</div>
          </div>
          <button className="grid-button">Create</button>
          <ul className="guild_scrollable-list">
            {guildDetail.Party && guildDetail.Party.map(function (party, ind) {
              return (
                <button className="elements-in-scrollable"
                  key={ind}
                  onClick={clickParty}>
                  {party.name}
                </button>
              )
            })}
          </ul>
        </div>
        <div className="grid-item">
          <div className="grid-title">
            <div>Quests</div>
          </div>
          <a href="/quest">
            <button className="grid-button" >Buy</button>
          </a>
          <ul className="guild_scrollable-list">
            {guildDetail.Quest && guildDetail.Quest.map(function (quest, ind) {
              return (
                <button className="elements-in-scrollable"
                  key={ind}
                  onClick={clickQuest}>
                  {quest.name}
                </button>
              )
            })}
          </ul>
        </div>
      </span>
      {/* The detail box */}
      <span className="details">
        <div className="guild_status">
          Guild Stats:
          <br /> Funds: {guildDetail.Funds}
          <br /> Heroes: {guildDetail['Amt. of Hero']}
          <br /> Parties: {guildDetail['Amt. of Party']}
          <br /> Quests: {guildDetail['Amt. of Quest']}
          <br /> Quests Completed: {guildDetail.QuestsCompleted}
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
            <div style={{ textAlign: 'center' }}>3</div>
          </div>
          <div id="hero_exp">
            EXP:
            <div style={{ textAlign: 'center' }}>20</div>
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
