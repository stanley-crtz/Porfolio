// Modules
import React from 'react';

// Images
import TerminalIcon from 'Styles/Images/terminal.ico';

// Styles
import Styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={Styles.container}>
            <img
                alt="Icon"
                src={TerminalIcon}
                className={Styles.Icon}
            />
            <ul className={Styles.items}>
                <li className={[Styles.item, Styles.active_item].join(' ')}>Home</li>
                <li className={Styles.item}>About</li>
                <li className={Styles.item}>Tecnologies</li>
                <li className={Styles.item}>Projects</li>
                <li className={Styles.item}>Contact</li>
            </ul>
        </header>
    );
};

export default Navbar;