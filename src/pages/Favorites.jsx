import React  from 'react';

import Card from '../components/Card/Card'
import AppContext from '../context';

function Favorites({ onAddToFavorite, onAddToCart }) {
    const { favorite } = React.useContext(AppContext)

    return (
        <div className="content p-40">
            <div className="d-flex justify-between flex-wrap mb-40">
                <h1>Мои закладки.</h1>
            </div>
            <div className='card-wrap'>
                {favorite.map((obj) => (
                        < Card 
                            key={obj.id}
                            name={obj.name}
                            price={obj.price}
                            img={obj.img}
                            favorited={true}
                            onPlus={onAddToCart}
                            onFavorite={onAddToFavorite}
                            id={obj.id}
                        />
                ))}
            </div>
        </div>
    )
}

export default Favorites;