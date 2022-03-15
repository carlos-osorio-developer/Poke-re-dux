import React from 'react';
import {
  Image, Label, Grid, Icon,
} from 'semantic-ui-react';
import style from './pokemonCard.module.css';

const PokemonCard = () => (
  <Grid.Column mobile={16} tablet={8} computer={4}>
    <div className={style.PokemonCard}>
      <Icon name="heart" color="red" />
      <Image centered src="" alt="Pokemon img" />
      <p>Ditto</p>
      <Label color="green"> Normal </Label>
    </div>
  </Grid.Column>
);

export default PokemonCard;
