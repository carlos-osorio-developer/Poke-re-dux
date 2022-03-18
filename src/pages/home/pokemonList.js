import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import PokemonCard from './pokemonCard';
import SearchBar from './searchBar';
import { getPokemons } from '../redux/slices/pokemonListSlice';

const PokemonList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const pokemons = useSelector((state) => state.pokeState.pokemons) || [];
  const loading = useSelector((state) => state.pokeState.loading);

  return (
    <div>
      <SearchBar />
      <Container className="mt-1 d-flex flex-wrap justify-content-center z-index-1">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
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
