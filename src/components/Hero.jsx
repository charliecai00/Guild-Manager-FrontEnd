import './Hero.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HIRE_HERO_URL, UNEMPLOYED_HEROES_URL } from './url';

const Hero = () => {
    const getInfo = () => {
        // fetch(UNEMPLOYED_HEROES_URL)
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log(result);
        //         setGuilds(result.Response);
        //     })
    }
    const useEffect = () => {
        console.log("useEffect");
    }
    const hireHero = (event) => {
        //     console.log("Hire hero");
        //     axios.post(HIRE_HERO_URL, { "id":  JSON.parse(event.target.value) })
        //   .then((response) => {
        //     console.log(response);
        //     setPartyDetail(response.data.Response);
        //     setDisplayStatus(() => {
        //       return {
        //         'guild': {display: "none"},
        //         'hero': {display: "none"},
        //         'party': {display: "inline-block"},
        //         'quest': {display: "none"}
        //       }
        //     }
        //   )})
        //   .catch((error) => {
        //     console.log(error);
        //   });
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
            <a href="/guild">
                <img className='exit'
                    src={require("../img/icon-close.png")}>
                </img>
            </a>
            <section className="scrollable-list">
                <ul className="sales">
                    <div className="sale_grid">
                        <div className="sale_item">
                            <div className="text vertical_middle">
                                Paul (STR: 50 DEX: 15 CON: 84 WIS: 90 INT 32: CHA 10) COST: $20
                            </div>
                        </div>
                        <button className="sale_button text">HIRE</button>
                    </div>
                </ul>
                <ul className="sales">
                    <div className="sale_grid">
                        <div className="sale_item">
                            <div className="text vertical_middle">
                                Paul (STR: 50 DEX: 15 CON: 84 WIS: 90 INT 32: CHA 10) COST: $20
                            </div>
                        </div>
                        <button className="sale_button text">HIRE</button>
                    </div>
                </ul>
                <ul className="sales">
                    <div className="sale_grid">
                        <div className="sale_item">
                            <div className="text vertical_middle">
                                Paul (STR: 50 DEX: 15 CON: 84 WIS: 90 INT 32: CHA 10) COST: $20
                            </div>
                        </div>
                        <button className="sale_button text">HIRE</button>
                    </div>
                </ul>
                <ul className="sales">
                    <div className="sale_grid">
                        <div className="sale_item">
                            <div className="text vertical_middle">
                                Paul (STR: 50 DEX: 15 CON: 84 WIS: 90 INT 32: CHA 10) COST: $20
                            </div>
                        </div>
                        <button className="sale_button text">HIRE</button>
                    </div>
                </ul>
                <ul className="sales">
                    <div className="sale_grid">
                        <div className="sale_item">
                            <div className="text vertical_middle">
                                Paul (STR: 50 DEX: 15 CON: 84 WIS: 90 INT 32: CHA 10) COST: $20
                            </div>
                        </div>
                        <button className="sale_button text">HIRE</button>
                    </div>
                </ul>
                <ul className="sales">
                    <div className="sale_grid">
                        <div className="sale_item">
                            <div className="text vertical_middle">
                                Paul (STR: 50 DEX: 15 CON: 84 WIS: 90 INT 32: CHA 10) COST: $20
                            </div>
                        </div>
                        <button className="sale_button text">HIRE</button>
                    </div>
                </ul>
                <ul className="sales">
                    <div className="sale_grid">
                        <div className="sale_item">
                            <div className="text vertical_middle">
                                Paul (STR: 50 DEX: 15 CON: 84 WIS: 90 INT 32: CHA 10) COST: $20
                            </div>
                        </div>
                        <button className="sale_button text">HIRE</button>
                    </div>
                </ul>
            </section>
        </div>
    );
};


export default Hero;
