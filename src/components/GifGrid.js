import React from 'react';
import PropTypes from 'prop-types';
import GiftGridItem from './GiftGridItem';

import '../index.css';
import { useFetchGisfs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGisfs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                {images.map((img) => (
                    <GiftGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;
