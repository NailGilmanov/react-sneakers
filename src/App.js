import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer'
import { Route } from 'react-router-dom';
import AppContext from './context';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() { 
  const [sneakers, setSneakers] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorite, setFavorites] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [price, setPrice] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() { 
      const cartResponse = await axios.get('https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInCart')
      const favoriteResponse = await axios.get('https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInFavorite')
      const itemsResponse = await axios.get('https://60e9f2995dd7ff0017b39725.mockapi.io/items')
      
      setIsLoading(false); 

      setCartItems(cartResponse.data);
      setFavorites(favoriteResponse.data);
      setSneakers(itemsResponse.data);
    }

    fetchData();
  }, [])

  

  const onChangeSeacrhInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => obj.id === item.id)) {
      axios.delete(`https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInCart/${obj.id}`);
      setCartItems(prev => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post('https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInCart', obj)
      setCartItems(prev => [...prev,  obj])
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorite.find((item) => item.id === obj.id)) {
        axios.delete(`https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInFavorite/${obj.id}`);
        setFavorites(prev => prev.filter((item) => item.id !== obj.id));
      } else {
        axios.post('https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInFavorite', obj);
        setFavorites(prev => [...prev,  obj]);
      }
    } catch (error) {
      alert('ADD ERROR');
    }
  }

  const onRemoveFromCart = (obj) => {
    axios.delete(`https://60e9f2995dd7ff0017b39725.mockapi.io/itemsInCart/${obj.id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
  }

  const isItemAdded = (id) => {
     return cartItems.some(item => id === item.id)
  }

  return ( 
    <AppContext.Provider value={{ sneakers, cartItems, favorite, isItemAdded }}> 
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
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSeacrhInput={onChangeSeacrhInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
          />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
