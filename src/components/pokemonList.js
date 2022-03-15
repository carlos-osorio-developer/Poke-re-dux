import { React, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import PokemonCard from './pokemonCard';
import getPokemons from '../redux/slices/pokemonListSlice';

const PokemonList = () => {
  const pokemons = Array(10).fill('');
  useEffect(() => {
    getPokemons(151).then((res) => { console.log(res); });
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
