import React, { useState } from 'react';
import '../App.css';
import "./HomeScreenStyle.css";

export function ToggleSwitch() {
    const [selected, setSelected] = useState(0);

    return (
        <div className="home-toggle-div">
            <div id="for-you-toggle" onClick={() => setSelected(0)} className={selected == 0 ? "selected" : null}>For you</div>
            <div id="following-toggle" onClick={() => setSelected(1)} className={selected == 1 ? "selected" : null}>Following</div>
        </div>
    );
}


{/* <div className="home-toggle-div">
                <div id="for-you-toggle" onClick={feedToggle("for-you")} className="selected">For you</div>
                <div id="following-toggle" onClick={feedToggle("following")}>Following</div>
            </div> */}