import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

   const [categories, setcategories] = useState( [ 'One Punch', 'Samurai X', 'Dragon Ball' ] );

//    const handleAdd = () => {
//         setcategories( [...categories, 'HunterxHunter'] );
//    }

    return (

        <>
            <h2>GifExpertApp</h2>

            <AddCategory setcategories = { setcategories } />

            <hr />

            <ol>
                { categories.map( category => <li key = { category }>{ category }</li> ) }
            </ol>
        </>

    );

}
