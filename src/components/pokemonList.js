import { Grid } from 'semantic-ui-react';
import PokemonCard from './pokemonCard';

const PokemonList = () => {
  const pokemons = Array(10).fill('');
  return (
    <Grid className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonList;
