import axios from 'axios';

const SET_POKEMONS = 'pokeRedux/pokemonList/SET_POKEMONS';

const URL = process.env.POKEAPI_URL || 'https://pokeapi.co/api/v2/';
const axiosInstance = axios.create({
  baseURL: URL,
});
const getPokemons = (limit = 151) => axiosInstance.get(`pokemon?limit=${limit}`);

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

const pokemonListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export {
  pokemonListReducer as default,
  setPokemons,
  getPokemons,
};
