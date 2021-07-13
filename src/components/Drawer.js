import React from 'react'

function Drawer({items=[], onClose, price, onRemove}) {
    return (
        <div className="overlay">
        <div className="drawer">
          <div className="d-flex align-center justify-between mb-30">
            <h2>Корзина</h2>
            <img onClick={onClose} className='removeBtn' src="/img/btn-remove-active.svg" alt="btn-remove" />
          </div>

          {
            items.length > 0  ? 
            <>
              <div className="cartWrap">
                {items.map((obj) => (
                  <div className="cartItem d-flex mb-20" key={obj.id}>
                    <img className='mr-15' width={70} height={70} src={obj.img} alt="sneakers" />
                    <div className="cartItem-content">
                      <p>{obj.name}</p>
                      <b>{obj.price}</b>
                    </div>
                    <img className='removeBtn' onClick={() => onRemove(obj)} src="/img/btn-remove-active.svg" alt="btn-remove" />
                  </div>
                ))}
              </div>

              <div className="cartTotalModal">
                <ul>
                  <li className='mb-20'>
                    <span>Итого:</span>
                    <div></div>
                    <b>{price} руб.</b>
                  </li>
                  <li className='mb-20'>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>{Math.round(price * 0.95)} руб.</b>
                  </li>
                </ul>
                <button className="greenButton">Оформить заказ</button>
              </div>
            </> 
              
              : 
          
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img className='mb-20' width={120} height={120} src="/img/empty-cart.png" alt="empty" />
              <h2>Корзина пустая</h2>
              <p className='opacity-6'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button className="greenButton" onClick={onClose}>
                Вернуться назад.
              </button>
            </div>
          }

        </div>
      </div>
    )
}

export default Drawer;