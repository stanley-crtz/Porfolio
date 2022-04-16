// Modules
import React from 'react';
import PropTypes from 'prop-types';

// Styles 
import Styles from './Card.module.css';

const Card = React.memo( function Card({name, profile, job, testimonial}) {
    return (
        <div className={Styles.Card}>
            <img
                alt={name}
                src={profile}
            />
            <div className={Styles.information}>
                <label>{name}</label>
                <label>{job}</label>
            </div>
            <div className={Styles.reference}>
                <label>{testimonial}</label>
            </div>
        </div>
    );
});

Card.propTypes = {
    job: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
};

export default Card;