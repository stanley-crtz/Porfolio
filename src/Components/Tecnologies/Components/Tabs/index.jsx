// Modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import Styles from './Tabs.module.css';

const Tabs = ({headers, items}) => {

    const [itemSelect, setItemSelect] = useState(0);

    const handleClickTitle = (index) => setItemSelect(index);

    return (
        <div className={Styles.container}>
            <aside className={Styles.sidebar}>
                <ul>
                    {
                        headers.map((title, i) => (
                            <li 
                                key={`tabs_key_${title}_${i}`}
                                onClick={() => handleClickTitle(i)}
                                className={itemSelect === i && Styles.active}
                            >
                                {title}
                            </li>
                        ))
                    }
                </ul>
            </aside>
            <div className={Styles.recurses}>
                {
                    [...items[itemSelect]].map((item, key) => (
                        <div className={Styles.card} key={`card_${key}`}>
                            <img
                                alt={item.title}
                                src={item.img}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

Tabs.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string),
    items: PropTypes.arrayOf(PropTypes.array),
};

Tabs.defaultProps = {
    headers: [],
    items: [[]]
};

export default Tabs;