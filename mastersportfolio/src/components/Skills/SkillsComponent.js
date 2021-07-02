import React from 'react'
import {Link, Route} from 'react-router-dom'


export default function SkillsComponent() {

  
    return (
        
        <div className='skills-component'>
        
                {/*
                1. doing a route path allows me to route the user to the hyperlink using window.open or window.location.href
                2. window.open instead of window.location.href, since window.open opens the hyperlink in a new tab 
                -  I chose this method, because in my opinion it is easier to understand
                4. using blank instead of _blank, since i had an issue where the link was opening the same site in 2 seperate tabs instead of a single seperate tab

            
                */}
                <Route path='/javascript' component={() => { window.open('https://www.javascript.com/', "blank"); return null; }}/>
                <Route path='/react' component={() => { window.open('https://reactjs.org/', "blank"); return null; }}/>
                <Route path='/redux' component={() => { window.open('https://redux.js.org/', "blank"); return null; }}/>
                <Route path='/java' component={() => { window.open('https://www.java.com/en/', "blank"); return null; }}/>
                <Route path='/spring' component={() => { window.open('https://spring.io/', "blank"); return null; }}/>
                <Route path='/python' component={() => { window.open('https://www.python.org/', "blank"); return null; }}/>
                <Route path='/android' component={() => { window.open('https://developer.android.com/studio', "blank"); return null; }}/>
                <Route path='/kotlin' component={() => { window.open('https://kotlinlang.org/', "blank"); return null; }}/>
                <Route path='/git' component={() => { window.open('https://git-scm.com/', "blank"); return null; }}/>

                <div className='skills-label'>
                    Skills
                </div>

                <Link to = '/javascript'>JavaScript</Link>
                <Link to = '/react'>React</Link>
                <Link to = '/redux'>Redux</Link>
                <Link to = '/java'>Java</Link>
                <Link to = '/spring'>Spring</Link>
                <Link to = '/python'>Python</Link>
                <Link to = '/android'>Android Studio</Link>
                <Link to = '/kotlin'>Kotlin</Link>
                <Link to = '/git'>Git</Link>
            </div>
        
    )
}