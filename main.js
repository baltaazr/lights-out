const one = document.getElementById('1');

const two = document.getElementById('2');

const three = document.getElementById('3');

const four = document.getElementById('4');

const five = document.getElementById('5');

const six = document.getElementById('6');

const seven = document.getElementById('7');

const eight = document.getElementById('8');

const nine = document.getElementById('9');

const grid = [one, two, three, four, five, six, seven, eight, nine];

const reset = () => {
  for (let idx = 0; idx < 9; idx++) {
    const square = grid[idx];
    square.style.backgroundColor = 'black';
    square.style.borderColor = 'black';
  }
};

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', reset);

const setDefault = () => {
  grid[0].style.backgroundColor = 'black';
  grid[1].style.backgroundColor = 'black';
  grid[2].style.backgroundColor = 'white';
  grid[3].style.backgroundColor = 'gray';
  grid[4].style.backgroundColor = 'gray';
  grid[5].style.backgroundColor = 'white';
  grid[6].style.backgroundColor = 'black';
  grid[7].style.backgroundColor = 'white';
  grid[8].style.backgroundColor = 'gray';
};

setDefault();
