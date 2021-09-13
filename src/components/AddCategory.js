import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories, ...props }) => {
    const [inputValue, setImputValue] = useState('');

    const handleInputChange = (e) => {
        setImputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories((cats) => [inputValue, ...cats]);
            setImputValue('');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
