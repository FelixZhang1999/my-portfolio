/* eslint-disable @typescript-eslint/no-explicit-any */
import "./WorkItem.css";

const WorkItem = ({ work } : any) => {
    return (
        <div className="work-item">
            <img src={work.companyLogo}className="work-logo" />
            <div className="work-info">
                <label className="company-name">{work.company}</label>
                <label className="title">{work.title}</label>
                <div className="work-dates">
                    <label>{work.dateJoining}</label>-<label>{work.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{work.work}</p>
                </div>
            </div>
        </div>
    );
}

export default WorkItem;