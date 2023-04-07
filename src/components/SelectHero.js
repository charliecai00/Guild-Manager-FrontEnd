import "./pop_up_window.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ExitIcon } from "./ExitIcon";
import { HERO_NOT_IN_PARTY_URL, ADD_HERO_TO_PARTY_URL } from "./url";

export const SelectHero = (props) => {
    const [heroes, setHeroes] = useState([]);
    console.log("party id: "+props.party_id);
    useEffect(() => {
        if (props.party_id === undefined || props.party_id === null) {
            return;
        }
        axios.post(HERO_NOT_IN_PARTY_URL, {"id": parseInt(props.party_id)})
            .then((response) => {
                console.log(response.data);
                setHeroes(response.data.Response);
            })
    }, [props.party_id]);

    const addHero = (event) => {
        const heroId = event.target.value;
        
        // axios.post(ADD_HERO_TO_PARTY_URL, { "id": heroId, "guild_id": guildDetail.ID})
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
            <ExitIcon cvalue="/guild" />
            <div className="pop_up_title">
                <div style={{ position: "absolute", left: "38%", top: "20%" }}>
                    Select Hero
                </div>
            </div>
            <div className="list">
                {
                    heroes.map((hero, ind) => {
                        return (
                            <button className="elements-in-scrollable"
                                key={ind}
                                onClick={addHero}
                                value={hero.ID}>
                                {hero.Name}
                            </button>
                        )
                    })
                }
            </div>
            {/* <a href="/guild">
                <div className="pop_up_done" >
                    <div style={{ position: "relative", left: "10%", top: "20%", fontSize: "35px" }}>
                        DONE
                    </div>
                </div>
            </a> */}
        </div>
    )
}