import "./pop_up_window.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ExitIcon } from "./ExitIcon";
import { HERO_NOT_IN_PARTY_URL, ADD_HERO_TO_PARTY_URL, REMOVE_HERO_FROM_PARTY_URL } from "./url";

export const SelectHero = (props) => {
    const [heroes, setHeroes] = useState([]);
    const [style, setStyle] = useState(props.style);

    const getHeroes = () => {
        axios.post(HERO_NOT_IN_PARTY_URL, { "id": parseInt(props.guild_id) })
            .then((response) => {
                setHeroes(response.data.Response);
            })
    }

    useEffect(() => {
        if (props.party_id === undefined || props.party_id === null) {
            return;
        }
        getHeroes();
        setStyle(props.style)
    }, [props.style]);

    const addHero = (event) => {
        const heroId = event.target.value;
        axios.post(ADD_HERO_TO_PARTY_URL, { "id": parseInt(heroId), "party_id": parseInt(props.party_id) })
            .then((response) => {
                console.log(response.data.Response);
                if (response.data.Response !== "Success") {
                    alert(response.data.Response);
                };
                getHeroes();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const removeHero = (event) => {
        const heroId = event.target.value;
        axios.post(REMOVE_HERO_FROM_PARTY_URL, { "id": heroId, "party_id": props.party_id })
            .then((response) => {
                console.log(response.data.Response);
                if (response.data.Response !== "Success") {
                    alert(response.data.Response);
                };
                getHeroes();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const exit = () => {
        props.refresh_guild(props.guild_id)
        setStyle({ display: "none" });
    }

    return (
        <div className="pop_up_box" style={style}>
            <ExitIcon onClick={exit}/>
            <div className="pop_up_title">
                <div style={{ position: "absolute", left: "38%", top: "20%" }}>
                    Select Hero
                </div>
            </div>
            <div className="list">
                {
                    heroes.map((hero, ind) => {
                        return (
                            <button className="select_scrollable"
                                key={ind}
                                onClick={props.function === "add" ? addHero : removeHero}
                                value={hero.ID}>
                                {hero.Name}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}