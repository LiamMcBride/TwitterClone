

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
            <input type="text" defaultValue={"Search Twitter"}></input>
        </div>
    </div>
  );
}

export default HomeScreen;
