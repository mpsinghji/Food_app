import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCaretDown,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Login from '../components/login';

const Navbar = ({setShow}) => {
  const [searchButtonText, setSearchButtonText] = useState("Search");
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const searchButtonLabels = ["Search 'Butter'", "Search 'Chocolate'", "Search 'Rice'", "Search 'Curd'", "Search 'Milk'"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setSearchButtonText(searchButtonLabels[currentIndex]);
      currentIndex = (currentIndex + 1) % searchButtonLabels.length;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };


  return (
    <nav className="navbar">
      <div className="logo" onClick={()=>setShow(true)}>
        <img src={require('../images/bl_logo_web-removebg.png')} alt="Logo" className='applogo' />
      </div>
      <div className="delivery-info">
        <p style={{ fontSize: "1.25rem" }}><b>Temporary Closed</b></p>
        <p>Chitkara University, 140401, India  <FontAwesomeIcon icon={faCaretDown} /></p>
      </div>
      <div className="search-bar">
        <FontAwesomeIcon className='searchicon' icon={faMagnifyingGlass} />
        <input type="text" placeholder={searchButtonText} style={{ width: "200px" }} />
      </div>
      <div className="user-actions">
        <button className='loginbutton' onClick={handleLoginClick}>Login</button>
        <button className='cartbutton' onClick={()=>setShow(false)}>
          <FontAwesomeIcon icon={faCartShopping} className='cartshake' style={{ color: "#ffffff" }} />  My Cart
        </button>
      </div>
      {showLogin && <Login onClose={handleCloseLogin} />}
    </nav>
  );
}

export default Navbar;
