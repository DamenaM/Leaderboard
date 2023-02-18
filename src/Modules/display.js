const scoreDisplay = document.querySelector('.tableBody');
const displayScores = (arr) => {
  scoreDisplay.innerHTML = '';
  const displayScores = arr.map(
    (item) => `
          <tr >
          <td class="score-container" ><span>${item.user} : ${item.score}</span></td>
        </tr>`,
  );
  scoreDisplay.innerHTML = displayScores.join(' ');
};
export default displayScores;