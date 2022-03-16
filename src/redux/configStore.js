import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import pokemonListReducer from './slices/pokemonListSlice';

const reducer = combineReducers({
  pokeState: pokemonListReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
