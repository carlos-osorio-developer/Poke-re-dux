import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import PokemonCard from './pokemonCard';
import SearchBar from './searchBar';
import Loader from './loader';
import { getPokemons } from '../../redux/slices/pokemonListSlice';

const PokemonList = () => {
  const pokemons = useSelector((state) => state.pokeState.pokemons) || [];
  const loading = useSelector((state) => state.pokeState.loading) || false;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemons.length) {
      dispatch(getPokemons());
    }
  }, []);

  return (
    <div>
      <SearchBar />
      { loading && <Loader /> }
      <Container className="mt-1 d-flex flex-wrap justify-content-center z-index-1">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            pokeName={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
          />
        ))}
      </Container>
    </div>
  );
};

export default PokemonList;
