import "./pop_up_window.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ExitIcon } from "./ExitIcon";
import { Quest_NOT_IN_PARTY_URL, ADD_Quest_TO_PARTY_URL } from "./url";

export const SelectQuest = (props) => {
    const [Questes, setQuestes] = useState([]);
    console.log("party id: "+props.party_id);
    useEffect(() => {
        if (props.party_id === undefined || props.party_id === null) {
            return;
        }
        axios.post(Quest_NOT_IN_PARTY_URL, {"id": parseInt(props.party_id)})
            .then((response) => {
                console.log(response.data);
                setQuestes(response.data.Response);
            })
    }, [props.party_id]);

    const addQuest = (event) => {
        const QuestId = event.target.value;
        
        // axios.post(ADD_Quest_TO_PARTY_URL, { "id": QuestId, "guild_id": guildDetail.ID})
        //   .then((response) => {
        //     console.log(response.data.Response);
        //     if (response.data.Response !== "Success"){
        //       alert(response.data.Response);
        //     };
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
    }

    return (
        <div className="pop_up_box" style={props.style}>
            <ExitIcon value="/guild"/>
            <div className="pop_up_title">
                <div style={{ position: "absolute", left: "38%", top: "20%" }}>
                    Select Quest
                </div>
            </div>
            <div className="list">
                {
                    Questes.map((Quest, ind) => {
                        return (
                            <button className="select_Quest_scrollable"
                                key={ind}
                                onClick={addQuest}
                                value={Quest.ID}>
                                {Quest.Name}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}