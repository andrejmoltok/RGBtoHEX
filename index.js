/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

// elements created by getting the ID

const outter = document.getElementById('out');
//const clear = document.getElementById('clear');
const del = document.getElementById('delete');

// single text element
const text = 'RGB(x,y,z)';

// onload function clears and sets teh screen
// into starting position
window.onload = function() {
  outter.innerHTML = text;
  del.value = '';
};

// function for the Clear button
// clear.addEventListener('click', function onClick(event) {
//   outter.innerHTML = text;
//   del.value = '';
//   del.style.backgroundColor = 'white';
//   del.style.borderColor = 'black';
// });

// the main function which parses the input string into
// HEX color code
function parseRGB(x) {
  const arr = x.split(',');
  const first = Number(arr[0].split('(')[1]);
  const sec = Number(arr[1]);
  const third = Number(arr[2].split(')')[0]);
  const toParse = [];
  let hex = '#';
  toParse.push(first, sec, third);
  for (let i = 0; i < toParse.length; i += 1) {
    if (toParse[i].toString(16).length === 1) {
      hex += '0' + (toParse[i]).toString(16);
    } else {
      hex += (toParse[i]).toString(16);
    }
  }
  console.log(hex);
  outter.innerHTML = hex;
  del.style.backgroundColor = hex;
  del.style.borderColor = hex;
};