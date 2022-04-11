import * as React from 'react';
import './style.css';
import Logo from './assets/favoredit.png';
import { useHistory } from "react-router";

function Header() {
    const history = useHistory();
    const handleGoHome =() => {
        history.push('/')
      }
return(
    <img
          className="logo"
          src={Logo}
          alt="logo"
          onClick={handleGoHome}
        />

);
}
export default Header;