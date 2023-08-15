import { useState } from "react";
import "./Mobile.css";

const Mobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mobile-menu">
            <div onClick={()=>setIsOpen(!isOpen)}>
                <i className="fi-rr-apps menu-icon"></i>
            </div>
            {isOpen &&
            <div className="mobile">
                <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                    <i className="fi-rr-cross-circle"></i>
                </div>
                <div className="mobile-option">
                    <a href="#projects" >
                        <i className="fi-rr-edit-alt option-icon"></i>Projects
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skills">
                        <i className="fi-rr-laptop option-icon"></i>Skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                        <i className="fi-rr-briefcase option-icon"></i>Work
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        <i className="fi fi-rr-user option-icon"></i>Contact
                    </a>
                </div>
            </div>}
        </div>
    );
}

export default Mobile;