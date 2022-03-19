import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import style from './pokemonCard.module.css';
import { saveFavorite, deleteFavorite } from '../../redux/slices/favoritesSlice';

const PokemonCard = (props) => {
  const dispatch = useDispatch();
  const { pokeName, image, type } = props;

  const [favorite, setFavorite] = useState(false);
  const favColor = favorite ? 'red' : 'black';

  const favToggle = () => {
    const favPokemon = { name: pokeName, image, type };
    if (favorite) {
      dispatch(deleteFavorite(favPokemon));
    } else {
      dispatch(saveFavorite(favPokemon));
    }
    setFavorite(!favorite);
  };

  return (
    <Card className={style.PokemonCard}>
      <div className={style.fixedHeigth1}>
        <Card.Img className="h-100 m-auto" variant="top" src={image} alt={pokeName} />
      </div>
      <Card.Body className="d-flex flex-column align-items-center p-0">
        <Container className="d-flex flex-column justify-content-center text-capitalize w-100">
          <span className={style.smallText}>{pokeName}</span>
          <Badge bg="success" className="w-50 m-auto">{type}</Badge>
        </Container>
        <Button variant="warning" className="w-50 mt-4" onClick={favToggle}>
          <FaHeart style={{ fill: favColor }} />
        </Button>
      </Card.Body>
    </Card>
  );
};

PokemonCard.propTypes = {
  pokeName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default PokemonCard;
