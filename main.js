'use strict';
let firstWord = document.getElementById('firstWord');
let secondWord = document.getElementById('secondWord');
let thirdWord = document.getElementById('thirdWord');
document.getElementById('btn').addEventListener('click', () => {
  let first = document.getElementById('first').value.split('、');
  let randomF = Math.floor(Math.random() * first.length);
  firstWord.textContent = first[randomF];

  let second = document.getElementById('second').value.split('、');
  let randomS = Math.floor(Math.random() * second.length);
  secondWord.textContent = second[randomS];

  let third = document.getElementById('third').value.split('、');
  let randomT = Math.floor(Math.random() * third.length);
  thirdWord.textContent = third[randomT];
});
