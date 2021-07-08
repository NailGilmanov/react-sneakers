import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer'


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

          < Card />

          < Card />
          
          < Card />
          
          < Card />
          
          < Card />
          
          < Card />
          
          < Card />
          
          < Card />
          
          < Card />
          
          < Card />
          
          < Card />
          
          < Card />  

        </div>
      </div>
    </div>
  );
}

export default App;
