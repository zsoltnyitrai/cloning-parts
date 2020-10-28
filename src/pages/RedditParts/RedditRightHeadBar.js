import React from 'react'
import { ImFire } from "react-icons/im";
import {IoMdArrowDropdown} from 'react-icons/io'
import {MdNewReleases} from 'react-icons/md'
import {BiBarChart} from 'react-icons/bi'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {RiLayoutBottomFill} from 'react-icons/ri'
import '../../styles/redditrightheadbar.css'

const RedditRightHeadBar=()=>{
    return(
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
                <span className='reddit-right-head-bar-viewmode-icon'><RiLayoutBottomFill/></span>
                <span className='reddit-right-head-bar-flex-arrow-mini'><IoMdArrowDropdown/></span>
            </div>
        </div>
    </div>
    )
}
export default RedditRightHeadBar