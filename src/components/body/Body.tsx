import About from "./about/About";
import Contact from "./contact/Contact";
import Project from "./project/Project";
import Skill from "./skill/Skill";
import Work from "./work/Work";
import "./Body.css";

const Body = () => {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Project />
            </section>
            <section id="skills">
                <Skill />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default Body;