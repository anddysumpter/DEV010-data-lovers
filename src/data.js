// data.js
import pokemonData from './data/pokemon.js';

// Función para obtener todos los Pokémon
export function getAllPokemon() {
  return pokemonData.pokemon;
}

// Función para filtrar los Pokémon por tipo o nombre
export function filterData(pokemonList, value) {
  return pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(value) || pokemon.type.includes(value));
}