import "./pop_up_window.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExitIcon } from "./ExitIcon";
import { START_QUEST_URL, PARTY_DETAIL_URL } from "./url";

export const SelectParty = ({ quest_id, parties, style, guild_id }) => {
    const navigate = useNavigate();
    const [localStyle, setLocalStyle] = useState(style);
    useEffect(() => {
        setLocalStyle(style);
    }, [style]);

    const startQuest = (event) => {
        const party_id = event.target.value;
        axios.post(START_QUEST_URL, { "id": parseInt(quest_id), "party_id": parseInt(party_id), "guild_id": parseInt(guild_id)})
          .then((response) => {
            axios.post(PARTY_DETAIL_URL, { "id": parseInt(party_id) })
                .then((party_info) => {
                    if (typeof response.data.Response === 'string'){
                        alert(response.data.Response);
                    }else if(party_info.data.Response.Hero.length == 0){
                        alert("You need at least one hero to start a quest!");
                    }else{
                        setTimeout(() => {
                            navigate('/doingQuest', { state: { questReport: response.data.Response } });
                        }, 100);
                    };
                })
          })
          .catch((error) => {
            console.log(error);
          });
    }

    const exit = () => {
        setLocalStyle({ display: "none" });
    }

    return (
        <div className="pop_up_box" style={localStyle}>
            <ExitIcon onClick={exit} />
            <div className="pop_up_title">
                <div style={{ position: "absolute", left: "38%", top: "20%" }}>
                    Select Party
                </div>
            </div>
            <div className="list">
                {parties.map((party, ind) => {
                    return (
                        <button className="select_scrollable"
                            key={ind}
                            onClick={startQuest}
                            value={party.ID}>
                            {party.Name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}