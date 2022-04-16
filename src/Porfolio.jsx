// Modules
import React from 'react';

// Components
import AboutMe from 'Components/AboutMe';
import Home from 'Components/Home';
import Navbar from 'Components/Navbar';
import Tecnologies from 'Components/Tecnologies';
import Projects from 'Components/Projects';
import Testimonials from 'Components/Testimonials';
import Contact from 'Components/Contact';

const Porfolio = () => {
    return (
        <>
            <Navbar />
            <Home />
            <AboutMe />
            <Tecnologies />
            <Projects />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Porfolio;