import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const onlineStatus = useOnlineStatus();

    if(onlineStatus===false) return (
    <h1>
         Looks like you are offline, please check your Internet Connection !!!
    </h1>);

  const [BtnNameReact, setBtnNameReact] = useState("Login");
    return (
      <div className="header flex justify-between shadow-md m-2">
          <div className="">
              <img
                className='w-[100px]  '
                src={LOGO_URL}
              />
          </div>
          <div className="navbar-container">
              <ul className="nav-items flex flex-row p-4 mt-0 space-x-24 gap-4 text-xl text-center ">
                <span className="relative rounded-xl bg-yellow-300 ">
                  <Link style={{textDecoration: 'none', color: 'black'}}  to= "/"> 
                     <li className="border absolute border-yellow-600 p-1 pl-2 pr-2 bg-yellow-300 hover:bg-yellow-500  rounded-xl "> Home </li> 
                  </Link> 
                </span>

                <span className="relative rounded-xl bg-yellow-300 ">
                  <Link style={{textDecoration: 'none', color: 'black'}} to= "/about">
                     <li className="border absolute border-yellow-600 p-1 pl-2 pr-2 bg-yellow-300 hover:bg-yellow-500 rounded-xl "> About </li>
                   </Link>
                </span>

                <span className="relative rounded-xl bg-yellow-300 ">
                  <Link style={{textDecoration: 'none', color: 'black'}} to= "/contact"> 
                    <li className="border absolute border-yellow-600 p-1 pl-2 pr-2 bg-yellow-300 hover:bg-yellow-500 rounded-xl "> Contact </li> 
                  </Link>
                </span>

                <span className="relative rounded-xl bg-yellow-300 ">
                  <Link to='/cart'>
                    <li className="border absolute border-yellow-600 p-1 pl-2 pr-2 bg-yellow-300 hover:bg-yellow-500 rounded-xl ">Cart</li>
                  </Link>
                </span>

                <span className="relative rounded-xl bg-yellow-300 ">
                  <li className="border absolute border-yellow-600 p-1 pl-2 pr-2 bg-yellow-300 hover:bg-yellow-500 rounded-xl "><p className="online" >{onlineStatus ? "online" : "offline"}</p></li>
                </span>
                  
                  
                  <button className="border  border-yellow-600 p-1 pl-2 pr-2 bg-yellow-300 hover:bg-yellow-500 rounded-xl " onClick={()=>{
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