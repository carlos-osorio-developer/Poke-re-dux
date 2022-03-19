import { Route, Routes } from 'react-router-dom';
import Header from './pages/home/header';
import PokemonList from './pages/home/pokemonList';
import FavList from './pages/favorites/favList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/favorites" element={<FavList />} />
      </Routes>
    </div>
  );
}

export default App;
