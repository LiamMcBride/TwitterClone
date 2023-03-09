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
        <img></img>
        <div></div>
        <h1>{loading ? "loading..." : `${data['user']["first-name"]} ${data['user']["last-name"]}`}</h1>
        <h2>{loading ? "loading..." : `@${data['user']["username"]}`}</h2>
        <h2>{loading ? " " : `${dateObj(data['tweet']['time-stamp']).date.monthName} ${dateObj(data['tweet']['time-stamp']).date.day}`}</h2>

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
    let day = timestamp.slice(0, 2)
    let month = timestamp.slice(3, 5)
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
    return (
        <div className="prompt-tweet">
            <img className="profile-image" src="./image/1"></img>
            <input type="text" placeholder="What's happening?"></input>
        </div>
    );
}