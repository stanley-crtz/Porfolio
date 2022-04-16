// Modules
import React from 'react';

// Images
import Me from 'Styles/Images/me.jpeg';

// Styles
import Styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <section className={[Styles.section, ''].join(' ')}>
            <h2 className="intersection" data-id="1">Sobre mí</h2>
            <div className={Styles.container}>
                
                <div className={Styles.img}>
                    <img
                        alt="Johansson Stanley Rodríguez Cortez"
                        src={Me}
                    />
                </div>
                <div className={Styles.information}>
                    <p>Hola!, mi nombre es Johansson Stanley Rodriguez Cortez.</p>
                    <p>Soy un programador autodidacta y actualmente me especializo en el campo del desarrollo web.</p>
                    <p>Me gusta mucho practicar deportes, sobre todo el futbol, mi puesto en este deporte es el de portero, y también me gusta tocar la guitarra. Aunque la mayor parte del tiempo lo dedico a investigar nuevas tecnologías que puedo aprender.</p>
                    <p>Soy un poco tímido con gente que no conozco, pero si se trata de trabajo en equipo, no tengo miedo de tomar la iniciativa, tanto si la situación lo amerita como si se me ha confiado el puesto de líder de equipo.</p>

                    <p>Mi objetivo profesional sería apoyar a una gran empresa en el campo del desarrollo.</p>
                </div>
                
            </div>
        </section>
    );
};

export default AboutMe;