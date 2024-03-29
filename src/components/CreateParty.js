import "./pop_up_window.css";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ExitIcon } from "./ExitIcon";
import { CREATE_PARTY_URL } from "./url";

export const CreateParty = (props) => {
    const [formData, setFormData] = useState("");
    const [style, setStyle] = useState(props.style);

    useEffect(() => {
        setStyle(props.style);
    }, [props.style]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("guild id for adding the party: " + typeof(props.guild_id));
        axios.post(CREATE_PARTY_URL, { "Name": formData, "guild_id": props.guild_id })
            .then((response) => {
                console.log(response.data);
                if (response.data.Response !== "Success") {
                    alert(response.data.Response);
                }else{
                    props.refresh_guild(props.guild_id)
                    setStyle({ display: "none" });
                };
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setFormData(value);
    };

    const exit = () => {
        props.refresh_guild(props.guild_id)
        setStyle({ display: "none" });
    }

    return (
        <div className="pop_up_box" style={style}>
            <ExitIcon onClick={exit}/>
            <div className="pop_up_title">
                <div style={{ position: "absolute", left: "38%", top: "20%" }}>
                    Create Party
                </div>
            </div>
            <div className="new_party">
                <form onSubmit={handleSubmit}>
                    <label id="new_party_text" htmlFor="new_party_name">New Party:</label>
                    <span>
                        <input name="new_party_name" id="new_party_text" type="text" value={formData} onChange={handleInputChange} />
                    </span>
                </form>
            </div>
        </div>
    )
}