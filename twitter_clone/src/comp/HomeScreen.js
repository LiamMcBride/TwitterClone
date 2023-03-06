

import '../App.css';
import { background } from '../Colors';
import "./HomeScreenStyle.css";
import ProfileBadge from './ProfileIcon';
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



function HomeScreen() {
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
            <div className="post">
                <img></img>
                <div></div>
                <h1>Salman Chishti</h1>
                <h2>@SalmanMKC * 2h</h2>
                <div>***</div>
                <p>As a developer, do you prefer learning from videos, blogs, or books?</p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className="search-feed">
            <input type="text" defaultValue={"Search Twitter"}></input>
        </div>
    </div>
  );
}

export default HomeScreen;
