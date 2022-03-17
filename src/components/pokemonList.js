import { React, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from './pokemonCard';
import { getPokemons } from '../redux/slices/pokemonListSlice';

const PokemonList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const pokemons = useSelector((state) => state.pokeState.pokemons) || [];

  return (
    <Grid className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokeName={pokemon.name}
          image={pokemon.image}
          type={pokemon.type}
        />
      ))}
    </Grid>
  );
};

export default PokemonList;
