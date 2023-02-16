import { getData } from './api.js';

const leaderboard = document.querySelector('.display');
// - display the scores.
const displayScores = async () => {
  const scores = await getData();
  const scoresObj = scores.result;
  scoresObj.forEach((score) => {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score_list_container');
    scoreContainer.innerHTML = `${score.name}: ${score.score}`;
    leaderboard.appendChild(scoreContainer);
  });
};

export default displayScores;