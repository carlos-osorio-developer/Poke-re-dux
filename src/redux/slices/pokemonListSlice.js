import axios from 'axios';

const URL = process.env.POKEAPI_URL || 'https://pokeapi.co/api/v2/';

const axiosInstance = axios.create({
  baseURL: URL,
});

const getPokemons = (limit = 151) => axiosInstance.get(`pokemon?limit=${limit}`);

export default getPokemons;
