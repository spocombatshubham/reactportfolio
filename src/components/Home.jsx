import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from 'react';
import Typed from 'typed.js';

export default function Home() {
    useEffect(() => {
        const typed = new Typed('.multiple-text', {
            strings: ['Frontend Developer', 'Problem Solving', 'Javascript', 'React.Js', 'NodeJS', 'C++'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        });
        return () => {
            typed.destroy(); // Destroy the Typed instance on unmount
        };
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <div>
            <section className="home" id="home">
                <div className="home-content">
                    <h3>Welcome to my place</h3>
                    <h1>Shubham Kumar Singh</h1>
                    <h3>And I am <span className="multiple-text"></span></h3>
                    <p>doing my BTech CSE from Graphic Era University, Dehradun</p>
                    <div className="social-media">
                        <a href="https://www.facebook.com/shubham.countryman/" target="_blank"><i className='bx bxl-facebook'><FaFacebook/></i></a>
                        <a href="https://www.instagram.com/its.me.shubham619/" target="_blank"><i className='bx bxl-instagram'><FaInstagram/></i></a>
                        <a href="https://github.com/spocombatshubham?tab=repositories" target="_blank"><i className='bx bxl-github'><FaGithub/></i></a>
                        <a href="https://www.linkedin.com/in/shubham-kumar-singh-481a36212" target="_blank"><i className='bx bxl-linkedin'><FaLinkedin/></i></a>
                    </div>
                    <a href="https://drive.google.com/file/d/1SLyEYrqnEP4Lw-HUYh-vaz0E12BK3wdh/view?usp=drive_link" target="_blank" className="btn">RESUME</a>
                </div>
                <div className="home-img">
                    <img src="https://avatarfiles.alphacoders.com/371/371697.png" alt="" width="275px" height="400px"/>
                </div>
            </section>
        </div>
    );
}
