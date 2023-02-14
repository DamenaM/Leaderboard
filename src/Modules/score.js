class Score {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('scores')) || [];
    this.yourName = document.querySelector('#name');
    this.yourScore = document.querySelector('#scoreId');
    this.scoreDisplay = document.querySelector('#display');
    this.buttonAdd = document.querySelector('#add');
    this.render();
  }

  addScore(name, score) {
    this.scores.push({ name, score });
    localStorage.setItem('scores', JSON.stringify(this.scores));
    this.render();
  }

  removeScore(index) {
    this.scores.splice(index, 1);
    localStorage.setItem('scores', JSON.stringify(this.scores));
    this.render();
  }

  render() {
    this.scoreDisplay.innerHTML = '';
    this.scoreDisplay.classList.add('score_container');
    if (this.scores.length === 0) {
      this.scoreDisplay.classList.remove('score_container');
    }
    this.scores.forEach((allscore, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
         &nbsp ${allscore.name} &nbsp = 
                  ${allscore.score}
              `;
      if (index % 2 === 0) {
        div.style.background = '#dddddd';
      } else {
        div.style.background = '#fff';
      }

      this.scoreDisplay.appendChild(div);
      div.classList.add('score_list_container');
    });

    document.querySelectorAll('.remove-button').forEach((button) => {
      button.addEventListener('click', () => {
        this.removeScore(button.getAttribute('data-index'));
      });
    });
  }
}
export default Score;