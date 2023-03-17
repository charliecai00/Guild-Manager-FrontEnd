import './DoingQuest.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap';

const DoingQuest = () => {
      return (
        <div>
        <meta charSet="utf-8" />
        <title>DoingQuest</title>
        <div className="page">
          {/* The title */}
          <div className="sword_art">
            <h1> COOL SWORD ART
            </h1>
          </div>
        </div>
        <div className="page">
          <div className="info">
            Doing Quest
          </div>
        </div>
        <div className="page">
          <div className="bar_left" />
          <div className="bar_right" />
        </div>
      </div>
      );
    };


  export default DoingQuest;
