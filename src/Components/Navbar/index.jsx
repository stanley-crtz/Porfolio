// Modules
import { Drawer } from '@mui/material';
import React, { useState } from 'react';

// Images or Icons
import TerminalIcon from 'Styles/Images/terminal.ico';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Styles
import Styles from './Navbar.module.css';

const Navbar = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChangeStateDrawer = () => setOpenDrawer(!openDrawer);

    return (
        <nav className={Styles.container}>
            <img
                alt="Icon"
                src={TerminalIcon}
                className={Styles.Icon}
            />
            <div className={Styles.desktop}>
                <ul className={Styles.items}>
                    <li className={[Styles.item, Styles.active_item].join(' ')}>Home</li>
                    <li className={Styles.item}>About</li>
                    <li className={Styles.item}>Tecnologies</li>
                    <li className={Styles.item}>Projects</li>
                    <li className={Styles.item}>Contact</li>
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
                            <li className={[Styles.item, Styles.active_item].join(' ')}>Home</li>
                            <li className={Styles.item}>About</li>
                            <li className={Styles.item}>Tecnologies</li>
                            <li className={Styles.item}>Projects</li>
                            <li className={Styles.item}>Contact</li>
                        </ul>
                    </div>
                </Drawer>
            </div>
        </nav>
    );
};

export default Navbar;