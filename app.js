//generate a random color from the array
//generate random number
//in other words generate a random index
import { answers } from './answers.js';

const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max);
};

const sound = document.getElementById('sound');
const imgShake = document.getElementById('magic-8-ball');
const answer = document.getElementById('answer');

const button = document.getElementById('button');
const input = document.getElementById('question');

button.addEventListener('click', ()=>{
    const randomAnswer = getRandomNumber(answers.length);
    imgShake.classList.remove('shake');
    void imgShake.offsetWidth;
    imgShake.classList.add('shake');
    input.value = '';
    sound.play();
    return answer.textContent = answers[randomAnswer];
});