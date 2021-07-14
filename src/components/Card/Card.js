import React from 'react';
import styles from "./Card.module.scss"

import ContentLoader from "react-content-loader"

function Card({ 
    id,
    name, 
    price, 
    img, 
    onFavorite, 
    onPlus, 
    favorited = false, 
    added = false, 
    loading = false 
}) {
    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const handleClick = () => {
        onPlus({ name, price, img, id });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite({ name, price, img, id });
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            {
                loading ? (<><ContentLoader 
                        speed={2}
                        width={600}
                        height={265}
                        viewBox="0 0 600 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="155" /> 
                        <rect x="287" y="289" rx="0" ry="0" width="4" height="1" /> 
                        <rect x="0" y="170" rx="5" ry="5" width="150" height="15" /> 
                        <rect x="0" y="197" rx="5" ry="5" width="100" height="15" /> 
                        <rect x="4" y="234" rx="5" ry="5" width="80" height="25" /> 
                        <rect x="112" y="230" rx="10" ry="10" width="32" height="32" />
                    </ContentLoader></>) : (<>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? "/img/like.svg" : "/img/unlike.svg"} alt="unliked" />
                    </div>
                    <img width="100%" height={140} src={img} alt="sneakers" />
                    <h5>{name}</h5>
                    <div className='d-flex justify-between align-center'>
                        <div className='d-flex flex-column'>
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        <img 
                            className={styles.button}
                            onClick={handleClick}
                            src={isAdded ? "/img/goToCard_active.svg" : "/img/goToCard_disabled.svg"}
                            alt="plus" 
                        />
                    </div>
                </>)
            }
        </div>
    )
}

export default Card;