const Projects = () => {
    const projects = [
        {
            title: "Blender Projects",
            description: "3D modeling and animation projects created using Blender.",
            
        },
        {
            title: "Photoshop Projects",
            description: "Editing and graphic design projects created using Adobe Photoshop."
           
        },
        {
            title: "Web Development Projects",
            description: "Websites and web applications developed using HTML, CSS, and JavaScript."
        },
        {
            title: "Data Science Projects",
            description: "Data analysis and machine learning projects using Python and R."
        },
        {
            title: "AI Projects",
            description: "Artificial Intelligence projects involving machine learning and deep learning."
        },
        {
            title: "Mobile Development Projects",
            description: "Mobile applications developed for Android and iOS platforms."
        }
    ];
  return (
    <div className="projects" id="projects">
        <div className="st"><h6>MY PROJECTS</h6></div>
        <div className="project-list">
            {projects.map((project, index) => (
            <div key={index} className="project-item">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            ))}
        </div>
    </div>
  )
}
export default Projects;
