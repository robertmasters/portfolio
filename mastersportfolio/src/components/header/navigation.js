//skills
//projects
//contact


import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'


export default function Navigation() {
    return (
        <nav>
            <div className='nav-links'>
                <div className='nav-link'><Link to = '/'>Home</Link></div>
                <div className='nav-link'><Link to = '/skills'>Resume</Link></div>
                <div className='nav-link'><Link to = '/projects'>Projects</Link></div>
                <div className='nav-link'><Link to = '/contact'>Contact</Link></div>
                
            </div>
        </nav>
    )
}