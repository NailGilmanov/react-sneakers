import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer'
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() { 
  const [sneakers, setSneakers] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorite, setFavorites] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [price, setPrice] = React.useState(0)

  React.useEffect(() => {
    axios.get('https://60e9f2995dd7ff0017b39725.mockapi.io/items').then((res) => {
      setSneakers(res.data);
    })

    axios.get('https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInCart').then((res) => {
      setCartItems(res.data);
      res.data.map((item) => setPrice(prev => prev + item.price))
    })

    axios.get('https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInFavorite').then((res) => {
      setFavorites(res.data);
    })
  }, [])

  const onChangeSeacrhInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => obj.id === item.id)) {
      axios.delete(`https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInCart/${obj.id}`);
      setCartItems(prev => prev.filter((item) => item.id !== obj.id));
      setPrice(prev => prev - obj.price)
    } else {
      axios.post('https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInCart', obj)
      setCartItems(prev => [...prev,  obj])
      setPrice(prev => prev + obj.price)
    }
  }

  const onAddToFavorite = (obj) => {
    if (favorite.find((item) => item.id === obj.id)) {
      axios.delete(`https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInFavorite/${obj.id}`);
      setFavorites(prev => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post('https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInFavorite', obj);
      setFavorites(prev => [...prev,  obj]);
    }
  }

  const onRemoveFromCart = (obj) => {
    axios.delete(`https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInCart/${obj.id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    setPrice(prev => prev - obj.price);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && 
        <Drawer 
          items={cartItems}
          onClose={() => setCartOpened(false)} 
          price={price}
          onRemove={onRemoveFromCart}
        />
      }

      < Header onClickCart={() => setCartOpened(true)} price={price}/>

      <Route path="/" exact>
        <Home 
          sneakers={sneakers}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSeacrhInput={onChangeSeacrhInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites 
          items={favorite} 
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
    </div>
  );
}

export default App;
