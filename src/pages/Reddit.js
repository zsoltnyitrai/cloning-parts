import React from 'react'
import '../styles/reddit.css'
import { FiChevronDown } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Reddit=()=>{
    return(
        <div>
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
                                    <button className="header-main-container-email-dropdown-button">
                                    <span className='email-dropdown-button-arrow'><FaUserAlt className='icons'/></span>
                                    <span className='email-dropdown-button-icon'><FiChevronDown className='icons'/></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className ='container'></div>

        </div>
    )
}
export default Reddit