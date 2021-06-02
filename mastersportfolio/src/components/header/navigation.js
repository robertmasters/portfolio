//skills
//projects
//contact


import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'


export default function Navigation() {
    return (
        <nav>
        <div className='nav-links'>
                <Link to = '/'>Home</Link>
                <Link to = '/skills'>Skills</Link>
                <Link to = '/projects'>Projects</Link>
                <Link to = '/contact'>Contact</Link>
            </div>
        </nav>
    )
}