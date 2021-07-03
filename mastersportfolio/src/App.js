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

        </div>

          <div className = "box3">

          <div className = "intro">
          Hello I am a software developer currently living in Florida. I am skilled at making websites and android mobile applications from the front end to the back end. This includes: making mobile applications using native technologies such as Java and Kotlin, creating fully functional websites using state management tech such as context or reddux, I can also build fully functional API applications using Spring, but am willing to learn other technologies.
          </div>

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
