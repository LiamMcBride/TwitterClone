import React, { useEffect, useState } from 'react';
import '../App.css';
import "./HomeScreenStyle.css";

export function TweetComp(tweet) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('tweet/1')
            .then(res => res.json())
            .then(
                (result) => {
                    setLoading(false);
                    setData(result);
                },
                (error) =>{
                    console.log(error);
                }
            );
    }, [])

    return (
        <div className="post">
        <div>
            <img className="profile-image" src="./image/1"></img>
            <div style={{}}>
                <h1>{loading ? "loading..." : `${data['user']["first-name"]} ${data['user']["last-name"]}`}</h1>
                <h2>{loading ? "loading..." : `@${data['user']["username"]}`}</h2>
                <h2>{loading ? " " : `${dateObj(data['tweet']['time-stamp']).date.monthName} ${dateObj(data['tweet']['time-stamp']).date.day}`}</h2>
            </div>
        </div>

        <div>***</div>
        <p>{loading ? "loading..." : data['tweet']["text"]}</p>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    );
}


export function StaticTweetComp(data) {

    return (
        <div className="post">
        <div>
            <img className="profile-image" src="./image/1"></img>
            <div style={{}}>
                <h1>{data['user'] == null ? "loading" : `${data['user']["first-name"]} ${data['user']["last-name"]}`}</h1>
                <h2>{data['user'] == null ? "loading" : `@${data['user']["username"]}`}</h2>
                <h2>{data['user'] == null ? "loading" : `${dateObj(data['tweet']['time-stamp']).date.monthName} ${dateObj(data['tweet']['time-stamp']).date.day} ${dateObj(data['tweet']['time-stamp']).date.year}`}</h2>
                {/* //dateObj(data['tweet']['time-stamp']).date.monthName} ${dateObj(data['tweet']['time-stamp']).date.day */}
                {/* June 20, 2020 */}
            </div>
        </div>

        <p>{data['user'] == null ? "loading" : data['tweet']["text"]}</p>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    );
}

const dateObj = (timestamp) => {
    //03-03-2023 HH:MM:SS
    const months = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec",
    }
    let month = timestamp.slice(0, 2)
    let day = timestamp.slice(3, 5)
    let year = timestamp.slice(6, 10)
    
    let hour = timestamp.slice(11, 13)
    let min = timestamp.slice(14, 16)
    let sec = timestamp.slice(17, 19)

    if(day.slice(0,1) == "0"){
        day = day.slice(1,2);
    }

    return {
        date: {
            day: day,
            month: month,
            monthName: months[month],
            year: year,
        },
        time: {
            hour: hour,
            min: min,
            sec: sec
        }

    }

}

export function PromptTweet(){
    const [inFocus, setInFocus] = useState(false);
    const [hasText, setHasText] = useState(false);


    return (
        <div  className="prompt-tweet">
            <div className="top-row">
                <img className="profile-image" src="./image/1"></img>
                <input 
                onFocus={() => {
                    setInFocus(true)
                    setHasText(document.getElementById('tweet-content')?.value.length > 0)
                }} 
                onFocusOut={() => setHasText(document.getElementById('tweet-content')?.value.length > 0)} 
                id="tweet-content" 
                type="text" 
                placeholder="What's happening?">
                    
                </input>
            </div>
            {inFocus ? <hr></hr> : null}
            <div className="bottom-row">
                <div className="icon-grid">
                    <div className="temp-icon"></div>
                    <div className="temp-icon"></div>
                    <div className="temp-icon"></div>
                    <div className="temp-icon"></div>
                    <div className="temp-icon"></div>
                    <div className="temp-icon"></div>
                </div>
                <div className="info-grid">
                    <div className={
                        hasText ? "tweet-button tweet-button-small" : "tweet-button tweet-button-small tweet-button-deactivated"
                        }>Tweet</div>
                </div>
            </div>
        </div>
    );
}