import React, { useState } from 'react';

export const GifExpertApp = () => {

   // const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball' ];

   const [categories, setcategories] = useState( [ 'One Punch', 'Samurai X', 'Dragon Ball' ] );

   const handleAdd = () => {
        setcategories( [...categories, 'HunterxHunter'] );
   }

    return (

        <>
            <h2>GifExpertApp</h2>

            <hr />

            <button onClick={ handleAdd }>Agregar categoría</button>

            <ol>
                { categories.map( category => <li key ={ category }>{ category }</li> ) }
            </ol>
        </>

    );

}
