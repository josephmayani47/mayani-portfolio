const Skills = () => {
    const skills = ["Communication", "Security", "Leadership", "Time Management", "Cloud Computing", "Problem Solving", "Teamwork", "Adaptability", "Creativity", "Critical Thinking"];
  return (
    <div className="skills" id="skills">
      <div className="st"><h6>MY SKILLS</h6></div>
      <ul className="skills-set">
        {skills.map((skill, index) => (
          <li key={index} className="skills-list">{skill}</li>
        ))}
      </ul>
    </div>
    
  )
}

export default Skills;
