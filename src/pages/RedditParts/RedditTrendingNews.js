import React from 'react'
import '../../styles/reddittrendingnews.css'

const RedditTrendingNews=({post})=>{
    return(
    <div className ='reddit-trending'>
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


    )
}
export default RedditTrendingNews