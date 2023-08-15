import Separator from "../../separator/Separator";
import Social from "../social/Social";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Email: zhangfutian1@gmail.com</p>
                    <p>Phone: 619-490-0661</p>
                    <Social />
                </div>
            </div>
        </div>
    );
}

export default Contact;