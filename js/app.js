document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  //find the form add eventListner onto

  const form = document.querySelector('#new-form')
    form.addEventListener('submit', handleFormSubmit)



    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);


})

const handleFormSubmit = function(event){
  event.preventDefault()

  const pokemonListItem = createPokemonListItem(event.target);
  const pokemonLibrary = document.querySelector('#pokemon-library');
  pokemonLibrary.appendChild(pokemonListItem)

  event.target.reset();
}


const createPokemonListItem = function (form) {

  const pokemonListItem = document.createElement('li');
  pokemonListItem.classList.add('pokemon-list-item');


  const nameItem = document.createElement('h2');
  nameItem.textContent = form.name.value;
  pokemonListItem.appendChild(nameItem);

  const skill = document.createElement('p');
  skill.textContent = form.skill.value;
  pokemonListItem.appendChild(skill);

  const combat_points = document.createElement('p');
  combat_points.textContent = form.combat_points.value;
  pokemonListItem.appendChild(combat_points);

  const status = document.createElement('p');
  status.textContent = form.status.value;
  pokemonListItem.appendChild(status);



  return pokemonListItem;
}

const handleDeleteAllClick = function (event) {
  const pokemonLibrary = document.querySelector('#pokemon-library');
  pokemonLibrary.innerHTML = '';
}
