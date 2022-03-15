import React from 'react';
import { Grid, Search } from 'semantic-ui-react';

export default function SearchBar() {
  return (
    <div className="Searcher wrapper">
      <Grid>
        <Grid.Column
          widescreen={10}
          largeScreen={10}
          mobile={16}
          style={{ margin: 'auto', marginTop: '6rem' }}
        >
          <Search
            aligned="right"
            input={{ fluid: true }}
            showNoResults={false}
            placeholder="Encuentra a tu Pokemón favorito"
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}
