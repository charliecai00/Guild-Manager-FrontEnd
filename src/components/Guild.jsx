import './Guild.css';
import './shared.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { GUILD_DETAIL_URL, HERO_DETAIL_URL, PARTY_DETAIL_URL, QUEST_DETAIL_URL } from './url';
import { ExitIcon } from './exitIcon';
import { CreateParty } from './CreateParty';

const Guild = () => {
  const [displayStatus, setDisplayStatus] = useState({
    'guild': { display: "inline-block" },
    'hero': { display: "none" },
    'party': { display: "none" },
    'quest': { display: "none" },
  });
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
  const [partyDetail, setPartyDetail] = useState({
    "ID": null,
    "Name": "",
    "HeroIDs": []
  });
  const [questDetail, setQuestDetail] = useState({
    "ID": null,
    "Name": "",
    "Challenge": [],
    "Difficulty": null,
    "Cost": null,
    "Resell": null,
    "Purchase": null
  });

  const [createPartyDisplay, setCreatePartyDisplay] = useState({ display: "none" });

  const getGuildInfo = (heroId) => {
    axios.post(GUILD_DETAIL_URL, { "id": heroId })
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
    setDisplayStatus(() => {
      return {
        'guild': { display: "inline-block" },
        'hero': { display: "none" },
        'party': { display: "none" },
        'quest': { display: "none" }
      }
    })
  }

  const clickHero = (event) => {
    console.log(event.target.value);
    // send a request to the backend to get the hero info
    axios.post(HERO_DETAIL_URL, { "id": parseInt(event.target.value) })
      .then((response) => {
        console.log(response);
        setHeroDetail(response.data.Response);
        setDisplayStatus(() => {
          return {
            'guild': { display: "none" },
            'hero': { display: "inline-block" },
            'party': { display: "none" },
            'quest': { display: "none" }
          }
        }
        )
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const clickParty = (event) => {
    console.log(event.target.value);
    // send a request to the backend to get the hero info
    axios.post(PARTY_DETAIL_URL, { "id": JSON.parse(event.target.value) })
      .then((response) => {
        console.log(response);
        setPartyDetail(response.data.Response);
        setDisplayStatus(() => {
          return {
            'guild': { display: "none" },
            'hero': { display: "none" },
            'party': { display: "inline-block" },
            'quest': { display: "none" }
          }
        }
        )
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const clickQuest = (event) => {
    console.log(event.target.value);
    // send a request to the backend to get the hero info
    axios.post(QUEST_DETAIL_URL, { "id": JSON.parse(event.target.value) })
      .then((response) => {
        console.log(response);
        setQuestDetail(response.data.Response);
        setDisplayStatus(() => {
          return {
            'guild': { display: "none" },
            'hero': { display: "none" },
            'party': { display: "none" },
            'quest': { display: "inline-block" }
          }
        }
        )
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log(localStorage.getItem('currGuild'));
    const guildDetail = JSON.parse(localStorage.getItem('currGuild'));
    const guildId = guildDetail.id;
    getGuildInfo(guildId);
  }, []);

  const GuildTitle = () => {
    return (
      <button className="guild_title_block"
        onClick={clickGuild}>
        <h1 className="title_text">{guildDetail.Name ?? ""}</h1>
      </button>
    )
  };

  const hireFunc = (event) => {
    // event.preventDefault();
    console.log("hire clicked");
  }

  const HeroColumn = () => {
    return (
      <div className="grid-item">
        <div className="grid-title">
          <div>Heroes</div>
        </div>
        <a href="/hero">
          <button className="grid-button" onClick={hireFunc}>Hire</button>
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
    )
  };

  const createParty = () => {
    console.log("create party clicked");
    setCreatePartyDisplay({ display: "inline-block" });
  }

  const PartyColumn = () => {
    return (
      <div className="grid-item">
        <div className="grid-title">
          <div>Parties</div>
        </div>
        <button className="grid-button" onClick={createParty}>Create</button>
        <ul className="guild_scrollable-list">
          {guildDetail.Party && guildDetail.Party.map(function (party, ind) {
            return (
              <button className="elements-in-scrollable"
                key={ind}
                onClick={clickParty}
                value={party.id}>
                {party.name}
              </button>
            )
          })}
        </ul>
      </div>
    )
  };

  const QuestColumn = () => {
    return (
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
                onClick={clickQuest}
                value={quest.id}>
                {quest.name}
              </button>
            )
          })}
        </ul>
      </div>
    )
  };

  const GuildDetailBoard = () => {
    return (
      <div className="guild_detail" style={displayStatus.guild}>
        Guild Stats:
        <br /> Funds: {guildDetail.Funds}
        <br /> Heroes: {guildDetail['Amt. of Hero']}
        <br /> Parties: {guildDetail['Amt. of Party']}
        <br /> Quests: {guildDetail['Amt. of Quest']}
        <br /> Quests Completed: {guildDetail.QuestsCompleted}
      </div>
    )
  };

  const HeroDetailBoard = () => {
    return (
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
    )
  };

  const addHero = (event) => {
    event.preventDefault();
    console.log("add clicked");
  }

  const removeHero = (event) => {
    event.preventDefault();
    console.log("remove clicked");
  }

  const disbandHero = (event) => {
    event.preventDefault();
    console.log("disband clicked");
  }

  const PartyDetailBoard = () => {
    return (
      <div className="party_detail" style={displayStatus.party}>
        <div className="party_name">{partyDetail.Name}</div>
        <div className="hero_list">
          <h4>Heroes</h4>
          {
            partyDetail.Hero && partyDetail.Hero.map(function (hero, ind) {
              return <div key={ind} style={{ fontSize: "25px", border: "1px solid black" }}>{hero.name + ",\n"}</div>
            })
          }
        </div>
        <button id="add_hero" onClick={addHero}>
          Add Hero
        </button>
        <button id="remove_hero" onClick={removeHero}>
          Remove Hero
        </button>
        <button id="disband_hero" onClick={disbandHero}>
          Disband Hero
        </button>
      </div>
    )
  };

  const QuestDetailBoard = () => {
    return (
      <div className="quest_detail" style={displayStatus.quest}>
        <div id="quest_name">{questDetail.Name}</div>
        <div id="challenge_list">
          Difficulty Lvl: {questDetail.Difficulty}
        </div>
        <button id="start_quest">
          Start
        </button>
        <button id="sell_quest">
          Sell
        </button>
      </div>
    )
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Guild</title>
      <GuildTitle />
      <ExitIcon value='/' />

      {/* the grid block */}
      <span className="grid-container">
        <HeroColumn />
        <PartyColumn />
        <QuestColumn />
      </span>

      {/* The detail box */}
      <span className="details">
        <GuildDetailBoard />
        <HeroDetailBoard />
        <PartyDetailBoard />
        <QuestDetailBoard />
      </span>

      <CreateParty style={createPartyDisplay} />
    </div>
  );
};

export default Guild;
