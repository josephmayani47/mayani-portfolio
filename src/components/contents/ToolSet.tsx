const ToolSet = () => {
interface ToolCategory {
  title: string;
  tools: string[];
}

const toolData: ToolCategory[] = [
  {
    title: "Programming",
    tools: ["JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    title: "Frontend",
    tools: ["React", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    tools: ["Laravel", "Node.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database",
    tools: ["PostgreSQL", "MySQL"],
  },
  {
    title: "AI & Data",
    tools: ["OpenCV", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    title: "DevOps & Tools",
    tools: ["Git", "GitHub", "Docker", "Vercel", "Postman"],
  },
];
    
  return (
    <section className="tools-section" id="tools">
      <div className="tools-container">
        <h2 className="tools-title">Tools & Technologies</h2>
        <p className="tools-subtitle">
          Technologies I use to build scalable and impactful solutions.
        </p>

        <div className="tools-grid">
          {toolData.map((category, index) => (
            <div className="tool-card" key={index}>
              <h3>{category.title}</h3>
              <ul>
                {category.tools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

  

export default ToolSet;
// This component is a placeholder for the ToolSet section of the application.
