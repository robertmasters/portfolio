import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'

export default function ProjectDisplay() {

    return (
        
        <div className='project-display'>
        <img src = {require('../Projects/cimg1.jpg').default}  />
        <img src = {require('../Projects/cimg2.png').default}  />
        <img src = {require('../Projects/cimg3.jpg').default}  />
        <img src = {require('../Projects/cimg4.jpg').default}  />
        </div>
        
    )
}

// return (
        
//     <div className='project-display'>
//         <div>
//         label of display - description of display ---- information will be sent via props 
//         </div>
//         <div>
//         image of display with a gradient going out ---- information for pic will be sent via props
//         </div>
//     </div>
    
// )