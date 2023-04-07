import './DoingQuest.css';
import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const DoingQuest = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/questReport';
    }, 2200);
  }, []);

  return (
    <div className='background'>
      <meta charSet="utf-8" />
      <title>DoingQuest</title>
      <div className="page">
        {/* The title */}
        <div className="sword_art"></div>
      </div>
      {/* <div className="page">
        <div className="info">
          Doing Quest
        </div>
      </div> */}

      <div className="bar" />
      <div className="bar_animation" />

    </div>
  );
};


export default DoingQuest;
