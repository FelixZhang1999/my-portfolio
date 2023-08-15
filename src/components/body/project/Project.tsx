import Separator from "../../separator/Separator";
import ProjectItem from "./ProjectItem";
import { ProjectData } from "../../data/ProjectData";
import "./Project.css";

const Project = () => {
    return (
        <div>
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {ProjectData.map((project) => {
                    return <ProjectItem project={project} />;
                })}
            </div>
        </div>
    );
}

export default Project;