

import '../App.css';
import { background } from '../Colors';
import "./HomeScreenStyle.css";
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



function ProfileBadge() {
  return (
        <div className="profile-badge">
            <img src="./image/1">

            </img>
            <div>
                <h1>Liam McBride</h1>
                <h2>@BlueLetter</h2>
            </div>
            <div>***</div>
        </div>
  );
}

export default ProfileBadge;
