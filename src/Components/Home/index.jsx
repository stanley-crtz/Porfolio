// Modules
import React from 'react';

// Images
import Avatar from 'Styles/Images/Avatar.png';

// Styles
import Styles from './Home.module.css';

const Home = () => {
    return (
        <section className={[Styles.container].join(' ')}>
            <div className="intersection home" data-id="0"></div>
            <div className={Styles.information}>
                <label>Hola, soy</label>
                <h1>Johansson Rodríguez</h1>
                <label>desarrollador web</label>
            </div>
            <img alt="Avatar" src={Avatar} />
        </section>
    );
};

export default Home;