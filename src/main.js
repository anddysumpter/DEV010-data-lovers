// Importar la data de los Pokémon
import data from './data/pokemon/pokemon.js';

// Obtener referencias a los elementos del DOM
const root = document.getElementById('root');
const contentModal = document.createElement('section');
contentModal.classList.add('content-modal');

// Iconos por tipo de pokemon
const TypePokemon = (arrayType) => {
  const primaryType = arrayType[0]; // Obtenemos el primer tipo del array
  let imgEachPokemon = '';
  arrayType.forEach((typeElement) => {
    imgEachPokemon += `<img src="img/icons/${typeElement}.png" alt="type pokemon"/>`;
  });
  return `<div class="type-pokemon ${arrayType.join(' ')}">${imgEachPokemon}</div>`;
};

/* ------------------------------ ESTRUCTURA DEL CARDS POKEMON  -------------------------------------- */

/// function para crear las cards Pokemon
const pokemonList = (list) => {
  list.forEach(pokemon => {
    const content = document.createElement("div");
    content.classList.add("content-principal");

    // Modificación para considerar solo el primer tipo si el Pokémon tiene dos tipos
    const firstType = pokemon.type[0];
    content.classList.add(firstType);

    content.innerHTML = `
      <div class="container-cards content-card">
        <p class="num-pokemon">${pokemon.num}</p>
        <img src="${pokemon.img}">
        <div class="content-info">
          <p class="name-pokemon">${pokemon.name}</p>
          <div class="type-pokemon">${TypePokemon(pokemon.type)}</div>
        </div>
      </div>`;
    content.addEventListener('click', () => {
      const viewModal = showModal(pokemon);
      viewModal.classList.add('modal--show');
      content.appendChild(contentModal);
    });

    root.appendChild(content);
  });
};



// Llamar a la función pokemonList con la data completa
pokemonList(data.pokemon);

// Función para filtrar y mostrar los Pokémon
const filterByType = (type) => {
  const allPokemonCards = document.querySelectorAll('.content-principal');

  allPokemonCards.forEach((pokemonCard) => {
    const types = Array.from(pokemonCard.classList); // Obtenemos las clases de tipo del Pokémon

    // Verificamos si el tipo seleccionado coincide con alguno de los tipos del Pokémon
    const hasType = type === 'all' || types.includes(type);

    if (hasType) {
      pokemonCard.style.display = 'block';
    } else {
      pokemonCard.style.display = 'none';
    }
  });
};
// Obtener referencias a los botones de tipo
const btnAll = document.getElementById('view-all');
const btnNormal = document.getElementById('normal');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnGrass = document.getElementById('grass');
const btnElectric = document.getElementById('electric');
const btnIce = document.getElementById('ice');
const btnFighting = document.getElementById('fighting');
const btnPoison = document.getElementById('poison');
const btnGround = document.getElementById('ground');
const btnFlying = document.getElementById('flying');
const btnPsychic = document.getElementById('psychic');
const btnBug = document.getElementById('bug');
const btnRock = document.getElementById('rock');
const btnGhost = document.getElementById('ghost');
const btnDark = document.getElementById('dark');
const btnDragon = document.getElementById('dragon');
const btnSteel = document.getElementById('steel');
const btnFairy = document.getElementById('fairy');

// Agregar event listener a los botones de tipo para filtrar por tipo
btnAll.addEventListener('click', () => filterByType('all'));
btnNormal.addEventListener('click', () => filterByType('normal'));
btnFire.addEventListener('click', () => filterByType('fire'));
btnWater.addEventListener('click', () => filterByType('water'));
btnGrass.addEventListener('click', () => filterByType('grass'));
btnElectric.addEventListener('click', () => filterByType('electric'));
btnIce.addEventListener('click', () => filterByType('ice'));
btnFighting.addEventListener('click', () => filterByType('fighting'));
btnPoison.addEventListener('click', () => filterByType('poison'));
btnGround.addEventListener('click', () => filterByType('ground'));
btnFlying.addEventListener('click', () => filterByType('flying'));
btnPsychic.addEventListener('click', () => filterByType('psychic'));
btnBug.addEventListener('click', () => filterByType('bug'));
btnRock.addEventListener('click', () => filterByType('rock'));
btnGhost.addEventListener('click', () => filterByType('ghost'));
btnDark.addEventListener('click', () => filterByType('dark'));
btnDragon.addEventListener('click', () => filterByType('dragon'));
btnSteel.addEventListener('click', () => filterByType('steel'));
btnFairy.addEventListener('click', () => filterByType('fairy'));