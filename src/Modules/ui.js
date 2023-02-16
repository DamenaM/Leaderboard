import { submitScores } from './api';
import displayScores from './display';

const refreshBtn = document.querySelector('#refresh');
const submitBtn = document.querySelector('#add');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#scoreId');

// -- When press Refresh  make a request to data from API.
refreshBtn.addEventListener('click', (e) => {                    
  e.preventDefault();
  displayScores();
});

const clearfields = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const newName = nameInput.value;
  const newScore = scoreInput.value;
  await submitScores(newName, newScore);
  clearfields();
});