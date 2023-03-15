

import React from 'react';
import '../App.css';
import "./HomeScreenStyle.css";
import "./LoginScreen.css";
const backgroundStyle = {
    backgroundColor: "#313a40",
    height: "100vh",
}

function LoginScreen()  {

  return (
    <div className='background' style={backgroundStyle}>
        <div className="login-div">
            <div className="x-button">
                x
            </div>
            <h1>Sign in to Twitter</h1>
            <div className="white-logo-button">Sign in with Google</div>
            <div className="white-logo-button">Sign in with Apple</div>
            <div className="divider-div"><hr></hr>or<hr></hr></div>
            <input type="text" placeholder="Phone, email, or username"></input>
            <div className="white-logo-button">Next</div>
            <div className="white-logo-button black-logo-button">Forgot password?</div>
            <div className="modal-footer">Don't have an account? <a href="www.google.com">Sign up</a></div>
        </div>
    </div>
  );
}



export default LoginScreen;