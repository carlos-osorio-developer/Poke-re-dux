import React from 'react';
import {
  Image, Label, Grid, Icon,
} from 'semantic-ui-react';
import style from './pokemonCard.module.css';

const PokemonCard = () => (
  <Grid.Column mobile={16} tablet={8} computer={4}>
    <div className={style.PokemonCard}>
      <button type="button" className={style.PokemonCardFavorite}>
        <Icon name="heart" color="red" />
      </button>
      <Image
        centered
        src="https://static.wikia.nocookie.net/espokemon/images/0/03/Ditto.png"
        alt="Pokemon img"
      />
      <p className={style.PokemonCardTitle}>Ditto</p>
      <Label color="green"> Normal </Label>
    </div>
  </Grid.Column>
);

export default PokemonCard;
