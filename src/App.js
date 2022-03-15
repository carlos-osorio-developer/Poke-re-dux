import Header from './components/header';
import PokemonList from './components/pokemonList';
import SearchBar from './components/searchBar';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <PokemonList />
    </div>
  );
}

export default App;
