import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink,Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import{MenuItems} from "./MenuItems"

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login" exact>
                <i 
                className="far fa-address-book">
                </i>Login
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/signup" exact>
                <i 
                className="far fa-clone">
                </i>Signup
              </NavLink>
            </li>
            </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;





               /*
               <ul className={this.state.clicked?'nav-menu active':'nav-menu'}>
            <div className="collapse navbar-collapse">
              <ul className="nabar-nav ml-auto">
                <li className="nav-item">
                  <a href="login.js" className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                  <a href="signup.js" className="nav-link">Sign up</a>
                </li>
              </ul>
            </div>
            
            <ul >
            {MenuItems.map((item,index)=>{
              return(
                <li key={index}>
                  <a className={item.clName}href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
            */