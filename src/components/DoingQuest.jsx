import './DoingQuest.css';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import giant from '../img/giant.jpg';
import castle from '../img/castle.jpg';
import dragon from '../img/dragon.jpg';

const DoingQuest = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const questReport = location.state?.questReport;
    console.log(questReport);
    setTimeout(() => {
      navigate('/questReport', {state: {questReport: questReport}});
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
      <div className="bar" />
      <div className="bar_animation" />

    </div>
  );
};


export default DoingQuest;
