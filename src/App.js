import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Details } from './components/Details/Details';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';
import { SearchTrending } from './components/Trending/SearchTrending';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchTrending />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:media/:id' element={<Details />} />



      </Routes>
      

      
     
    </div>
  );
}

export default App;
