import React from 'react';
import '../styles/login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Login = ({ onClose }) => {
  return (
    <div className="login-overlay">
      <div className="login-container">
        <FontAwesomeIcon icon={faArrowRight} rotation={180} onClick={onClose} className='close_button' />
        <img src={require('../images/Blinkit-yellow-app-icon.png')} className='login_blinkitlogo' alt='blinkit'/>
        <h1>India's last minute app</h1>
        <h2>Log in or Sign up</h2>
        <input type="tel" maxLength={13} placeholder='Enter Mobile Number' defaultValue="+91"  /><br/>
        <button className="continue-button">Continue</button>
        <span className='terms'><br/>By continuing, you agree to our Terms of Service & Privacy Policy.</span>
      </div>
    </div>
  );
};

export default Login;
