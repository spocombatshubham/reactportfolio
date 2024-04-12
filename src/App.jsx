import  { useEffect } from 'react'; 
//import Typed from "typed.js";
import ScrollReveal from 'scrollreveal'// Import React and useEffect
import About from "./components/About";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Port from "./components/Port";
import Contactfooter from "./components/Contactfooter";

export default function App() {
  // Use useEffect to handle side effects
  useEffect(() => {
    // Function to toggle menu icon and navbar
    const toggleMenu = () => {
      const menuIcon = document.querySelector('#menu-icon');
      const navbar = document.querySelector('.navbar');
      menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-window-close');
        navbar.classList.toggle('active');
      };
    };

    // Function to handle scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');

      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        }
      });

      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);
      // menuIcon.classList.remove('bx-window-close');
      // navbar.classList.remove('active');
    };

    // Call the toggleMenu function
    toggleMenu();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up function to remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run effect only once

  // Initialize ScrollReveal and Typed.js
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img,.services-container,.portfolioc-box,.contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p,.about-content,.github-line', { origin: 'right' });

  //   const typed = new Typed('.multiple-text', {
  //     strings: ['Frontend Developer', 'Penetration Tester', 'Ethical Hacker'],
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 100,
  //     loop: true
  //   });
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Port />
      <Contactfooter />
    </div>
  );
}
