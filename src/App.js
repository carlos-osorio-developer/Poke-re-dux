import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import PokemonList from './components/pokemonList';

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
