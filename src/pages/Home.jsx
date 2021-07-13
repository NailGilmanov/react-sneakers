import Card from '../components/Card/Card'

function Home({sneakers,
    searchValue,
    onChangeSeacrhInput,
    onAddToFavorite,
    onAddToCart
}) {
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
                    {sneakers
                        .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((obj) => (
                            < Card 
                                key={obj.id}
                                name={obj.name}
                                price={obj.price}
                                img={obj.img}
                                onFavorite={onAddToFavorite}
                                onPlus={onAddToCart}
                                favorited={false}
                            />
                    ))}
                </div>
        </div>
    )
}

export default Home;