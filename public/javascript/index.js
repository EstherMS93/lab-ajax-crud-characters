const charactersAPI = new APIHandler('http://localhost:8000');

const targetCharacters = document.querySelector(".characters-container");
function displayCharacters(characters) {
 targetCharacters.innerHTML = "";
  characters.forEach((character) => {
    targetCharacters.innerHTML += `<div class="character-info">
    <div class="name">Name: ${character.name}</div>
    <div class="occupation"> Occupation:${character.occupation}</div>
    <div class="cartoon">IsCartoon: ${character.cartoon}</div>
    <div class="weapon">Weapon: ${character.weapon}</div>
  </div>`;
 });
}
window.addEventListener('load', () => {
  const buttonFetchAll = document
    .getElementById('fetch-all')
    .addEventListener('click', (event) =>
    {
      charactersAPI
      .getFullList()
      .then ((apiResult) => displayCharacters(apiResult.data))
      .catch (error)
    });


  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document
  .getElementById('new-character-form')
  .addEventListener('submit', function (event) {

  });
});