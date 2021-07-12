import React from 'react';
import axios from 'axios'

import Card from './components/Card/Card'
import Header from './components/Header';
import Drawer from './components/Drawer'


function App() { 
  const [sneakers, setSneakers] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [price, setPrice] = React.useState(0)

  React.useEffect(() => {
    axios.get('https://60e9f2995dd7ff0017b39725.mockapi.io/items').then((res) => {
      setSneakers(res.data);
    })

    axios.get('https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInCart').then((res) => {
      setCartItems(res.data);
    })
  }, [])
  
  const onChangeSeacrhInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onAddToCart = (obj) => {
    axios.post('https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInCart', obj)
    setCartItems(prev => [...prev,  obj])
    setPrice(prev => prev + obj.price)
  }

  const onRemoveFromCart = (id) => {
    axios.delete(`https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInCart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer 
                        items={cartItems}
                        onClose={() => setCartOpened(false)} 
                        price={price}
                        onRemove={onRemoveFromCart}
                      />
      }


      < Header onClickCart={() => setCartOpened(true)} price={price}/>
    
      <div className="content p-40">
        <div className="d-flex justify-between flex-wrap mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search d-flex align-center">
            <img className='mr-10' src="/img/search.svg" alt="search" />
            <input onChange={onChangeSeacrhInput} value={searchValue} type="text" placeholder='Поиск...'/>
          </div>
        </div>
        <div className='card-wrap'>
          {sneakers
            .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj) => (
              < Card 
                key={obj.id}
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
