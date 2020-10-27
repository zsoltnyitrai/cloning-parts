import React, {useState} from 'react'
import '../styles/reddit.css'
import { FiChevronDown } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { BiCoin } from "react-icons/bi";
import { BsShieldShaded } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { RiLoginBoxFill } from "react-icons/ri";
import post from '../assets/images/post.png' 
import { ImFire } from "react-icons/im";
import {IoMdArrowDropdown} from 'react-icons/io'
import {MdNewReleases} from 'react-icons/md'
import {BiBarChart} from 'react-icons/bi'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {RiLayoutBottomFill} from 'react-icons/ri'



const Reddit=()=>{
    const [redditDropdown,setRedditDropwdon]=useState([
        {
            name:'night mode',
            icon:<FaMoon/>
        },        
        {
            name:'Reddit Coins',
            icon:<BiCoin/>
        },        
        {
            name:'Reddit-Premium',
            icon:<BsShieldShaded/>
        },        
        {
            name:'Heml Center',
            icon:<BiHelpCircle/>

        },        
        {
            name:'Log In/Sign Up',
            icon:<RiLoginBoxFill/>
        },
    ])
    const [open ,setOpen]=useState(false)
    const toggle=()=>setOpen(!open)



    return(
        <div className='one-above-all'>
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
            <div className =''>
                <div className="trending-big-container">
                    <div className="trending-box">
                        <div className="trending-box-header">
                            <div className="trending-box-header-title">Trending today</div>
                        </div>
                        <div  className="trending-box-posts-container">
                            <div  className="trending-box-posts-container-row">
                                <div className="trending-box-posts-container-row-item"><img src={post} className='reddit-post' alt=""/></div>
                                <div className="trending-box-posts-container-row-item"><img src={post} className='reddit-post' alt=""/></div>
                                <div className="trending-box-posts-container-row-item"><img src={post} className='reddit-post' alt=""/></div>
                                <div className="trending-box-posts-container-row-item"><img src={post} className='reddit-post' alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reddit-main-big-box">
                <div className="reddit-main-big-box-left">

                </div>
                <div className="reddit-main-big-box-right">
                    <div className="reddit-main-big-box-righ-header">
                        Popular posts
                    </div>
                    <div className="reddit-right-head-bar">
                        <div className="reddit-right-head-bar-dropdown"></div>
                        <div className="reddit-right-head-bar-flex">
                            <div className="reddit-right-head-bar-flex-hot">
                                <span className="reddit-right-head-bar-flex-icon"><ImFire/></span>
                                <span className="reddit-right-head-bar-flex-text">Hot</span>
                            </div>
                            {/* this is for the mini screen */}
                            <div className="reddit-right-head-bar-flex-hot-mini">
                                <span className="reddit-right-head-bar-flex-icon-mini"><ImFire/></span>
                                <span className="reddit-right-head-bar-flex-text-mini">Hot</span>
                                <span className="reddit-right-head-bar-flex-arrow-mini"><IoMdArrowDropdown/></span>
                            </div>
                            {/* this is for the mini screen END */}

                            <div className="reddit-right-head-bar-region">
                                <div className="reddit-right-bar-region-box">
                                    <button className="reddit-right-bar-region-box-button">
                                        <span className="reddit-right-bar-region-box-button-text">Romania</span>
                                        <span className="reddit-right-head-bar-flex-arrow-mini"><IoMdArrowDropdown/></span>
                                    </button>
                                </div>
                            </div>
                            <div className="reddit-right-head-bar-new">
                                <span className='reddit-right-head-bar-new-icon'><MdNewReleases/></span>
                                <span className='reddit-right-head-bar-new-text'>New</span>
                            </div>
                            <div className="reddit-right-head-bar-top">
                                <span className='reddit-right-head-bar-top-icon'><BiBarChart/></span>
                                <span className='reddit-right-head-bar-top-text'>Top</span>
                            </div>
                            <div className="reddit-right-head-bar-dots">
                                <span className='reddit-right-head-bar-dots-icon'><BiDotsHorizontalRounded/></span>
                            </div>
                            <div className="reddit-right-head-bar-viewmode">
                                <span className='reddit-right-head-bar-view-icon'><RiLayoutBottomFill/></span>
                                <span className='reddit-right-head-bar-flex-arrow-mini'><IoMdArrowDropdown/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                       

        </div>
    )
}
export default Reddit