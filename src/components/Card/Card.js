import React from 'react';
import styles from "./Card.module.scss"

console.log(styles)

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/unlike.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src={props.img} alt="sneakers" />
            <h5>{props.name}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className={styles.button} onClick={props.onClick}>
                    <img src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    )
}

export default Card;