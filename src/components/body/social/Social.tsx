import { SocialData } from "../../data/SocialData";
import "./Social.css";

const Social = () => {
    return (
        <div className="social-contact">
            {SocialData.map ((item) => {
                return (
                    <a href={item.link} key={item.platform}  target="_blank">
                    <div className="social-icon-div">
                        <img src={item.icon} className="social-icon"/>
                    </div>
                    </a>
                );
            })}
        </div>
    );
}

export default Social;