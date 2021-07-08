import React from 'react'

function Drawer(props) {
    return (
        <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">
          <div className="d-flex align-center justify-between mb-30">
            <h2>Корзина</h2>
            <img className='removeBtn' src="/img/btn-remove-active.svg" alt="btn-remove" />
          </div>
          <div className="cartWrap">
            <div className="cartItem d-flex mb-20">
              <img className='mr-15' width={70} height={70} src="/img/1.jpg" alt="sneakers" />
              <div className="cartItem-content">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='removeBtn' src="/img/btn-remove-active.svg" alt="btn-remove" />
            </div>

            <div className="cartItem d-flex mb-20">
              <img className='mr-15' width={70} height={70} src="/img/1.jpg" alt="sneakers" />
              <div className="cartItem-content">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='removeBtn' src="/img/btn-remove-active.svg" alt="btn-remove" />
            </div>
          </div>

          <div className="cartTotalModal">
            <ul>
              <li className='mb-20'>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className='mb-20'>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button>Оформить заказ</button>
          </div>

        </div>
      </div>
    )
}

export default Drawer;