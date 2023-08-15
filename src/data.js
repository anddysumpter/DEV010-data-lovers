//Inicio de la funcion filtrar por busqueda de nombre del pokemon
export const filterCards = (arrayPokemon, input) => {
  return arrayPokemon.filter(elemento => elemento.name.startsWith(input.toLowerCase()));
};






export const getPokemonByType = (arrayOfSelectedPokemonType, pokemonList) => {
  let pokemonFilteredList = null;
  
  for (let indexCondition = 0; indexCondition < arrayOfSelectedPokemonType.length; indexCondition++) {
    pokemonFilteredList = pokemonList.filter(function (objeto) { 
      const objetoConsultado = objeto.type.some(function (item) {
        if (item.indexOf(arrayOfSelectedPokemonType[indexCondition]) >= 0) {
          return true;
        }
        return false;
      });
      return objetoConsultado;
    });
    pokemonList = pokemonFilteredList;
  }
  
  return pokemonFilteredList;
};

export const getPokemonUniqueType = (pokemonList) => {
  const uniqueTypes = [];

  pokemonList.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      if (!uniqueTypes.some((arr) => arr.includes(type))) {
        uniqueTypes.push(pokemon.type);
      }
    });
  });

  return uniqueTypes;
};