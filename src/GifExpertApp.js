import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Sanurai x', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Hola!']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <h4>Ingresa palabras para buscar gif...</h4>
            <AddCategory setCategories={setCategories} />

            <hr />

            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </div>
    );
};

export default GifExpertApp;
