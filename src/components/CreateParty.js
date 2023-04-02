import "./CreateParty.css";
import axios from 'axios';
import React, { useState } from 'react';
import { ExitIcon } from "./exitIcon";
import { CREATE_PARTY_URL } from "./url";

export const CreateParty = (props) => {
    const [formData, setFormData] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(CREATE_PARTY_URL, { "Name": formData })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setFormData(value);
    };

    const InputForm = () => {
        return (
            <div className="new_guild">
                <form onSubmit={handleSubmit}>
                    <label id="new_guild_text" htmlFor="new_guild_name">New Guild:</label>
                    <span>
                        <input name="new_guild_name" id="new_guild_text" type="text" value={formData} onChange={handleInputChange} />
                    </span>
                </form>
            </div>
        )
    }


    return (
        <div className="pop_up_box" style={props.style}>
            <ExitIcon value="/guild" />
            <div className="pop_up_title">
                Create Party
            </div>
            <InputForm />
            <a href="/guild">
                <div className="pop_up_done" > DONE </div>
            </a>
        </div>
    )
}