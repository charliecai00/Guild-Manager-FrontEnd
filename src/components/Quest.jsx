import './Quest.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BUY_QUEST_URL, UNSOLD_QUEST_URL } from './url';
import { ExitIcon } from './ExitIcon';

const Quest = () => {
  const [unsoldQuest, setUnsoldQuest] = useState();
  const [currGuild, setCurrGuild] = useState({ "ID": null, "Name": null });
  const [purchaseStatus, setPurchaseStatus] = useState();

  const getInfo = () => {
    fetch(UNSOLD_QUEST_URL)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setUnsoldQuest(result.Response);
        const initialPurchaseStatus = result.Response.reduce((status, quest) => {
          status[quest.ID] = false;
          return status;
        }, {});
        console.log(initialPurchaseStatus);
        setPurchaseStatus(initialPurchaseStatus);
      })

  }

  useEffect(() => {
    getInfo();
    setCurrGuild(JSON.parse(localStorage.getItem("currGuild")));
  }, [])

  const buyQuest = (event) => {
    console.log("Buy Quest");
    axios.post(BUY_QUEST_URL, { "id": parseInt(event.target.value), "guild_id": currGuild.ID })
      .then((response) => {
        console.log(response.data.Response);
        if (response.data.Response !== "Success") {
          alert(response.data.Response);
          return;
        }else{
          setPurchaseStatus({ ...purchaseStatus, [event.target.value]: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Quest</title>
      <div className="for_sale">
        <div className="text vertical_middle" style={{ paddingLeft: '10px', fontSize: '35px' }}>
          QUESTS FOR SALE
        </div>
      </div>
      <ExitIcon value="/guild" />
      <section className="scrollable-list">
        {
          unsoldQuest && unsoldQuest.map((quest) => {
            return (
                <ul className="sales" key={quest.ID}>
                    <div className="sale_grid">
                        <div className="sale_item">
                            <div className="text vertical_middle">
                                {quest.Name}: (ChallengeLevel: {quest.ChallengeLevel}, Cost: ${quest.Cost})
                            </div>
                        </div>
                        <button
                            className="sale_button text"
                            onClick={purchaseStatus && purchaseStatus[quest.ID] ? null : buyQuest}
                            value={quest.ID}
                            style={{
                                backgroundColor: purchaseStatus && purchaseStatus[quest.ID] ? "rgb(255, 149, 0)" : "rgb(255, 255, 0)"
                            }}>
                            {purchaseStatus && purchaseStatus[quest.ID] ? "BOUGHT" : "BUY"}
                        </button>
                    </div>
                </ul>
            )
        })
        }
      </section>
    </div>
  );
};


export default Quest;
