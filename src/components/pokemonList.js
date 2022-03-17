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
      {pokemons.map((pokemon) => {
        const id = pokemon.url.split('/')[6];
        console.log('the id', id);
        return <PokemonCard key={id} pokeName={pokemon.name} />;
      })}
    </Grid>
  );
};

export default PokemonList;
