//generate a random color from the array
//generate random number
//in other words generate a random index
import { answers } from './annswers.js';

const colors = ['red', 'pink', 'green'];

const getRandomNumber = (max)=>{
  return Math.floor(Math.random() * max);
};




const randomIdx = getRandomNumber(colors.length);
console.log(colors[randomIdx]);

const randomAnswer = getRandomNumber(answers.length);

const answer = document.getElementById('answer');
answer.textContent = answers[randomAnswer];