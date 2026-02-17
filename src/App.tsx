
import './App.css'
import './components/contents/Strength.css'
import './components/header/Navigation.css'
import './components/contents/Profile.css'
import './components/contents/Projects.css'
import './components/contents/Skills.css'
import './components/contents/ToolSet.css'
import './components/footer/Contacts.css'
import Contacts from './components/footer/Contacts';
import Navigation from './components/header/Navigation';
import Profile from './components/contents/Profile';
import { Strengths } from './components/contents/Strengths';
import Projects from './components/contents/Projects';
import Skills from './components/contents/Skills';
import ToolSet from './components/contents/ToolSet';


function App() {
  return(
    <>
     <Navigation />
     <Profile />
     <Projects />
     <Skills />
     <ToolSet />
     <Strengths />
     <Contacts />
    </>
  );
}

export default App
