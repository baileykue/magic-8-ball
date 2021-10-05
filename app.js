//generate a random color from the array
//generate random number
//in other words generate a random index
import { answers } from './answers.js';

const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max);
};

//let randomIdx = getRandomNumber(answers.length);


const answer = document.getElementById('answer');

const button = document.getElementById('button');
const input = document.getElementById('question');

button.addEventListener('click', ()=>{
  const randomAnswer = getRandomNumber(answers.length);
    input.value = '';
    return answer.textContent = answers[randomAnswer];
});