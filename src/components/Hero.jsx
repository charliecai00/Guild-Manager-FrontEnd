import './Hero.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HIRE_HERO_URL, UNEMPLOYED_HEROES_URL } from './url';
import { ExitIcon } from './ExitIcon';

const Hero = () => {
    const [unemployedHeroes, setUnemployedHeroes] = useState();
    const [currGuild, setCurrGuild] = useState({ "ID": null, "Name": null });
    const [hireStatus, setHireStatus] = useState();

    const getInfo = () => {
        fetch(UNEMPLOYED_HEROES_URL)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setUnemployedHeroes(result.Response);
                const initialHireStatus = result.Response.reduce((status, hero) => {
                    status[hero.ID] = false;
                    return status;
                }, {});
                console.log(initialHireStatus);
                setHireStatus(initialHireStatus);
            })

    }

    useEffect(() => {
        getInfo();
        setCurrGuild(JSON.parse(localStorage.getItem("currGuild")));
    }, [])

    const hireHero = (event) => {
        console.log("Hire hero");
        axios.post(HIRE_HERO_URL, { "id": parseInt(event.target.value), "guild_id": currGuild.ID })
            .then((response) => {
                console.log(response.data.Response);
                if (response.data.Response !== "Success") {
                    alert(response.data.Response);
                    return;
                } else {
                    setHireStatus({ ...hireStatus, [event.target.value]: true });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <meta charSet="utf-8" />
            <title>Hero</title>
            <div className="for_sale">
                <div className="text vertical_middle" style={{ paddingLeft: '10px', fontSize: '35px' }}>
                    HEROES FOR SALE
                </div>
            </div>
            <ExitIcon value="/guild" />
            <section className="scrollable-list">
                {
                    unemployedHeroes && unemployedHeroes.map((hero) => {
                        return (
                            <ul className="sales" key={hero.ID}>
                                <div className="sale_grid">
                                    <div className="sale_item">
                                        <div className="text vertical_middle">
                                            {hero.Name} (Strength: {hero.Stats.STR} &nbsp;
                                            Dexterity: {hero.Stats.DEX} &nbsp;
                                            Constitution: {hero.Stats.CON} &nbsp;
                                            Wisdom: {hero.Stats.WIS} &nbsp;
                                            Intelligence: {hero.Stats.INT} &nbsp;
                                            Charisma: {hero.Stats.CHA} &nbsp;
                                            COST: ${hero.Cost})
                                        </div>
                                    </div>
                                    <button
                                        className="sale_button text"
                                        onClick={hireStatus && hireStatus[hero.ID] ? null : hireHero}
                                        value={hero.ID}
                                        style={{
                                            backgroundColor: hireStatus && hireStatus[hero.ID] ? "rgb(255, 149, 0)" : "rgb(255, 255, 0)"
                                        }}>
                                        {hireStatus && hireStatus[hero.ID] ? "HIRED" : "HIRE"}
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


export default Hero;
