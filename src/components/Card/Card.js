import React from 'react';
import styles from "./Card.module.scss"

function Card({ name, price, img, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const handleClick = () => {
        onPlus({ name, price, img });
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/unlike.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src={img} alt="sneakers" />
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
        </div>
    )
}

export default Card;