const SAVE_FAVORITE = 'pokeRedux/favorites/SAVE_FAVORITE';
const DELETE_FAVORITE = 'pokeRedux/favorites/DELETE_FAVORITE';

const saveFavorite = (payload) => ({
  type: SAVE_FAVORITE,
  payload,
});

const deleteFavorite = (payload) => ({
  type: DELETE_FAVORITE,
  payload,
});

const initialState = { pokemons: [] };

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FAVORITE:
      return { ...state, pokemons: [...state.pokemons, action.payload] };
    case DELETE_FAVORITE:
      return {
        ...state,
        pokemons: state.pokemons.filter((pokemon) => pokemon.name !== action.payload.name),
      };
    default:
      return state;
  }
};

export {
  favoritesReducer as default,
  saveFavorite,
  deleteFavorite,
};
