import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import style from './pokemonCard.module.css';

const PokemonCard = (props) => {
  const { pokeName, image, type } = props;

  return (
    <Card className={style.PokemonCard}>
      <Card.Img className="w-50 m-auto" variant="top" src={image} alt={pokeName} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-around">
          {pokeName.replace(/^\w/, (c) => c.toUpperCase())}
          <button type="button" className={style.PokemonCardFavorite}>
            <FaHeart />
          </button>
        </Card.Title>
        <Card.Text>
          Holaaa
        </Card.Text>
        <Badge bg="info">{type}</Badge>
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
