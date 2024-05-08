import React from 'react';
function PlaceCategory ({Favorites}){
    console.log(Favorites);
    return (
        <div>
            <h2>{Favorites.placeName}</h2>
            <p>NOOO</p>
        </div>
    )
}
export default PlaceCategory;