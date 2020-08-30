const one = document.getElementById('1');
one.addEventListener('click', () => {
  updateGrid(1);
});

const two = document.getElementById('2');
two.addEventListener('click', () => {
  updateGrid(2);
});

const three = document.getElementById('3');
three.addEventListener('click', () => {
  updateGrid(3);
});

const four = document.getElementById('4');
four.addEventListener('click', () => {
  updateGrid(4);
});

const five = document.getElementById('5');
five.addEventListener('click', () => {
  updateGrid(5);
});

const six = document.getElementById('6');
six.addEventListener('click', () => {
  updateGrid(6);
});

const seven = document.getElementById('7');
seven.addEventListener('click', () => {
  updateGrid(7);
});

const eight = document.getElementById('8');
eight.addEventListener('click', () => {
  updateGrid(8);
});

const nine = document.getElementById('9');
nine.addEventListener('click', () => {
  updateGrid(9);
});

const grid = [one, two, three, four, five, six, seven, eight, nine];

const updateGrid = (n) => {
  switch (n) {
    case 1:
      turnNextColor(1);
      turnNextColor(2);
      turnNextColor(4);
      turnNextColor(5);
      break;
    case 2:
      turnNextColor(1);
      turnNextColor(2);
      turnNextColor(3);
      break;
    case 3:
      turnNextColor(2);
      turnNextColor(3);
      turnNextColor(5);
      turnNextColor(6);
      break;
    case 4:
      turnNextColor(1);
      turnNextColor(4);
      turnNextColor(7);
      break;
    case 5:
      turnNextColor(2);
      turnNextColor(4);
      turnNextColor(5);
      turnNextColor(6);
      turnNextColor(8);
      break;
    case 6:
      turnNextColor(3);
      turnNextColor(6);
      turnNextColor(9);
      break;
    case 7:
      turnNextColor(4);
      turnNextColor(5);
      turnNextColor(7);
      turnNextColor(8);
      break;
    case 8:
      turnNextColor(7);
      turnNextColor(8);
      turnNextColor(9);
      break;
    case 9:
      turnNextColor(5);
      turnNextColor(6);
      turnNextColor(8);
      turnNextColor(9);
      break;
  }
};

const turnNextColor = (n) => {
  const square = grid[n - 1];
  switch (square.style.backgroundColor) {
    case 'white':
      square.style.backgroundColor = 'gray';
      break;
    case 'gray':
      square.style.backgroundColor = 'black';
      break;
    case 'black':
      square.style.backgroundColor = 'white';
      break;
  }
};

const reset = () => {
  for (let idx = 0; idx < 9; idx++) {
    grid[idx].style.backgroundColor = 'black';
  }
};

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', reset);

reset();
