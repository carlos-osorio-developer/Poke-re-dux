import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import style from './pokemonCard.module.css';

const PokemonCard = (props) => {
  const { pokeName, image, type } = props;

  return (
    <div className={style.PokemonCard}>
      <button type="button" className={style.PokemonCardFavorite}>
        <FaHeart />
      </button>
      <img src={image} alt={pokeName} className={style.PokemonCardImage} />
      <p className={style.PokemonCardTitle}>{pokeName}</p>
      <p className={style.PokemonCardType}>{type}</p>
    </div>
  );
};

PokemonCard.propTypes = {
  pokeName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default PokemonCard;
