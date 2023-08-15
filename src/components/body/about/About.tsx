import profileImage from "../../../assets/profileImg.jpg";
import Social from "../social/Social";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There, I am,
                    <br /> <span className="info-name">Futian Zhang</span>.
                    <br /> I have experience working with AWS.
                </div>
                <div className="about-photo">
                    <img
                        src={profileImage}
                        className="picture"
                    />
                </div>
            </div>
            <Social />
        </div>
    );
}

export default About;