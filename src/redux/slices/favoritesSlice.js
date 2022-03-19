const SAVE_FAVORITE = 'pokeRedux/favorites/SAVE_FAVORITE';
const DELETE_FAVORITE = 'pokeRedux/favorites/DELETE_FAVORITE';

const saveFavorite = (payload) => ({
  type: SAVE_FAVORITE,
  payload,
})

const deleteFavorite = (payload) => ({
  type: DELETE_FAVORITE,
  payload,
})

const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case SAVE_FAVORITE:
      return { ...state, payload };
    case DELETE_FAVORITE:
      return { ...state, payload };
    default:
      return state;
  }
}