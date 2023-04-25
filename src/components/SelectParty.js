import "./pop_up_window.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExitIcon } from "./ExitIcon";
import { START_QUEST_URL } from "./url";

export const SelectParty = ({ quest_id, parties, style, guild_id }) => {
    const navigate = useNavigate();
    const [localStyle, setLocalStyle] = useState(style);
    useEffect(() => {
        setLocalStyle(style);
    }, [style]);

    const startQuest = (event) => {
        const partyId = event.target.value;
        axios.post(START_QUEST_URL, { "id": parseInt(quest_id), "party_id": parseInt(partyId), "guild_id": parseInt(guild_id)})
          .then((response) => {
            console.log(response.data.Response);
            if (typeof response.data.Response === 'string'){
              alert(response.data.Response);
            }else{
                setTimeout(() => {
                    navigate('/doingQuest', { state: { questReport: response.data.Response } });
                }, 100);
            };
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