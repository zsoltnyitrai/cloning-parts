import React from 'react'
import { FiChevronDown } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import '../../styles/redditheader.css'


const RedditHeader=({open,setOpen,redditDropdown,toggle, setRedditDropdown})=>{
    return(
    <div className='reddit-header'>
        <div className="header-main-container">
            <div className="header-main-container-left">
                <div className="header-main-container-left-logo"><FaRedditAlien/></div><span className='reddit-logo-name'>Reddit</span>
                <div className="header-main-container-left-searchbar">
                    <label htmlFor="header-main-container-left-searchbar" className='header-main-container-left-searchbar-label'><FaSearch style={{marginBottom:'4px',color:'#8f9294'}}/></label>
                    <form action="/search/">
                        <input type="search" placeholder='search' id="header-main-container-left-searchbar"className='header-main-container-left-searchbar-input'/>
                    </form>
                </div>
            </div>
            <div className="header-main-container-right">
                <div className="header-main-container-right-box">
                    <div className="header-main-container-right-box-login-signup">
                        <button className='login-button'>Log IN</button>
                        <button className='signup-button'>Sign Up</button>
                    </div>
                    <div className="header-main-container-right-email">
                        <div className="header-main-container-right-email-dropdown">
                            <button className="header-main-container-email-dropdown-button"
                                onClick={()=>toggle(!open)}
                            >
                            <span className='email-dropdown-button-arrow'><FaUserAlt className='icons'/></span>
                            <span className='email-dropdown-button-icon'><FiChevronDown className='icons'/></span>
                            </button>
                            {open &&(
                            <ul className='reddit-nav-dropdown'>
                            {(redditDropdown.map(item=>(
                                <div key={item.name} className='reddit-nav-dropdown-item-div'>
                                    <li className='d-flex p-0 reddit-nav-dropdown-item-list'>
                                        <span className='m-2 reddit-nav-dropdown-item-list-icon'>{item.icon}</span>
                                        <span className='m-2 reddit-nav-dropdown-item-list-item'>{item.name}</span>
                                    </li>
                                </div>
                                )))}
                            </ul>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default RedditHeader