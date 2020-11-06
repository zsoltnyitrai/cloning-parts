import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import '../App.css'

function PageButtons() {
    return (
        <div className='main-button-container'>
            <Link to='/yahoo'><Button>Yahoo</Button></Link>
            <Link to='/reddit'><Button>Reddit</Button></Link>
        </div>
    )
}

export default PageButtons
