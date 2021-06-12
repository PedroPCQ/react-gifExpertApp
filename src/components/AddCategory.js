import React, { useState } from 'react'

export const AddCategory = () => {

    const [ inputValue, seTinputValue ] = useState( 'Hola Mundo' );

    const handleInputChange = ( event ) => {

        seTinputValue( event.target.value );

    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        console.log( 'submit hecho' );
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
