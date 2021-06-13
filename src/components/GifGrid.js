import React, { useState, useEffect } from 'react'

export const GifGrid = ( { category } ) => {

    const [ count, seTcount ] = useState( 0 );

    useEffect( () => {

        getGifs();

    }, [] );

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=xOl5x5DGg0UKa5dZCyAg75upR7zBOqC9';

        const response = await fetch( url );

        const { data } = await response.json();

        const gifs = data.map( img => {

            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        } );

        console.log( gifs );

    }

    // getGifs();

    return (
        <div>
            <h3>{ category }</h3>
            <h3>{ count }</h3>

            <button onClick = { () => seTcount( count + 1 ) } />
        </div>
    );
}
