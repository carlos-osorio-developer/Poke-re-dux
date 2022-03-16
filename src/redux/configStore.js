import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pokemonListReducer from './slices/pokemonListSlice';

const reducer = combineReducers({
  pokeState: pokemonListReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
