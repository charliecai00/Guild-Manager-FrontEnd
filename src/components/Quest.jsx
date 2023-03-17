import './Quest.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Quest = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Quest</title>
      <link rel="stylesheet" href="Quest.css" media="screen" />
      <link rel="stylesheet" href="shared.css" />
      <div className="for_sale">
        <div className="text vertical_middle" style={{ paddingLeft: '10px', fontSize: '35px' }}>
          QUESTS FOR SALE
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
                THE DESERT CHALLENGE: 30 COST: $40
              </div>
            </div>
            <button className="sale_button text">BUY</button>
          </div>
        </ul>
        <ul className="sales">
          <div className="sale_grid">
            <div className="sale_item">
              <div className="text vertical_middle">
                THE DESERT CHALLENGE: 30 COST: $40
              </div>
            </div>
            <button className="sale_button text">BUY</button>
          </div>
        </ul>
        <ul className="sales">
          <div className="sale_grid">
            <div className="sale_item">
              <div className="text vertical_middle">
                THE DESERT CHALLENGE: 30 COST: $40
              </div>
            </div>
            <button className="sale_button text">BUY</button>
          </div>
        </ul>
        <ul className="sales">
          <div className="sale_grid">
            <div className="sale_item">
              <div className="text vertical_middle">
                THE DESERT CHALLENGE: 30 COST: $40
              </div>
            </div>
            <button className="sale_button text">BUY</button>
          </div>
        </ul>
        <ul className="sales">
          <div className="sale_grid">
            <div className="sale_item">
              <div className="text vertical_middle">
                THE DESERT CHALLENGE: 30 COST: $40
              </div>
            </div>
            <button className="sale_button text">BUY</button>
          </div>
        </ul>
        <ul className="sales">
          <div className="sale_grid">
            <div className="sale_item">
              <div className="text vertical_middle">
                THE DESERT CHALLENGE: 30 COST: $40
              </div>
            </div>
            <button className="sale_button text">BUY</button>
          </div>
        </ul>
        <ul className="sales">
          <div className="sale_grid">
            <div className="sale_item">
              <div className="text vertical_middle">
                THE DESERT CHALLENGE: 30 COST: $40
              </div>
            </div>
            <button className="sale_button text">BUY</button>
          </div>
        </ul>
        <ul className="sales">
          <div className="sale_grid">
            <div className="sale_item">
              <div className="text vertical_middle">
                THE DESERT CHALLENGE: 30 COST: $40
              </div>
            </div>
            <button className="sale_button text">BUY</button>
          </div>
        </ul>
      </section>
    </div>
  );
};


export default Quest;
