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
clear.addEventListener('click', function(event) {
  outter.innerHTML = text;
  box.style.backgroundColor = 'transparent';
  box.style.borderColor = 'black';
  del.value = '';
  del.style.backgroundColor = 'white';
  del.style.borderColor = 'black';
});

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
  box.style.backgroundColor = hex;
  box.style.borderColor = hex;
  return hex;
};