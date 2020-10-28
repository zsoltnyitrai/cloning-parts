import React, {useState} from 'react'
import '../styles/reddit.css'
import { FaMoon } from "react-icons/fa";
import { BiCoin } from "react-icons/bi";
import { BsShieldShaded } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { RiLoginBoxFill } from "react-icons/ri";
import post from '../assets/images/post.png' 


import RedditHeader from './RedditParts/RedditHeader'
import RedditTrendingNews from './RedditParts/RedditTrendingNews';
import RedditRightHeadBar from './RedditParts/RedditRightHeadBar';
import RedditRightPost from './RedditParts/RedditRightPost'

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
            <RedditHeader 
                open={open}
                setOpen={setOpen}
                toggle={toggle}
                redditDropdown={redditDropdown} 
                setRedditDropwdon={setRedditDropwdon}/>
            <RedditTrendingNews post={post}/>
            <div className="reddit-main-big-box">
                <div className="reddit-main-big-box-left">

                </div>
                <div className="reddit-main-big-box-right">
                    <div className="reddit-main-big-box-righ-header">
                        Popular posts
                    </div>
                    <RedditRightHeadBar/>

                    <RedditRightPost/>
                    <RedditRightPost/>
                    <RedditRightPost/>
                    <RedditRightPost/>
                    <RedditRightPost/>
                </div>
            </div>                       

        </div>
    )
}
export default Reddit