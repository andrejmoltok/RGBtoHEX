/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

// elements created by getting the ID
const box = document.getElementById('main');
const outter = document.getElementById('out');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');

// single text element
const text = 'RGB(x,y,z)';

// onload function clears and sets teh screen
// into starting position
window.onload = function() {
  outter.innerHTML = text;
  box.style.backgroundColor = 'transparent';
  box.style.border = '2px solid black';
  del.value = '';
};

// function for the Clear button
clear.addEventListener('click', function onClick(event) {
  outter.innerHTML = text;
  box.style.backgroundColor = 'transparent';
  box.style.borderColor = 'black';
  del.value = '';
});

// the main function which parses the input string into
// HEX color code
function parseRGB(x) {
  const arr = x.split(',');
  const first = Number(arr[0].split('(')[1]);
  const sec = Number(arr[1]);
  const third = Number(arr[2].split(')')[0]);
  const toParse = [];
  toParse.push(first, sec, third);
  let hex = '#';
  for (let i = 0; i < toParse.length; i += 1) {
    if (Number(toParse[i].toString(16)) < 10) {
      hex += '0' + (toParse[i]).toString(16);
    } else {
      hex += (toParse[i]).toString(16);
    }
  }
  outter.innerHTML = hex;
  box.style.backgroundColor = hex;
  box.style.borderColor = hex;
};
