import React from 'react';
import { Link } from 'react-router-dom';

import MediaQuery from "react-responsive";

import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logotype" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <MediaQuery minWidth={920}>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
            <span>{totalPrice} руб.</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to="/favorites">
              <img width={18} height={18} src="img/favorite.svg" alt="Закладки" />
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <img width={18} height={18} src="img/Union.svg" alt="Пользователь" />
            </Link>
          </li>
        </ul>
      </MediaQuery>
    </header>
  );
}

export default Header;