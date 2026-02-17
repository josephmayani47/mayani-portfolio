 import { icon } from "@fortawesome/fontawesome-svg-core";
 import { faGithub } from "@fortawesome/free-brands-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 
 const Navigation = () => {

  return (
    <div className="container" id="container">
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#container"><img id="logo" src="logo.png" alt="Logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><b>HOME</b></a>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <a className="nav-link" href="#profile"><b>PROFILE</b></a>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <a className="nav-link" href="#projects"><b>PROJECTS</b></a>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <a className="nav-link" href="#skills"><b>SKILLS</b></a>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <a className="nav-link" href="#tools"><b>TOOLSET</b></a>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <a className="nav-link" href="#contacts"><b>CONTACTS</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div className="hero-section">
      <div className="banner">
        <div className="slider" style={{"--quantity": 8} as React.CSSProperties}>
          <div className="item" style={{"--position": 1} as React.CSSProperties}><img src="images/AI.jpeg" alt="" /></div>
          <div className="item" style={{"--position": 2} as React.CSSProperties}><img src="images/AI2.jpeg" alt="" /></div>
          <div className="item" style={{"--position": 3} as React.CSSProperties}><img src="images/android.jpeg" alt="" /></div>
          <div className="item" style={{"--position": 4} as React.CSSProperties}><img src="images/css.jpeg" alt="" /></div>
          <div className="item" style={{"--position": 5} as React.CSSProperties}><img src="images/js.jpeg" alt="" /></div>
          <div className="item" style={{"--position": 6} as React.CSSProperties}><img src="images/ml.jpeg" alt="" /></div>
          <div className="item" style={{"--position": 7} as React.CSSProperties}><img src="images/ps.jpeg" alt="" /></div>
          <div className="item" style={{"--position": 8} as React.CSSProperties}><img src="images/react3.jpeg" alt="" /></div>
        </div>
        
        <div className="mane">
          <div className="cv">
            <a href='https://github.com/josephmayani47' target="_blank" rel="noopener noreferrer">
                  {icon(faGithub) && <FontAwesomeIcon icon={icon(faGithub)} style={{color:"black"}} />}
            </a>
            <p>resume</p>
          </div>
          <div className="icon"><p>download</p></div>
        </div>
        <div className="name">
          <div className="title"><p>PORTFOLIO</p></div>
          <div className="sub-title">Get in touch and let's do work together, Impossible is nothing</div>
        </div>
        
      </div>

      
    </div>
    </div>
  )
}

export default Navigation;

