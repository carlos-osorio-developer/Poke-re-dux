import React from 'react';
import {
  Image, Label, Grid, Icon,
} from 'semantic-ui-react';

const PokemonCard = () => (
  <Grid.Column mobile={16} tablet={8} computer={4}>
    <div className="PokemonCard">
      <Icon name="heart" color="red" />
      <Image centered src="" alt="Pokemon img" />
      <p>Ditto</p>
      <Label color="green"> Normal </Label>
    </div>
  </Grid.Column>
);

export default PokemonCard;
