import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pokemonListReducer from './slices/pokemonListSlice';
import favoritesReducer from './slices/favoritesSlice';

const reducer = combineReducers({
  pokeState: pokemonListReducer,
  favState: favoritesReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
