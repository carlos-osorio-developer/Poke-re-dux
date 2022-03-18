import { Route, Routes } from 'react-router-dom';
import Header from './pages/home/header';
import PokemonList from './pages/home/pokemonList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/favorites" element={<PokemonList />} />
      </Routes>
    </div>
  );
}

export default App;
