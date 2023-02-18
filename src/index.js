import './style.css';
import addScores from './Modules/addScore.js';
import getScores from './Modules/getScore.js';
import displayScores from './Modules/display.js';

const apiId = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mtabGUIYGuhhiHIUHIHuhiuh/scores/';
const form = document.querySelector('#form');

const scoreInput = document.querySelector('#scoreInput');
const nameInput = document.querySelector('#nameInput');
const successTxt = document.querySelector('.success');
const warningTxt = document.querySelector('.warningLabel');
const refreshScores = document.querySelector('#refreshScores');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (nameInput.value === '' || scoreInput.value === '') {
    warningTxt.style.display = 'block';
  } else if (nameInput.value !== '' || scoreInput.value !== '') {
    warningTxt.style.display = 'none';
    await addScores(apiId);
    successTxt.style.display = 'block';
    setTimeout(() => {
      successTxt.style.display = 'none';
    }, 2000);
  }
});

refreshScores.addEventListener('click', () => {
  document.querySelector('.tableBody').innerHTML = '';
  getScores(apiId).then((data) => displayScores(data.result));
});

window.onload = getScores(apiId).then((data) => displayScores(data.result));