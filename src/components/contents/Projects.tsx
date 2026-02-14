import  {useRef} from 'react';

type Project = {
    title: string;
    description: string;
    image?: string;
};

  const projects: Project[] = [
        {
            title: "Blender Projects",
            description: "3D modeling and animation projects created using Blender.",
            image: "blender.png"
            
        },
        {
            title: "Photoshop Projects",
            description: "Editing and graphic design projects created using Adobe Photoshop.",
            image: "photoshop.png"
           
        },
        {
            title: "Web Development Projects",
            description: "Web applications developed using HTML, CSS, and JavaScript.",
            image: "web.png"
        },
        {
            title: "Data Science Projects",
            description: "Data analysis and machine learning projects using Python and R.",
            image: "ds.png"
            
        },
        {
            title: "AI Projects",
            description: "Artificial Intelligence projects involving machine learning and deep learning.",
            image: "AI.png"
        },
        {
            title: "Mobile Development Projects",
            description: "Mobile applications developed for Android and iOS platforms.",
            image: "board.jpeg"
        }
    ];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right"): void => {
    if(!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = container.clientWidth;

    container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
    });

  }
  return (

    <div className="projects" id="projects">
        <div className="st"><p>PROJECTS</p></div>

        <div className="controls">
            <button onClick={()=>scroll("left")}>&lt;</button>
            <button onClick={()=>scroll("right")}>&gt;</button>
        </div>
        <div className="project-list">
            {projects.map((project, index) => (
            <div key={index} className="project-item">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <img src={project.image} alt={project.title} />
            </div>
            ))}
        </div>
    </div>
  )
}
export default Projects;
