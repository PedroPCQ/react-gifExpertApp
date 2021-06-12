import React, { useState } from 'react'
import propTypes from 'prop-types';

export const AddCategory = ( { setcategories } ) => {

    const [ inputValue, seTinputValue ] = useState( '' );

    const handleInputChange = ( event ) => {

        seTinputValue( event.target.value );

    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if ( inputValue.trim().length >= 2 ) {

            setcategories( categories => [ ...categories, inputValue ] );

            seTinputValue( '' );

        }
    }

    return (

        <form onSubmit = { handleSubmit }>
            <input
                type = "text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>

    );

}

AddCategory.propTypes = {
    setcategories: propTypes.func.isRequired
}
