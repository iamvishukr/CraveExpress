import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

  //let btnName = "Login";
  const [BtnNameReact, setBtnNameReact] = useState("Login");
    return (
      <div className="header">
          <div className="logo-container">
              <img
                className='logo'
                src={LOGO_URL}
              />
          </div>
          <div className="nav-items">
              <ul>
                <Link to= "/"> 
                 <li> Home </li> 
                </Link> 
                <Link to= "/about">
                   <li> About </li>
                  </Link>
                <Link to= "/contact"> 
                  <li> Contact </li> 
                </Link>
                  <li>Cart</li>
                  <button className="Login" onClick={()=>{
                    BtnNameReact === "Login"
                     ? setBtnNameReact("Logout")
                     : setBtnNameReact("Login") ; 
                  }}>
                    {BtnNameReact}
                  </button>
              </ul>

              
          </div>
      </div>
    );
  };

  export default Header;