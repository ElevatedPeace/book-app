import React from 'react'
import '../App.css'
import { useAppContext } from '../context/AppContext';

const Favorite = () => {

  const { favorite, addToFavorite, removeFromFavorite } = useAppContext();
  console.log('favorites are', favorite);

  const favoriteChecker = (id) => {
    const boolean = favorite.some((book) => book.id === id);

  return boolean;
  }


  return (
    <div className='favorite'>
     {favorite.length > 0 ? favorite.map((book) => (
      <div key={book.id} className="book">
        <div> 
          <h4> {book.title} </h4>
          </div>
          <div>
           <img src= {book.image_url} alt="#" /> 
          </div>
          <div> 
            {favoriteChecker(book.id) ? ( 
            <button onClick={() => removeFromFavorite(book.id)}> Remove From Favorites </button> 
            ) : (
          <button onClick={() => addToFavorite(book)}> Add to Favorites </button>
            )}
  
          </div>
      </div>
     )) : <h1> you dont have any favorite book yet</h1>}
    </div>
  )
}

export default Favorite;
