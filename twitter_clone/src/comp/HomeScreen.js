

import React, { useState } from 'react';
import '../App.css';
import { background } from '../Colors';
import { getTweet } from '../services/HomeFeedCall';
import "./HomeScreenStyle.css";
import ProfileBadge from './ProfileIcon';
import TweetComp from './Tweet';
const backgroundStyle = {
    backgroundColor: background,
    height: "100vh",
}

const sidebarStyle = {
    "width": "30%",
    "height": "100vh",
    
}

const navTabStyle = {
    "color": "#fff",
    "height": "52px",
    "lineHeight": "52px",
    "fontWeigth": "bold",
    "fontSize": "20px",
    "borderRadius": "25px"
}

const navTabStyleOnHover = {
    "backgroundColor": "red"
}



function HomeScreen()  {

    const [tweets, setTweets] = useState([])

    let tweet = 0;
    getTweet(1).then(resp => console.log(resp));
    console.log(tweet);

  return (
    <div style={backgroundStyle}>
        <div className="sidebar">

            <div className="navTab">
                Home
            </div>
            <div className="navTab">
                Explore
            </div>
            <div className="navTab">
                Notifications
            </div>
            <div className="navTab">
                Messages
            </div>
            <div className="navTab">
                Bookmarks
            </div>
            <div className="navTab">
                Twitter Blue
            </div>
            <div className="navTab">
                Profile
            </div>
            <div className="navTab">
                More
            </div>
            <div style={{
                "color": "white",
                "background": "#1F9BF0",
                "display": "block",
                "width": "225px",
                "height": '52px',
                "textAlign": "center",
                "margin": "12px",
                "borderRadius": "25px",
                "fontWeight": "bold",
                "font-family": "Arial, Helvetica, sans-serif",
                "fontSize": "17px",
                "margin-top": "auto",
                "margin-bottom": "auto",
                "alignItems": "center",
                "lineHeight": "52px"
            }}>
                Tweet
            </div>
            <div className="sidebar-footer">
                {ProfileBadge()}
            </div>
        </div>
        <div className="main-feed">
            <h1>Home</h1>
            {TweetComp(tweet)}
        </div>
        <div className="search-feed">
            {SearchBar()}
            <div className="whats-happening-feed">
                <h1>What's happening</h1>
                <div className="story">
                    <h3>NHL * LIVE</h3>
                    <h2>Ducks at Canucks</h2>
                    <h3>And that's it. They're just there.</h3>
                </div>
                <div className="story">
                    <h3>NHL * LIVE</h3>
                    <h2>Ducks at Canucks</h2>
                    <h3>And that's it. They're just there.</h3>
                </div>
                <div className="story">
                    <h3>NHL * LIVE</h3>
                    <h2>Ducks at Canucks</h2>
                    <h3>And that's it. They're just there.</h3>
                </div>
                <div className="story">
                    <h3>NHL * LIVE</h3>
                    <h2>Ducks at Canucks</h2>
                    <h3>And that's it. They're just there.</h3>
                </div>
                <div className="story">
                    <a href="www.google.com">Show more</a>
                </div>
            </div>
            <div className="whats-happening-feed">
                <h1>Who to follow</h1>
                <div className="story">
                    <h2>Grizzy</h2>
                    <h3>@SoGrizzy</h3>
                </div>
                <div className="story">
                    <h2>Ted Nivison</h2>
                    <h3>@TedNivison</h3>
                </div>
                <div className="story">
                    <h2>ScaleFlux</h2>
                    <h3>@ScaleFlux</h3>
                </div>
                <div className="story">
                    <a href="www.google.com">Show more</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomeScreen;

function SearchBar(){
    const [focused, setFocused] = useState(false);

    const defaultBarStyle = {
    //     background-color: #16181C;
    // border-radius: 25px;
    // width: 80%;
        backgroundColor: "#16181C",
        borderRadius: "25px",
        width: "80%"
    }

    const focusedBarStyle = {
        backgroundColor: "#000",
        outline: "solid #1DA1F2 1px",
        backgroundColor: "#000",
        borderRadius: "25px",
        width: "80%"
    }

    const inputStyle = {
        width: "80%",
        backgroundColor: "rgba(22,24,28,0)",
        border: "none",
        height: "42px",
        textAlign: "left",
        marginLeft: "20px",
        fontSize: "15px",
        color: "rgba(255,255,255,0.4)"
    }
    
    const inputStyleSelected = {
        width: "80%",
        backgroundColor: "black",
        border: "none",
        height: "42px",
        textAlign: "left",
        marginLeft: "20px",
        fontSize: "15px",
        color: "rgba(255,255,255,0.4)"


    }

    return (
        <div className="search-bar" style={focused ? focusedBarStyle : defaultBarStyle}>
            <input style={focused ? inputStyleSelected : inputStyle} onBlur={() => setFocused(false)} 
            onFocus={() => setFocused(true)} type="text" defaultValue={"Search Twitter"}></input>
        </div>

    );
}
