
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
import Resume from './components/contents/Resume';
import {  Routes, Route } from "react-router-dom";



function App() {
  return(
    <>
     

    <Routes>
        <Route path="/resume" element={<Resume />} />
    </Routes>

    <Routes>
        <Route path="/" 
        element={
          <>
            <Navigation />
            <Profile />
            <Strengths />
            <Projects />
            <Skills />
            <ToolSet />
            <Contacts />
          </>
        } />
    </Routes>
    
     

      
    </>
  );
}

export default App
