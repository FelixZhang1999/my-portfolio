import Separator from "../../separator/Separator";
import { SkillsData } from "../../data/SkillData";
import SkillItem from "./SkillItem";
import "./Skill.css";

const Skill = () => {
    return (
        <div>
            <Separator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
            {SkillsData.map((item) => {
                return (
                <div className="skills-section">
                    <label className="skills-section-title">{item.type}</label>
                    <div className="skills-list">
                    {item.list.map((skill) => {
                        return <SkillItem skill={skill} />;
                    })}
                    </div>
                </div>
                );
            })}
            </div>
        </div>
    );
}

export default Skill;