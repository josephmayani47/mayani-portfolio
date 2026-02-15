const ToolSet = () => {
    const tools = [
        { name: 'React', icon: 'react-icon' },
        { name: 'Node.js', icon: 'node-icon' },
        { name: 'Docker', icon: 'docker-icon' },
        { name: 'Git', icon: 'git-icon' },
        { name: 'Webpack', icon: 'webpack-icon' }
    ];
  return (
    <div className="toolset" id="toolset">
      <div className="st"><p>TOOLS</p></div>
      <ul className="tool-list">
        {tools.map((tool, index) => (
          <li key={index} className="tool-item">
            <span className={tool.icon}></span>
            {tool.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToolSet;
// This component is a placeholder for the ToolSet section of the application.
