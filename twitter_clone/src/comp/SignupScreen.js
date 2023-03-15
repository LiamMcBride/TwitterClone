

import React from 'react';
import '../App.css';
import "./HomeScreenStyle.css";
import "./LoginScreen.css";
const backgroundStyle = {
    backgroundColor: "#313a40",
    height: "100vh",
}

function SignupScreen()  {

  return (
    <div className='background' style={backgroundStyle}>
        <div className="login-div">
            <div className="x-button">
                x
            </div>
            <h1>Join Twitter today</h1>
            <div className="white-logo-button">Sign in with Google</div>
            <div className="white-logo-button">Sign in with Apple</div>
            <div className="divider-div"><hr></hr>or<hr></hr></div>
            <div className="white-logo-button">Create account</div>
            <div className="modal-footer">
              By signing up, you agree to the <a href="www.google.com">Terms of Service</a>
              <br></br>
              and <a href="www.google.com">Privacy Policy</a>
              , including <a href="www.google.com">Cookie Use</a>.
             </div>
            <div className="modal-footer">Have an account already? <a href="www.google.com">Log in</a></div>
        </div>
    </div>
  );
}



export default SignupScreen;