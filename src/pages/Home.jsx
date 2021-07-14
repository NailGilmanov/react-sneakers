import React from 'react'
import Card from '../components/Card/Card'
import AppContext from '../context'

function Home({sneakers,
    cartItems,
    searchValue,
    onChangeSeacrhInput,
    onAddToFavorite,
    onAddToCart,
    isLoading
}) {

    const { isItemAdded } = React.useContext(AppContext);

    const renderItems = () => {
        return (
            isLoading
                ? [...Array(10)]
                : sneakers.filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
        ).map((obj, index) => (
            < Card
                key={index}
                onFavorite={onAddToFavorite}
                onPlus={onAddToCart}
                loading={isLoading}
                {...obj}
            />
        ))
    }


    return (
        <div className="content p-40">
            <div className="d-flex justify-between flex-wrap mb-40">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                <div className="search d-flex align-center">
                    <img className='mr-10' src="/img/search.svg" alt="search" />
                    <input onChange={onChangeSeacrhInput} value={searchValue} type="text" placeholder='Поиск...'/>
                </div>
            </div>
                <div className='card-wrap'>
                    {renderItems()}
                </div>
        </div>
    )
}

export default Home;