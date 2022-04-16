// Modules
import React, { useEffect, useState } from 'react';

// Components
import AboutMe from 'Components/AboutMe';
import Home from 'Components/Home';
import Navbar from 'Components/Navbar';
import Tecnologies from 'Components/Tecnologies';
import Projects from 'Components/Projects';
import Testimonials from 'Components/Testimonials';
import Contact from 'Components/Contact';

const Porfolio = () => {

    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const container = document.querySelector('#container');
        const observers = document.querySelectorAll('.intersection');

        const options = {
            root: container,
            rootMargin: `0px 0px -${container.clientHeight - 80}px 0px`,
            // threshold: 0.5
        };

        const handleIntersectionEvente = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setSelected(parseInt(entry.target.dataset.id));
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersectionEvente, options);

        observers.forEach(element => observer.observe(element));

        // return () => {
        //     observers.forEach(element => observer.unobserve(element));
        // };

    }, []);

    return (
        <>
            <Navbar selected={selected}/>
            <div id="container" >
                <Home />
                <AboutMe />
                <Tecnologies />
                <Projects />
                <Testimonials />
                <Contact />
            </div>
        </>
    );
};

export default Porfolio;