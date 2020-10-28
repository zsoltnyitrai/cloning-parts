import React from 'react'
import '../../styles/redditrightpost.css'
import {GoArrowUp} from 'react-icons/go'
import {GoArrowDown} from 'react-icons/go'
import {FcRating} from 'react-icons/fc'
import {FaCommentAlt} from 'react-icons/fa'

const RedditRightPost=()=>{
    return(
        <div className='reddit-right-post'>
            <div className="reddit-right-post-vote">
                <div className="reddit-right-post-vote-box">
                    <button className='reddit-right-post-vote-box-up'>
                        <span className='reddit-right-post-vote-box-up-logo'><GoArrowUp/></span>
                    </button>
                    <div className="reddit-right-post-vote-box-votes">12.0k</div>
                    <button className='reddit-right-post-vote-box-down'>
                        <span className='reddit-right-post-vote-box-down-logo'><GoArrowDown/></span>
                    </button>
                </div>
            </div>
            <div className="reddit-right-post-content">
                <div className="reddit-right-post-content-article">
                    <div className="reddit-right-post-content-article-main">
                        <div className="reddit-right-post-content-article-main-header">
                            <div className="reddit-right-post-content-article-main-header-logo"><FcRating/></div>
                            <div className="reddit-right-post-content-article-main-header-content">
                                <div className="reddit-right-post-content-article-main-header-content-title-author">
                                    <div className="reddit-right-post-content-article-main-header-content-title">r/ps4</div>
                                    <div className="reddit-right-post-content-article-main-header-content-separator">*</div>
                                    <div className="reddit-right-post-content-article-main-header-content-postedby">Posted by</div>
                                    <div className="reddit-right-post-content-article-main-header-content-author">/zsolt</div>
                                    <div className="reddit-right-post-content-article-main-header-content-time">16 hours ago</div>
                                </div>
                                <div className="reddit-right-post-content-article-main-header-content-icons">
                                <div className="reddit-right-post-content-article-main-header-content-icons-icon">A</div>
                                <div className="reddit-right-post-content-article-main-header-content-icons-icon">W</div>
                                <div className="reddit-right-post-content-article-main-header-content-icons-icon">A</div>
                                <div className="reddit-right-post-content-article-main-header-content-icons-icon">R</div>
                                <div className="reddit-right-post-content-article-main-header-content-icons-icon">D</div>
                                </div>
                            </div>
                        </div>

                        <div className="reddit-right-post-content-article-main-description">
                            <div className="reddit-right-post-content-article-main-description-text">
                                Insert text here
                            </div>
                            <div className="reddit-right-post-content-article-main-description-subredit">    
                                <div className="reddit-right-post-content-article-main-description-type">type</div>
                            </div>
                            <div className="reddit-right-post-content-article-main-description-link">
                                <a href="#">twitter.com</a>
                            </div>
                            <div className="reddit-right-post-content-article-footer">
                        <div className="reddit-right-post-content-article-footer-box">
                            <div className="reddit-right-post-content-article-footer-box-comments">
                                <span className='reddit-right-post-content-article-footer-box-comments-icon'><FaCommentAlt/></span>
                                <span className='reddit-right-post-content-article-footer-box-comments-text'>14.2k Comments</span>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default RedditRightPost