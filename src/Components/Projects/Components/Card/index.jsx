// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import Styles from './Card.module.css';

const Card = React.memo( function Card ({title, description, img, chips}) {
    return (
        <article className={Styles.article}>
            <img
                alt={title}
                src={img}
            />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={Styles.chips}>
                {
                    chips.map((chip, index) => (
                        <div key={`chipd_${chip}_title_${title}_${index}`}>
                            <label>{chip}</label>
                        </div>
                    ))
                }
            </div>
        </article>
    );
}, );

Card.propTypes = {
    chips: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;