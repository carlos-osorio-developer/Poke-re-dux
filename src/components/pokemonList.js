import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from './pokemonCard';
import SearchBar from './searchBar';
import { getPokemons } from '../redux/slices/pokemonListSlice';

const PokemonList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const pokemons = useSelector((state) => state.pokeState.pokemons) || [];

  return (
    <div>
      <SearchBar />
      <div className="container">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokeName={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
