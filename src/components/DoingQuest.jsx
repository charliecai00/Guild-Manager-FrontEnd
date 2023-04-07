import './DoingQuest.css';
import React, {useEffect} from 'react';
import giant from '../img/giant.jpg';
import castle from '../img/castle.jpg';
import dragon from '../img/dragon.jpg';


const DoingQuest = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/questReport';
    }, 2200);
  }, []);

  const backgroundImages = [
    giant,
    castle,
    dragon
  ];
  
  const getRandomBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  };

  return (
    <div className='background'>
      <meta charSet="utf-8" />
      <title>DoingQuest</title>
      <div className="page">
        {/* The title */}
        <div className="sword_art" style={{
            backgroundImage: `url(${getRandomBackgroundImage()})`}}></div>
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
