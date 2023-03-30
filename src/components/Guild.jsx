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
  const [heroDetail, setHeroDetail] = useState({
    "ID": null,
    "Name": "",
    "Health": null,
    "MaxHealth": null,
    "Exp": null,
    "Stats": {
      "STR": null,
      "CON": null,
      "DEX": null,
      "WIS": null,
      "INT": null,
      "CHA": null
    },
    "Hired?": null,
    "InParty?": null,
    "PartyID": null,
    "Cost": null
  });
  const [displayStatus, setDisplayStatus] = useState({
    'guild': {display: "inline-block"},
    'hero': {display: "none"},
    'party': {display: "none"},
    'quest': {display: "none"},
  });
  const herokuUrl = "https://guild-manager.herokuapp.com"
  const guildDetailUrl = `${herokuUrl}/Guild/Guild_Detail`;
  const heroDetailUrl = `${herokuUrl}/Hero/Hero_Detail`;

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
  const clickGuild = () => {
    console.log("guild clicked");
    setDisplayStatus((preStatus) => {
      return {
        ...preStatus,
        'guild': {display: "inline-block"},
        'hero': {display: "none"}
      }
    })
  }

  const clickHero = (event) => {
    console.log(event.target.value);
    // send a request to the backend to get the hero info
    axios.post(heroDetailUrl, { "id":  JSON.parse(event.target.value) })
      .then((response) => {
        console.log(response);
        setHeroDetail(response.data.Response);
        setDisplayStatus((preStatus) => {
          return {
            ...preStatus,
            'guild': {display: "none"},
            'hero': {display: "inline-block"},
          }
        }
      )})
      .catch((error) => {
        console.log(error);
      });
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
      <button className="guild_title_block"
        onClick={clickGuild}>
        <h1 className="title_text">{guildDetail.Name ?? ""}</h1>
      </button>
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
                  onClick={clickHero}
                  value={hero.id}>
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
        <div className="guild_status" style={displayStatus.guild}>
          Guild Stats:
          <br /> Funds: {guildDetail.Funds}
          <br /> Heroes: {guildDetail['Amt. of Hero']}
          <br /> Parties: {guildDetail['Amt. of Party']}
          <br /> Quests: {guildDetail['Amt. of Quest']}
          <br /> Quests Completed: {guildDetail.QuestsCompleted}
        </div>
        {/* HERO DETAIL BOARD: display default set as "none"*/}
        <div className="hero_detail" style={displayStatus.hero}>
          <div id="hero_name">{heroDetail.Name}</div>
          <div id="hero_param">
            STR: {heroDetail.Stats.STR}
            <br /> DEX: {heroDetail.Stats.DEX}
            <br /> CON: {heroDetail.Stats.CON}
            <br /> WIS: {heroDetail.Stats.WIS}
            <br /> INT: {heroDetail.Stats.INT}
            <br /> CHA: {heroDetail.Stats.CHA}
            <br /> INT: {heroDetail.Stats.INT}
            <br /> CHA: {heroDetail.Stats.CHA}
          </div>
          <div id="hero_health">
            Health:
            <div style={{ textAlign: 'center' }}>{heroDetail.Health}</div>
          </div>
          <div id="hero_exp">
            EXP:
            <div style={{ textAlign: 'center' }}>{heroDetail.Exp}</div>
          </div>
          <button id="hero_heal">
            HEAL
          </button>
          <button id="hero_fire">
            FIRE
          </button>
        </div>
        {/* PARTY DETAIL BOARD: display default set as "none"*/}
        <div className="party_detail" style={displayStatus.party}>
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
        <div className="quest_detail" style={displayStatus.quest}>
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
