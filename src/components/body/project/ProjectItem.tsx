import "./ProjectItem.css";

const ProjectItem = ({ project }) => {
    return (
        <div className="project-item">
            <div className="project-info">
            <label className="project-title">{project.title}</label>
            <div className="project-links">
                {project.demo && (
                    <a className="project-link" href={project.demo}   target="_blank">
                        <div className="link-button">
                            <i className="fi-rr-globe"></i>Demo
                        </div>
                    </a>
                )}
                {project.github && (
                    <a className="project-link" href={project.github}   target="_blank">
                    <div className="link-button">
                        <i className="devicon-github-original"></i>Github
                    </div>
                </a>
                )}
            </div>
            <p>{project.about}</p>
            <div className="project-tags">
                {project.tags.map((tag)=> {
                    return <label className="tag">{tag}</label>;
                })}
            </div>
            </div>
            <img src={project.image} className="project-photo" />
        </div>
    );
}

export default ProjectItem;