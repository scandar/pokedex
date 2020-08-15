import { useState, useEffect } from 'react';
import axios from 'axios';

function usePokemon(offset) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
      );
      const pokemon = await Promise.all(
        response.data.results.map(async (result) => {
          const { url } = result;
          const pokeResponse = await axios.get(url);
          return pokeResponse.data;
        })
      );
      setPokemons([...pokemons, ...pokemon]);
    }
    fetchPokemons();
    // eslint-disable-next-line
  }, [offset]);

  return pokemons;
}

export default usePokemon;
