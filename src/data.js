//Inicio de la funcion filtrar por busqueda de nombre del pokemon
export const filterCards = (arrayPokemon, input) => {
  return arrayPokemon.filter(elemento => elemento.name.startsWith(input.toLowerCase()));
};





export const getPokemonByType = (arrayOfSelectedPokemonType, pokemonList) => {
  let pokemonFilteredList = null;
  
  for (let indexCondition = 0; indexCondition < arrayOfSelectedPokemonType.length; indexCondition++) {
    const filteredListCopy = pokemonList.slice(); // Crea una copia del array
    pokemonFilteredList = filteredListCopy.filter(function (objeto) { 
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


export function getPokemonUniqueType(pokemonList) {
  const arrayOfUniquePokemonType = [];
  const arrayOfFlagsPokemonType = [];

  pokemonList.forEach(pokemon => {
    const sortedTypes = [...pokemon.type].sort().join();
    if (!arrayOfFlagsPokemonType.includes(sortedTypes)) {
      arrayOfFlagsPokemonType.push(sortedTypes);
      arrayOfUniquePokemonType.push([...pokemon.type].sort());
    }
  });

  return arrayOfUniquePokemonType;
}