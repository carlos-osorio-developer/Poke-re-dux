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

  let id = 0;

  return (
    <Grid className="PokemonList">
      {pokemons.map((pokemon) => {
        id += 1;
        return <PokemonCard key={id} pokemon={pokemon} />;
      })}
    </Grid>
  );
};

export default PokemonList;
