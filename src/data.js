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