import './Guild.css';
import './shared.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  HEROKU_URL,
  GUILD_DETAIL_URL,
  HERO_DETAIL_URL,
  HERO_OPTIONS_URL,
  PARTY_DETAIL_URL,
  QUEST_DETAIL_URL,
  DISBAND_PARTY_URL,
  SELL_QUEST_URL
} from './url';
import { ExitIcon } from './ExitIcon';
import { CreateParty } from './CreateParty';
import { SelectHero } from './SelectHero';
import { SelectParty } from './SelectParty';

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
  const [selectHeroFunction, setSelectHeroFunction] = useState("");
  const [selectHeroDisplay, setSelectHeroDisplay] = useState({ display: "none" });
  const [selectPartyDisplay, setSelectPartyDisplay] = useState({ display: "none" });
  const [heroOptions, setHeroOptions] = useState({});
  const [choosenHeroOption, setChoosenHeroOption] = useState();

  const getGuildInfo = (guildId) => {
    axios.post(GUILD_DETAIL_URL, { "id": guildId })
      .then((response) => {
        console.log("getGuildInfo called to refresh guild info");
        setGuildDetail(response.data.Response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getHeroOptions = () => {
    axios.get(HERO_OPTIONS_URL)
      .then((response) => {
        setHeroOptions(response.data.Response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log("current guild:" + localStorage.getItem('currGuild'));
    const guildDetail = JSON.parse(localStorage.getItem('currGuild'));
    const guildId = guildDetail.ID;
    getGuildInfo(guildId);
    getHeroOptions();
  }, []);

  const clickGuild = () => {
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

  const getPartyInfo = (partyId) => {
    axios.post(PARTY_DETAIL_URL, { "id": parseInt(partyId) })
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

  const clickParty = (event) => {
    getPartyInfo(event.target.value);
    setDisplayStatus(() => {
      return {
        'guild': { display: "none" },
        'hero': { display: "none" },
        'party': { display: "inline-block" },
        'quest': { display: "none" }
      }
    }
    )
  }

  const clickQuest = (event) => {
    axios.post(QUEST_DETAIL_URL, { "id": JSON.parse(event.target.value) })
      .then((response) => {
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

  const GuildTitle = () => {
    return (
      <button className="guild_title_block"
        onClick={clickGuild}>
        <h1 className="title_text">{guildDetail.Name ?? ""}</h1>
      </button>
    )
  };

  const hireFunc = (event) => {
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
                value={hero.ID}>
                {hero.Name}
              </button>
            )
          })}
        </ul>
      </div>
    )
  };

  const createParty = () => {
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
                value={party.ID}>
                {party.Name}
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
                value={quest.ID}>
                {quest.Name}
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
        Guild Stats: <br />
        <br /> Funds: ${guildDetail.Funds}
        <br /> Heroes: {guildDetail['Amt. of Hero']}
        <br /> Parties: {guildDetail['Amt. of Party']}
        <br /> Quests: {guildDetail['Amt. of Quest']}
        <br /> Quests Completed: {guildDetail.QuestsCompleted}
      </div>
    )
  };

  const setHeroOption = (event) => {
    setChoosenHeroOption(event.target.value);
  }

  const submitHeroOption = () => {
    if (choosenHeroOption === undefined) {
      return;
    }
    const heroOptionUrl = HEROKU_URL + choosenHeroOption;
    axios.post(heroOptionUrl, { "id": heroDetail.ID, "guild_id": guildDetail.ID })
      .then((response) => {
        if (response.data.Response !== "Success") {
          alert(response.data.Response);
        } else {
          console.log('Success');
          getGuildInfo(guildDetail.ID);
        };
      })
  }

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
        </div>
        <div id="hero_health">
          Health:
          <div style={{ textAlign: 'center' }}>{heroDetail.Health}</div>
        </div>
        <div id="hero_exp">
          EXP:
          <div style={{ textAlign: 'center' }}>{heroDetail.Exp}</div>
        </div>
        <select className='hero_options' value={choosenHeroOption} onChange={setHeroOption}>
          <option>What To Do To This Hero?</option>
          {
            Object.keys(heroOptions).map((option, ind) => {
              return (
                <option key={ind} value={heroOptions[option]}>{option}</option>
              )
            })
          }
        </select>
        <form onSubmit={submitHeroOption}>
          <button className="do_option" stype="submit">Do it</button>
        </form>
      </div>
    )
  };

  const addHero = () => {
    setSelectHeroFunction('add');
    setSelectHeroDisplay({ display: "inline-block" });
  }

  const removeHero = () => {
    setSelectHeroFunction('remove');
    setSelectHeroDisplay({ display: "inline-block" });
  }

  const disbandParty = () => {
    axios.post(DISBAND_PARTY_URL, { "id": guildDetail.ID, "party_id": partyDetail.ID })
      .then((response) => {
        if (response.data.Response !== "Success") {
          alert(response.data.Response);
          return;
        };
        getGuildInfo(guildDetail.ID);
        setDisplayStatus({ ...displayStatus, party: { display: "none" } });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const PartyDetailBoard = () => {
    return (
      <div className="party_detail" style={displayStatus.party}>
        <div className="party_name">{partyDetail.Name}</div>
        <div className="hero_list">
          Heroes: <br />
          <br />
          {
            partyDetail.Hero && partyDetail.Hero.map(function (hero, ind) {
              return <div key={ind} style={{ fontSize: "30px", border: "1px solid black" }}>{hero.Name}<br /></div>
            })
          }
        </div>
        <button id="add_hero" onClick={addHero}>
          Add Hero
        </button>
        <button id="remove_hero" onClick={removeHero}>
          Remove Hero
        </button>
        <button id="disband_party" onClick={disbandParty}>
          Disband
        </button>
      </div>
    )
  };

  const sellQuest = () => {
    axios.post(SELL_QUEST_URL, { "id": questDetail.ID, "guild_id": guildDetail.ID })
      .then((response) => {
        if (response.data.Response !== "Success") {
          alert(response.data.Response);
          return;
        };
        getGuildInfo(guildDetail.ID);
        setDisplayStatus({ ...displayStatus, quest: { display: "none" } });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const startQuest = () => {
    setSelectPartyDisplay({ display: "inline-block" });
  }

  const QuestDetailBoard = () => {
    return (
      <div className="quest_detail" style={displayStatus.quest}>
        <div id="quest_name">{questDetail.Name}</div>
        <div id="challenge_list">
          Challenge Lvl: {questDetail.ChallengeLevel} <br />
          Cost: {questDetail.Cost} <br />
          Resell: {questDetail.Resell} <br />
        </div>
        <button id="start_quest" onClick={startQuest}>
          Start
        </button>
        <button id="sell_quest" onClick={sellQuest}>
          Sell
        </button>
      </div>
    )
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Guild</title>
      <ExitIcon value='/' />
      <GuildTitle />

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

      <CreateParty guild_id={guildDetail.ID}
        refresh_guild={getGuildInfo}
        style={createPartyDisplay} />
      <SelectHero guild_id={guildDetail.ID}
        refresh_guild={getGuildInfo}
        party_id={partyDetail.ID}
        refresh_party={getPartyInfo}
        heroes_in_party={partyDetail.Hero}
        function={selectHeroFunction}
        style={selectHeroDisplay} />
      <SelectParty guild_id={guildDetail.ID}
        quest_id={questDetail.ID}
        parties={guildDetail.Party}
        style={selectPartyDisplay} />
    </div>
  );
};

export default Guild;
