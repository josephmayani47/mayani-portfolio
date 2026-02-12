
import './App.css'
import './components/header/Navigation.css'
import Contacts from './components/footer/Contacts';
import Navigation from './components/header/Navigation';
import Profile from './components/contents/Profile';
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
     <Contacts />
    </>
  );
}

export default App
