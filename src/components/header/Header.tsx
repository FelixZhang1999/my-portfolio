import "./Header.css";
import Web from "./web/Web";
import Mobile from "./mobile/Mobile";

const Header = () => {

    return (
        <div className="header">
            <div className="web-menu">
                <Web />
            </div>
            <div className="mobile-menu">
                <Mobile />
            </div>
        </div>
    );
}

export default Header;