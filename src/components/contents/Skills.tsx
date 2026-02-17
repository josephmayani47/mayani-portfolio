const Skills = () => {
    const skills = ["Communication","Leadership", "Problem Solving", "Teamwork"];
    const hards = ["Data Management", "Deployment", "Programming", "Cloud Management"]
  return (
    <div className="skills" id="skills">
      <div className="st"><p>SKILLS</p></div>

     

      <div className="roo">
        <div className="colm">
           <p>SOFT SKILLS</p>
           <ul className="skills-set">
            {skills.map((skill, index) => (
           <li key={index} className="skills-list">{skill}</li>
            ))}
           </ul>
        </div>

        <div className="divide"></div>
        
        <div className="colm">
          <p>HARD SKILLS</p>
           <ul className="skills-set">
           {hards.map((hard, index) => (
          <li key={index} className="skills-list">{hard}</li>
           ))}
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Skills;
