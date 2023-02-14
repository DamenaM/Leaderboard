import './style.css';
import Score from './Modules/score.js';

const allscore = new Score();

allscore.buttonAdd.addEventListener('click', () => {
  const name = allscore.yourName.value;
  const score = allscore.yourScore.value;
  allscore.addScore(name, score);
  allscore.yourName.value = '';
  allscore.yourScore.value = '';
});
