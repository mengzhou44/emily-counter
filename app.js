const btnDecrease = document.getElementById('btnDecrease');
 const btnReset = document.getElementById('btnReset');
 const btnIncrease = document.getElementById('btnIncrease');

const result = document.querySelector('.result');

let count = 0;

result.textContent = '0';

btnReset.addEventListener('click', () => {
  console.log('clicked!')
  count = 0;
  result.textContent = count;
});

btnIncrease.addEventListener('click', () => {
  count++;
  result.textContent = count;
});

btnDecrease.addEventListener('click', () => {
  count--;
  result.textContent = count;
});
