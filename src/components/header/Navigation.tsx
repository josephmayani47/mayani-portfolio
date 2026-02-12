 const Navigation = () => {

  return (
    <div className="container" id="container">
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#container">MAYANI</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#profile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#toolset">Toolset</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">Contacts</a>
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
          <div className="item" style={{"--position": 8} as React.CSSProperties}><img src="images/react.jpeg" alt="" /></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navigation;

