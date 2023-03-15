

import React, { useEffect, useState } from 'react';
import '../App.css';
import { background } from '../Colors';
import "./HomeScreenStyle.css";
import ProfileBadge from './ProfileIcon';
import { PromptTweet, StaticTweetComp } from './Tweet';
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

    const [tweets, setTweets] = useState([null])
    const [user, setUser] = useState(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch("home", {
            method: "POST",
            body: JSON.stringify({
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(data => {
                console.log(data)
                setTweets(data.tweets)
                setUser(data.user)
            });
    },[count]);

    let tweet = 0;
    // getTweet(1).then(resp => console.log(resp));
    // console.log(tweet);

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
            <button onClick={() => {
                /*
                fetch('https://reqbin.com/echo/post/json', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({ "id": 78912 })
                })
                .then(response => response.json())
                .then(response => console.log(JSON.stringify(response)))
                */
                fetch("signup", {
                    method: "POST",
                    body: JSON.stringify({
                      firstName: "test3",
                      lastName: "test3l",
                      username: "test3",
                      email: "test3@gmail.com"
                    }),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  })
                  .then(response => response.json())
                  .then(data => console.log(data));
            }}>Click me</button>
            <br></br>
            <button onClick={() => {
                /*
                fetch('https://reqbin.com/echo/post/json', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({ "id": 78912 })
                })
                .then(response => response.json())
                .then(response => console.log(JSON.stringify(response)))
                */
                fetch("home", {
                    method: "POST",
                    body: JSON.stringify({
                      userId: 1
                    }),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  })
                  .then(response => response.json())
                  .then(data => console.log(data));
            }}>Click me</button>
            <br></br>
            <input type="text" id="tweet-content" placeholder='tweet'></input>                
            <div onClick={() => {
                fetch("publishtweet", {
                    method: "POST",
                    body: JSON.stringify({
                        content: document.getElementById("tweet-content").value,
                        userId: 1
                    }),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  })
                  .then(response => response.json())
                  .then(data => {
                        console.log(data)
                        setCount(count + 1)
                    });
            }} style={{
                "color": "white",
                "background": "#1F9BF0",
                "display": "block",
                "width": "225px",
                "height": '52px',
                "textAlign": "center",
                "margin": "12px",
                "borderRadius": "25px",
                "fontWeight": "bold",
                "fontFamily": "Arial, Helvetica, sans-serif",
                "fontSize": "17px",
                "marginTop": "auto",
                "marginBottom": "auto",
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
            {PromptTweet()}
            {tweets.map((tweet) => {
                return StaticTweetComp({
                    "user": user,
                    "tweet": tweet
                })
            })}
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
            onFocus={() => setFocused(true)} type="text" placeholder={"Search Twitter"}></input>
        </div>

    );
}
