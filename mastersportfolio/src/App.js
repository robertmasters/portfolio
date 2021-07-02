import logo from './logo.svg';
import './App.scss';
import Navigation from './components/header/navigation'
import ProjectDisplay from './components/Projects/projectDisplayComponent';
import SkillsComponent from './components/Skills/SkillsComponent';
import Banner from './components/header/Banner';

function App() {
  return (
    <div className="App">

      <div className = "main-container">

        <header className = "box1">
          <div className = "box1inside">
            <Banner />
            <Navigation />   
          </div>
        </header>

        <div className="box2">
          <div className = "skills-topline1"> </div>
          <div className = "skills-topline2"> </div>
          <div className = "skills-topline3"> </div>
          <SkillsComponent />
          <div className = "skills-bottomline1"> </div>
          <div className = "skills-bottomline2"> </div>
        </div>


          <div className = "box3">
            <div className = "featured-label" >Featured Projects</div>
            <img src = {require('./projectDisplayImages/cimg1.jpg').default}  />
            <img src = {require('./projectDisplayImages/cimg3.jpg').default}  />
            <img src = {require('./projectDisplayImages/cimg4.jpg').default}  />
            <img src = {require('./projectDisplayImages/cimg2.png').default}  />

          </div>
    
      </div>
  
    </div>
  );
}

export default App;

// <div className="App">
