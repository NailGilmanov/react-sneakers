import React from 'react';

function Header(props) {
    return (
        <header className='d-flex justify-between align-center'>
        <div className='d-flex align-center'> 
          <img src="/img/logo.png" width={40} height={40} alt="logo" />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30 cu-p' onClick={props.onClickCart}>
            <img src="/img/cart.svg" width={18} height={18} alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/favorite.svg" width={18} height={18} alt="favorite" />
          </li>
          <li>
            <img src="/img/Union.svg" width={18} height={18} alt="profile" />
          </li>
        </ul>
      </header>
    )
}

export default Header;