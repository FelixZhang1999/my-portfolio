/* eslint-disable @typescript-eslint/no-explicit-any */
import "./SkillItem.css";

const SkillItem = ({ skill }  : any) => {
    return (
        <div className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <label className="skill-name">{skill.name}</label>
        </div>
    );
}

export default SkillItem;