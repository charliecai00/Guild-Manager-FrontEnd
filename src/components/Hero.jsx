import './Hero.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap';

const Hero = () => {
      return (
        <div>
        <meta charSet="utf-8" />
        <title>Hero</title>
        <link rel="stylesheet" href="Hero.css" media="screen" />
        <link rel="stylesheet" href="shared.css" />
        <div className="for_sale">
          <div className="text vertical_middle" style={{paddingLeft: '10px', fontSize: '35px'}}>
            HEROES FOR SALE
          </div>
        </div>
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
