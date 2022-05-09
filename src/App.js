import { Link, Route } from 'wouter';
import { Home } from 'pages/Home';
import { SearchResult } from 'pages/SearchResult';
import { Detail } from 'pages/Detail';
import { CurrentGifContextProvider } from './contexts/CurrentGifContext';

function App() {
  return (
    <div className=''>
      <CurrentGifContextProvider>
        <Link to='/'>
          <h1 className='mb-4 text-4xl text-center text-white font-bold  
            bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text'>
            Giffy
          </h1>
        </Link>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/search/:keyword'>
          {params => <SearchResult keyword={params.keyword} />}
        </Route>
        <Route path='/gif/:id'>
          <Detail />
        </Route>
      </CurrentGifContextProvider>
    </div>
  );
}

export default App;
