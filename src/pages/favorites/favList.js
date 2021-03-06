import { React } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import PokemonCard from '../home/pokemonCard';

const FavList = () => {
  const pokemons = useSelector((state) => state.favState.pokemons);

  return (
    <div style={{ marginTop: '100px' }}>
      <Container className="d-flex flex-wrap justify-content-center z-index-1">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            pokeName={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
            fav
          />
        ))}
      </Container>
    </div>
  );
};

export default FavList;
