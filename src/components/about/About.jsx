import "./about.css"
import Logo from  "../../img/Logo.jfif"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-left-container">
                    <h1 className="about-title">About Me</h1>
                    <div className="about-logo">
                        <img src={Logo} alt="" className="about-logo-img"></img>
                        <div className="about-logo-description">This is my Freshman year at Koc University. My major is computer science. I am proceeding with my college career with a 3.9 GPA right now.
</div>
                    </div>
                    <br></br>
                    <div className="about-description">I am from Mersin, a pretty seaside city in Turkey. I am now living in Istanbul and exploring new experiences. I want to enforce myself to improve by all manners necessary in order to achieve my goals. I can use Python and Java languages along with introductory HTML/CSS/Javascript knowledge followed by React experience. I have had outstanding successes in my past academic life and I aim to sustain them by adding other dimensions.</div>

                </div>
            </div>
            <div className="about-right">
                <div className="about-background"></div>
            </div>
        </div>
    )
}

export default About