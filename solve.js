const convertToNumber = (color) => {
  switch (color) {
    case 'black':
      return 0;
    case 'gray':
      return 1;
    case 'white':
      return 2;
  }
};

const getSolution = () => {
  const input = [
    [1, 1, 0, 1, 0, 0, 0, 0, 0, convertToNumber(grid[0].style.backgroundColor)],
    [1, 1, 1, 0, 1, 0, 0, 0, 0, convertToNumber(grid[1].style.backgroundColor)],
    [0, 1, 1, 0, 0, 1, 0, 0, 0, convertToNumber(grid[2].style.backgroundColor)],
    [1, 0, 0, 1, 1, 0, 1, 0, 0, convertToNumber(grid[3].style.backgroundColor)],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, convertToNumber(grid[4].style.backgroundColor)],
    [0, 0, 1, 0, 1, 1, 0, 0, 1, convertToNumber(grid[5].style.backgroundColor)],
    [0, 0, 0, 1, 0, 0, 1, 1, 0, convertToNumber(grid[6].style.backgroundColor)],
    [0, 0, 0, 0, 1, 0, 1, 1, 1, convertToNumber(grid[7].style.backgroundColor)],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, convertToNumber(grid[8].style.backgroundColor)]
  ];

  const p = new GaussJordan.PrimeField(3);
  const m = new GaussJordan.Matrix(input.length, input[0].length, p);

  for (let i = 0; i < input.length; i++)
    for (let j = 0; j < input[i].length; j++) {
      m.set(i, j, input[i][j]);
    }

  const rref = m.reducedRowEchelonForm();

  const output = [];
  for (let idx = 0; idx < 9; idx++) {
    grid[idx].style.borderColor = rref[idx][9] !== 0 ? '#FFD700' : '#000';
    output.push(rref[idx][9]);
  }

  return output;
};

let solution;

const checkIfSolved = () => {
  let output = true;
  for (let idx = 0; idx < 9; idx++) {
    const square = grid[idx];
    output = output && square.style.backgroundColor === 'black';
  }
  return output;
};

const updateGrid = (n) => {
  switch (n) {
    case 1:
      turnNextColor(1);
      turnNextColor(2);
      turnNextColor(4);
      turnNextColor(5);
      click(1);
      break;
    case 2:
      turnNextColor(1);
      turnNextColor(2);
      turnNextColor(3);
      click(2);
      break;
    case 3:
      turnNextColor(2);
      turnNextColor(3);
      turnNextColor(5);
      turnNextColor(6);
      click(3);
      break;
    case 4:
      turnNextColor(1);
      turnNextColor(4);
      turnNextColor(7);
      click(4);
      break;
    case 5:
      turnNextColor(2);
      turnNextColor(4);
      turnNextColor(5);
      turnNextColor(6);
      turnNextColor(8);
      click(5);
      break;
    case 6:
      turnNextColor(3);
      turnNextColor(6);
      turnNextColor(9);
      click(6);
      break;
    case 7:
      turnNextColor(4);
      turnNextColor(5);
      turnNextColor(7);
      turnNextColor(8);
      click(7);
      break;
    case 8:
      turnNextColor(7);
      turnNextColor(8);
      turnNextColor(9);
      click(8);
      break;
    case 9:
      turnNextColor(5);
      turnNextColor(6);
      turnNextColor(8);
      turnNextColor(9);
      click(9);
      break;
  }
  if (checkIfSolved()) {
    solution = null;
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

const click = (n) => {
  if (!solution) return;
  const square = grid[n - 1];
  if (solution[n - 1] !== 0) {
    solution[n - 1] -= 1;
  } else {
    solution[n - 1] = 2;
  }
  if (solution[n - 1] === 0) {
    square.style.borderColor = '#000';
  } else {
    square.style.borderColor = '#FFD700';
  }
};

one.addEventListener('click', () => {
  updateGrid(1);
});
two.addEventListener('click', () => {
  updateGrid(2);
});
three.addEventListener('click', () => {
  updateGrid(3);
});
four.addEventListener('click', () => {
  updateGrid(4);
});
five.addEventListener('click', () => {
  updateGrid(5);
});
six.addEventListener('click', () => {
  updateGrid(6);
});
seven.addEventListener('click', () => {
  updateGrid(7);
});
eight.addEventListener('click', () => {
  updateGrid(8);
});
nine.addEventListener('click', () => {
  updateGrid(9);
});

const solveButton = document.getElementById('solveButton');
solveButton.addEventListener('click', () => {
  solution = getSolution();
});

const randomButton = document.getElementById('randomButton');
randomButton.addEventListener('click', () => {
  for (let idx = 0; idx < 9; idx++) {
    const colors = ['black', 'gray', 'white'];
    const randInt = Math.floor(Math.random() * 3);
    const square = grid[idx];
    square.style.backgroundColor = colors[randInt];
    square.style.borderColor = 'black';
  }
});
