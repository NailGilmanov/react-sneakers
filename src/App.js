import Card from './components/Card/Card'
import Header from './components/Header';
import Drawer from './components/Drawer'


const arr = [
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: '/img/1.jpg' },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 15600, img: '/img/2.jpg' },
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 84999, img: '/img/3.jpg' },
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, img: '/img/4.jpg' },
  { name: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, img: '/img/5.jpg' },
  { name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, img: '/img/6.jpg' },
  { name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, img: '/img/7.jpg' },
  { name: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, img: '/img/8.jpg' },
  { name: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, img: '/img/9.jpg' },
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, img: '/img/1.jpg' },
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, img: '/img/4.jpg' },
  { name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 12299, img: '/img/10.jpg' }
]


function App() {

  return (
    <div className="wrapper clear">
      <Drawer />

      < Header />
    
      <div className="content p-40">
        <div className="d-flex justify-between flex-wrap mb-40">
          <h1>Все кроссовки.</h1>
          <div className="search d-flex align-center">
            <img className='mr-10' src="/img/search.svg" alt="search" />
            <input type="text" placeholder='Поиск...'/>
          </div>
        </div>
        <div className='card-wrap'>
          {arr.map((obj) => (
            < Card 
              name={obj.name}
              price={obj.price}
              img={obj.img}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
