import { filterCards,  getPokemonByType,getPokemonUniqueType } from '../src/data.js';



const objPokemon = [{
  "num": "001",
  "name": "bulbasaur",
  "type": [
    "grass",
    "poison"
  ],
  "resistant": [
    "water",
    "electric",
    "grass",
    "fighting",
    "fairy"
  ],
  "weaknesses": [
    "fire",
    "ice",
    "flying",
    "psychic"
  ],
  "evolution": {
    "next-evolution": [{
      "candy-cost": "25",
    }]
  }
},
{
  "num": "004",
  "name": "charmander",
  "type": [
    "fire"
  ],
  "resistant": [
    "fire",
    "grass",
    "ice",
    "bug",
    "steel"
  ],
  "weaknesses": [
    "water",
    "ground",
    "rock"
  ],
  "evolution": {
    "next-evolution": [{
      "candy-cost": "25",
    }]
  }
},
{
  "num": "007",
  "name": "squirtle",
  "type": [
    "water"
  ],
  "resistant": [
    "fire",
    "water",
    "ice",
    "steel"
  ],
  "weaknesses": [
    "electric",
    "grass"
  ],
  "evolution": {
    "next-evolution": [{
      "candy-cost": "25",
    }]
  }
},
];

describe('filterCards', () => {
  it('debería retornar la data del pokemon según el input', () => {
    const result = filterCards(objPokemon, "bul");
    expect(result[0].name).toEqual("bulbasaur");
  });
});

describe('getPokemonByType', () => {
  it('debería retornar el tipo de pokemon seleccionado en el botón', () => {
    const grassPokemons = getPokemonByType(["grass"], objPokemon);
    expect(grassPokemons[0].type).toContain("grass");
  });
});

describe('getPokemonUniqueType', () => {
  it('debería retornar un arreglo con las combinaciones únicas de tipos encontradas', () => {
    const uniqueTypes = getPokemonUniqueType(objPokemon);
    expect(uniqueTypes).toEqual([["grass", "poison"], ["fire"], ["water"] /* ... y así sucesivamente */]);
  });
});