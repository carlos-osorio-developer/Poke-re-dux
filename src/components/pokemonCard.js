import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import style from './pokemonCard.module.css';

const PokemonCard = (props) => {
  const { pokeName, image, type } = props;

  return (
    <Card className={style.PokemonCard}>
      <Card.Img className="w-75 m-auto" variant="top" src={image} alt={pokeName} />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="d-flex justify-content-around text-capitalize">
          {pokeName}
          <Badge bg="success" className="ms-3 fs-6">{type}</Badge>
        </Card.Title>
        <Button variant="warning" className="w-50 mt-4">
          <FaHeart />
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
