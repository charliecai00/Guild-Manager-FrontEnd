import './QuestReport.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const QuestReport = () => {
    return (
        <div>
            <meta charSet="utf-8" />
            <title>QuestReport</title>
            <div className="report">
                <div className="report_text" style={{ paddingTop: '10px', paddingLeft: '10px' }}>
                    QUEST REPORT:
                </div>
                <div>
                    <p id="quest_report">
                        John killed a bugbear<br />
                        <br /> Conan unlocked the tomb of necropower<br />
                        <br /> John lost a fight to a pack of wolves<br />
                        <br /> Conan punched a Dragon<br />
                        <br /> Conan stole a chalice from the Lich King<br />
                        <br /> Conan unlocked the tomb of necropower<br />
                        <br /> John lost a fight to a pack of wolves<br />
                        <br /> Conan punched a Dragon<br />
                        <br /> Conan stole a chalice from the Lich King<br />
                    </p>
                </div>
            </div>
            <div className="report" style={{ height: '52vh' }}>
                <div className="report_text" style={{ paddingTop: '10px', paddingLeft: '10px' }}>
                    PARTY STATUS:
                </div>
                <div>
                    <h1 id="party_name">JOHN:</h1>
                    <h1 id="party_status">DEAD</h1>
                    <h1 id="party_name">CONAN:</h1>
                    <h1 id="party_status">HEALTH: 2</h1>
                    <h1 id="party_status">EXP: 40</h1>
                </div>
            </div>
            <div className="payout">
                <div className="report_text" style={{ position: 'relative', top: '50%', transform: 'translate(0px, -50%)', paddingLeft: '10px' }}>
                    PAYOUT:$300
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
