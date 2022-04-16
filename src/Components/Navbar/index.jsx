// Modules
import { Drawer } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Images or Icons
import TerminalIcon from 'Styles/Images/terminal.ico';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Styles
import Styles from './Navbar.module.css';

const Navbar = ({selected}) => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [isDownScroll, setIsDownScroll] = useState(false);

    const handleChangeStateDrawer = () => setOpenDrawer(!openDrawer);

    const handleScrollBehavior = (id, hiddenDrawer) => {

        const observers = document.querySelectorAll('.intersection');

        observers[id].scrollIntoView({behavior: 'smooth'});
        if(hiddenDrawer) {
            handleChangeStateDrawer();
        }
    };


    useEffect(() => {

        const root = document.querySelector('#container');

        root.addEventListener('scroll', () => {
            if (root.scrollTop > 10 && !isDownScroll) {
                setIsDownScroll(true);
            }
            else if (root.scrollTop <= 10) {
                setIsDownScroll(false);
            }
        });

        return () => {
            root.removeEventListener('scroll', () => {});
        };

    }, []);

    return (
        <nav className={[Styles.container, isDownScroll && Styles.background].join(' ')}>
            <img
                alt="Icon"
                src={TerminalIcon}
                className={Styles.Icon}
            />
            <div className={Styles.desktop}>
                <ul className={Styles.items}>
                    <li onClick={() => handleScrollBehavior(0, false)} data-id="0" className={[Styles.item, selected === 0 && Styles.active_item].join(' ')}>Inicio</li>
                    <li onClick={() => handleScrollBehavior(1, false)} data-id="1" className={[Styles.item, selected === 1 && Styles.active_item].join(' ')}>Sobre mí</li>
                    <li onClick={() => handleScrollBehavior(2, false)} data-id="2" className={[Styles.item, selected === 2 && Styles.active_item].join(' ')}>Tecnologías</li>
                    <li onClick={() => handleScrollBehavior(3, false)} data-id="3" className={[Styles.item, selected === 3 && Styles.active_item].join(' ')}>Proyectos</li>
                    <li onClick={() => handleScrollBehavior(4, false)} data-id="4" className={[Styles.item, selected === 4 && Styles.active_item].join(' ')}>Contacto</li>
                </ul>
            </div>
            <div className={Styles.mobile}>
                <MenuIcon onClick={handleChangeStateDrawer} />
                <Drawer
                    anchor="right"
                    open={openDrawer}
                    onClose={handleChangeStateDrawer}
                    classes={{paper: Styles.drawerPaper}}
                >
                    <div className={Styles.contentDrawer}>
                        <header>
                            <CloseIcon onClick={handleChangeStateDrawer} />
                        </header>
                        <ul className={Styles.items}>
                            <li onClick={() => handleScrollBehavior(0, true)} data-id="0" className={[Styles.item, selected === 0 && Styles.active_item].join(' ')}>Inicio</li>
                            <li onClick={() => handleScrollBehavior(1, true)} data-id="1" className={[Styles.item, selected === 1 && Styles.active_item].join(' ')}>Sobre mí</li>
                            <li onClick={() => handleScrollBehavior(2, true)} data-id="2" className={[Styles.item, selected === 2 && Styles.active_item].join(' ')}>Tecnologías</li>
                            <li onClick={() => handleScrollBehavior(3, true)} data-id="3" className={[Styles.item, selected === 3 && Styles.active_item].join(' ')}>Proyectos</li>
                            <li onClick={() => handleScrollBehavior(4, true)} data-id="4" className={[Styles.item, selected === 4 && Styles.active_item].join(' ')}>Contacto</li>
                        </ul>
                    </div>
                </Drawer>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    selected: PropTypes.number
};

export default Navbar;