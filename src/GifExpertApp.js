import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   const [categories, setcategories] = useState( [ 'Rick and Morty' ] );

//    const handleAdd = () => {
//         setcategories( [...categories, 'HunterxHunter'] );
//    }

    return (

        <>
            <h2>GifExpertApp</h2>

            <AddCategory setcategories = { setcategories } />

            <hr />

            <ol>
                { 
                    categories.map( category => <GifGrid category = { category } key = { category } /> )
                }
            </ol>
        </>

    );

}
