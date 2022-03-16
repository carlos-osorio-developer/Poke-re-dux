import { React, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import PokemonCard from './pokemonCard';
import { getPokemons } from '../redux/slices/pokemonListSlice';

const PokemonList = () => {
  const dispatch = useDispatch();

  const pokemons = Array(10).fill('');
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <Grid className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonList;
