import Separator from "../../separator/Separator";
import { WorkData } from "../../data/WorkData";
import WorkItem from "./WorkItem";
import "./Work.css";

const Work = () => {
    return (
        <div className="work">
            <Separator />
            <label className="section-title">Experience</label>
            <div className="work-list">
                {WorkData.map((work) => {
                    return <WorkItem work={work} />;
                })}
            </div>
        </div>
    );
}

export default Work;