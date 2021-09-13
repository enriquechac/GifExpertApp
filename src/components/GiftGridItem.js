import React from 'react';
import PropTypes from 'prop-types';

import '../index.css';

const GiftGridItem = ({ id, title, url }) => {
    return (
        <div className="card animate__animated animate__zoomInLeft">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

GiftGridItem.propTypes = {
    id: PropTypes.string,
};

export default GiftGridItem;
