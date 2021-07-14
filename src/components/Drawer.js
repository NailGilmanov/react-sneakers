import React from 'react'
import Info from './Info';

function Drawer({items=[], onClose, price, onRemove}) {
    const [isOrderCompleted, setOrderIsCompleted] = React.useState(false);

    const onClickOrder = () => {
      setOrderIsCompleted(true)
    }

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
                  <div key={obj.id} className="cartItem d-flex mb-20" key={obj.id}>
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
                <button onClick={onClickOrder} className="greenButton">Оформить заказ</button>
              </div>
            </> 
              
              : 
          
            <Info 
              onClick={onClose} 
              title='Корзина пустая' 
              image='/img/empty-cart.png' 
              description='Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            />
          }

        </div>
      </div>
    )
}

export default Drawer;