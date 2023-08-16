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
  it('deberia retornar la data del pokemon segun el input', () => {
    const result = filterCards(objPokemon, "bul");
    expect(result[0].name).toEqual("bulbasaur");
  });
});

describe('getPokemonByType', () => {
  it('deberia retornar los tipos de los Pokémon según el botón seleccionado', () => {
    const grassTypePokemons = getPokemonByType("grass", objPokemon);
    const fireTypePokemons = getPokemonByType("fire", objPokemon);
    const waterTypePokemons = getPokemonByType("water", objPokemon);

    expect(grassTypePokemons[0].type).toEqual(["grass", "poison"]);
    expect(fireTypePokemons[0].type).toEqual(["fire"]);
    expect(waterTypePokemons[0].type).toEqual(["water"]);
  });
});

describe('getPokemonUniqueType', () => {
  it('deberia retornar un arreglo con las combinaciones únicas de tipos encontradas', () => {
    const pokemonList = [
      { name: 'blastoise', type: ['water'] },
      { name: 'dewgong', type: ['ice', 'water'] },
      { name: 'starmie', type: ['water', 'psychic'] },
      { name: 'poliwag', type: ['water'] },
      { name: 'slowbro', type: ['psychic', 'water'] },
    ];

    expect(getPokemonUniqueType(pokemonList)).toEqual([['water'], ['ice', 'water'], ['psychic', 'water']]);
  });
});