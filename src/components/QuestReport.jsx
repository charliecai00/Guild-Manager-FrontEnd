import './QuestReport.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const QuestReport = () => {
    const location = useLocation();
    const [questReport, setQuestReport] = useState({
        "EventList": [],
          "Reward": null,
          "PartyStatus": [
            {
              "HeroName": "Ameen The Time Mage",
              "Health": 5,
              "Exp": 20
            },
            {
              "HeroName": "Paula The Sad",
              "Health": 5,
              "Exp": 0
            }
          ]
    });
    
    useEffect(() => {
        setQuestReport(location.state?.questReport);
    }, []);
    
    useEffect(() => {
        console.log(questReport);
    }, [questReport]);

    return (
        <div>
            <meta charSet="utf-8" />
            <title>QuestReport</title>
            <div className="report">
                <div className="report_text" style={{ paddingTop: '10px', paddingLeft: '10px' }}>
                    QUEST REPORT:
                </div>
                <div>
                    <p className="quest_report">
                        {questReport.EventList.map((event, index) => {
                            return (
                                <div className="report_content" key={index}>
                                    {index+1}, {event}<br />
                                    <br />
                                </div>
                            )}
                        )}
                    </p>
                </div>
            </div>
            <div className="report" style={{ height: '52vh' }}>
                <div className="report_text" style={{ paddingTop: '10px', paddingLeft: '10px' }}>
                    PARTY STATUS:
                </div>
                <div>
                    {
                        questReport.PartyStatus.map((hero, index) => {
                            return (
                                <div key={index}>
                                    <h1 id="party_name">{hero.HeroName}:</h1>
                                    <h1 id="party_status">HEALTH: {hero.Health}</h1>
                                    <h1 id="party_status">EXP: {hero.Exp}</h1>
                                </div>
                            )
                        }
                    )
                    }
                </div>
            </div>
            <div className="payout">
                <div className="report_text" style={{ position: 'relative', top: '50%', transform: 'translate(0px, -50%)', paddingLeft: '10px' }}>
                    reward: ${questReport.Reward}
                </div>
            </div>
            <div className="done">
                <a href="/guild">
                    <div className="report_text" style={{ position: 'relative', top: '50%', transform: 'translate(0px, -50%)', paddingLeft: '10px' }}>
                        DONE
                    </div>
                </a>
            </div>
        </div>
    );
};


export default QuestReport;
