import axios from 'axios';

const SET_POKEMONS = 'pokeRedux/pokemonList/SET_POKEMONS';
const GET_POKEMONS = 'pokeRedux/pokemonList/GET_POKEMONS';
const GET_POKEMONS_SUCCESS = 'pokeRedux/pokemonList/GET_POKEMONS_SUCCESS';
const GET_POKEMONS_FAILURE = 'pokeRedux/pokemonList/GET_POKEMONS_FAILURE';

const URL = process.env.POKEAPI_URL || 'https://pokeapi.co/api/v2/';
const axiosInstance = axios.create({
  baseURL: URL,
});

const getPokemons = (limit = 151) => async (dispatch) => {
  dispatch({ type: GET_POKEMONS });
  const request = await axiosInstance.get(`pokemon?limit=${limit}`);
  const data = await request.data.results;
  const pokemons = data.map(async (pokemon) => {
    const pokeRequest = await axiosInstance.get(pokemon.url);
    const pokeData = await pokeRequest.data;
    return {
      id: pokeData.id,
      name: pokemon.name,
      image: pokeData.sprites.other.dream_world.front_default,
      type: pokeData.types[0].type.name,
    };
  });
  Promise.all(pokemons).then((pokemons) => {
    if (pokemons) {
      dispatch({ type: GET_POKEMONS_SUCCESS, payload: pokemons });
    } else {
      dispatch({ type: GET_POKEMONS_FAILURE, payload: request.data });
    }
  });
};

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

const pokemonListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, loading: true };
    case GET_POKEMONS_SUCCESS:
      return { ...state, loading: false, pokemons: action.payload };
    case GET_POKEMONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
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
