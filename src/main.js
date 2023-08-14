// Importar la data de los Pokémon
import data from './data/pokemon/pokemon.js';
import { filterCards } from './data/pokemon.js'; 
// Obtener referencias a los elementos del DOM
const root = document.getElementById('root');
const contentModal = document.createElement('section');
contentModal.classList.add('content-modal');
const searchInput = document.getElementById('search-input');


// Iconos por tipo de pokemon
const TypePokemon = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((typeElement) => {
    imgEachPokemon += `<img src="img/icons/${typeElement}.png" alt="type pokemon"/>`;
  });
  return `<div class="type-pokemon ${arrayType.join(' ')}">${imgEachPokemon}</div>`;
};


/*Todo lo referente a CARDS POKEMON*/

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

const showModal = (dataPoke) => {
  const sectionModal = document.createElement('div');
  sectionModal.classList.add('modal');
  sectionModal.innerHTML = `
    <img src="img/modal/cancelar.png" class="modal__close">
    <div class="modal__container ${dataPoke.type[0]}">
      <div class="modal__header">
        <img src="${dataPoke.img}" class="modal__img">
        <p class="modal__num">#${dataPoke.num}</p>
        <p class="modal__title">${dataPoke.name}</p>
        <p class="modal__paragraph">${dataPoke.about}</p>
      </div>
      <div class="modal__body">
        <p class="modal__type"><img src="img/modal/huevo.png"> Egg: ${dataPoke.egg} </p>
        <p class="modal__height"><img src="img/modal/medida.png"> Height:${dataPoke.size.height} </p>
        <p class="modal__weight"><img src="img/modal/peso.png"> Weight:${dataPoke.size.weight} </p>
        <p class="modal__stast"><img src="img/modal/moneda.png"> MAX-CP:${dataPoke.stats['max-cp']}</p>
        <p class="modal__stast"><img src="img/modal/mancuerna.png"> MAX-HP:${dataPoke.stats['max-hp']}</p>
      </div>
      <p class="modal__evolu">Evolution: </p>
      <div class="modal__evolutions"></div>
    </div>`;
  contentModal.appendChild(sectionModal);

  sectionModal.style.display = 'block';
    
  
  const modalClose = document.querySelector('.modal__close');
  window.addEventListener('click', (evento) => {
    if (evento.target === modalClose) {
      sectionModal.classList.remove('modal--show');
      contentModal.innerHTML = '';
    }
  });
  // Evoluciones
  // Mostrar información de evolución en la ventana modal
  const evolutionsContainer = sectionModal.querySelector('.modal__evolutions');
  const evolution = dataPoke.evolution;
  
  if (evolution['next-evolution']) {
    evolution['next-evolution'].forEach(evo => {
      evolutionsContainer.innerHTML += `
        <div class="next-evolution">
        <img src="https://www.serebii.net/pokemongo/pokemon/${evo.num}.png">
        <p class="titulo">Next Evolution:</p>
        <p>Num: ${evo.num}</p>
        <p>Name: ${evo.name}</p>
        
        </div>`;
  
      if (evo['next-evolution']) {
        evo['next-evolution'].forEach(ev => {
          evolutionsContainer.innerHTML += `
            <div class="next-evolution">
            <img src="https://www.serebii.net/pokemongo/pokemon/${ev.num}.png">
            <p class="titulo">Next Evolution:</p>
            <p>Num: ${evo.num}</p>
            <p>Name: ${evo.name}</p>
            
            </div>`;
  
        });//forEach
      }
  
    });//forEach
  
  }
  if (evolution['prev-evolution']) {
    evolution['prev-evolution'].forEach(e => {
      evolutionsContainer.innerHTML += `
        <div class="prev-evolution">
        <img src="https://www.serebii.net/pokemongo/pokemon/${e.num}.png">
        <p class="titulo">Prev Evolution:</p>
        <p>Num: ${e.num}</p>
        <p>Name: ${e.name}</p>
       </div>`;
  
      if (e['prev-evolution']) {
        e['prev-evolution'].forEach(evol => {
          evolutionsContainer.innerHTML += `
            <div class="prev-evolution">
            <img src="https://www.serebii.net/pokemongo/pokemon/${evol.num}.png">
            <p class="titulo">Prev Evolution:</p>
            <p>Num: ${evol.num}</p>
            <p>Name: ${evol.name}</p>
            </div>`;
  
        });//forEach
      }
  
    });//forEach
  }
  
  return sectionModal;
};

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const searchValue = searchInput.value.trim().toLowerCase();

    // Filtrar los Pokémon por nombre usando la función filterCards
    const filteredPokemon = filterCards(data.pokemon, searchValue);

    // Obtener referencia al elemento donde se mostrará la información del Pokémon
    const pokemonInfoContainer = document.getElementById('pokemon-info');

    // Limpiar contenido previo
    pokemonInfoContainer.innerHTML = '';

    if (filteredPokemon.length > 0) {
      // Mostrar información del Pokémon encontrado
      const foundPokemon = filteredPokemon[0];
      const pokemonInfo = `
        <div class="pokemon-details">
          <h2>${foundPokemon.name}</h2>
          <img src="${foundPokemon.img}" alt="${foundPokemon.name}">
          <p>${foundPokemon.about}</p>
        </div>
      `;
      pokemonInfoContainer.innerHTML = pokemonInfo;
    } else {
      // Mostrar imagen y mensaje de "Pokemon not found"
      const notFoundInfo = `
        <div class="not-found">
          <img src="notfound.jpg" alt="Pokemon Not Found">
          <p>Pokemon not found</p>
        </div>
      `;
      pokemonInfoContainer.innerHTML = notFoundInfo;
    }
  }
});

// Llamar a la función pokemonList con la data completa
pokemonList(data.pokemon);

// Función para filtrar y mostrar los Pokémon
const filterByType = (type) => {
  const allPokemonCards = document.querySelectorAll('.content-principal');

  allPokemonCards.forEach((pokemonCard) => {
    const types = pokemonCard.classList; // Obtenemos las clases de tipo del Pokémon

    // Verificamos si el tipo seleccionado coincide con alguno de los tipos del Pokémon
    const hasType = type === 'all' || Array.from(types).includes(type);

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



