import "./intro.css"
import Me from  "../../img/me.png"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-container">
                    <h2 className="intro-intro">Hello! My name is</h2>
                    <h1 className="intro-name">Emre Akca </h1>
                    <div className="intro-slider">
                        <div className="intro-slider-container">
                            <div className="intro-slider-slide">Computer</div>
                            <div className="intro-slider-slide">Science</div>
                            <div className="intro-slider-slide">Student</div>
                        </div>
                    </div>
                    <div className="intro-description">I am an undergraduate computer science and engineering student. 
                    My main intersts are learning enjoyable things and spending my time freely outside.
                     In my opinion, reconciling the presence of a satisfying product 
                     and the process of learning is the best approach in self-development. 
                     This website is a good example of that. It is my very first personal portfolio website 
                     which I designed using React which did motivate me to learn React basics.</div>
                    {/* <div className="intro-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div> */}

                </div>
            </div>
            <div className="intro-right">
                {/* right */}
                <div className="intro-background"></div>
                <div className="img-container"><img src={Me} alt=""></img></div>
                
            </div>
        </div>
    )
}

export default Intro