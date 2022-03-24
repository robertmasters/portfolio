import './App.scss';
import Navigation from './components/header/navigation'
import ProjectDisplay from './components/Projects/projectDisplayComponent';
import SkillsHomeComponent from './components/Skills/SkillsHomeComponent';
import Banner from './components/header/Banner';
import {BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">

      <div className = "main-container">

        <header className = "box1">
          <div className = "box1inside">
            <Banner />
            <Navigation />   
          </div>
        </header>

        <div className="box2">
          <Route exact path = "/"  className = "skills-topline1"> </Route>
          <Route exact path = "/"  className = "skills-topline2"> </Route>
          <Route exact path = "/" component = {SkillsHomeComponent} />

        </div>

          <div className = "box3">

          <Route exact path = "/"  >
          <div className = "intro">Hello I am a full stack software developer currently living in Florida. Here is a list of my tech skillset: making REST API applications using Java or Kotlin incorporating tech like OAuth2 for authentication or JUnit for testing, and PostgreSQL as the DBMS. Fully functional websites using HTML5, CSS, Javascript and React incorporating tech such as context, redux, jest, & axios. I am constanly learning new ways of refininig my skills and I am willing to learn other technologies if they help me accomplish whatever task is thrown at me.
          </div>
          </Route>

          <Route exact path = "/"  ><div className = "featured-label">Featured Projects</div></Route>
            <Route exact path = "/" component = {ProjectDisplay} />
          </div>

          
    
      </div>
  
    </div>
    </Router>
  );
}

export default App;

// <div className="App">
