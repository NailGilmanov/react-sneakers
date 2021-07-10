import React from 'react';

import Card from './components/Card/Card'
import Header from './components/Header';
import Drawer from './components/Drawer'


function App() { 
  const [sneakers, setSneakers] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://60e9f2995dd7ff0017b39725.mockapi.io/items').then((res) => {
      return res.json()
    }).then((json) => {
      setSneakers(json)
    })
  }, [])
  
  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev,  obj])
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}

      < Header onClickCart={() => setCartOpened(true)}/>
    
      <div className="content p-40">
        <div className="d-flex justify-between flex-wrap mb-40">
          <h1>Все кроссовки.</h1>
          <div className="search d-flex align-center">
            <img className='mr-10' src="/img/search.svg" alt="search" />
            <input type="text" placeholder='Поиск...'/>
          </div>
        </div>
        <div className='card-wrap'>
          {sneakers.map((obj) => (
            < Card 
              name={obj.name}
              price={obj.price}
              img={obj.img}
              onFavorite={() => console.log('Добавлено в Закладки')}
              onPlus={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
