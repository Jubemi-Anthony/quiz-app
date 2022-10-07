import { animals } from "./animals.js";
import { football } from "./football.js";
import { generalA } from "./generalA.js";
import { generalB } from "./generalB.js";
import { history } from "./history.js";
import { human } from "./human.js";
import { javascript } from "./javascript.js";
import { science } from "./science.js";
import {topic, questionz, done, next, countQuestion} from "./script.js";
import { remarkBox, remark, remarkDisplay } from "./remark.js";

const opt = document.querySelectorAll('.opt');

//SETTING A VARIABLE FOR THE NUMBER OF QUESTIONS (20 QUESTIONS BECAUSE IT'S 19 - 0)
let y = 19;

//SETTING A VARIABLE FOR THE QUESTION NUMBER
let questionCount = 0;

//SETTING A VARIABLE FOR THE SCORE
const scorez = document.querySelector('.scorez');
let score = 0;
scorez.textContent = score;

const randomQuestions = []

function selectRandom(){
    //GETTING 2 QUESTIONS FROM ANIMAL ARRAY
    for(let i =0; i<2; i++){
        let random = Math.floor(Math.random() * 100);
        randomQuestions.push(animals[random]);
    }
    //GETTING 2 QUESTIONS FROM FOOTBALL ARRAY
    for(let i =0; i<2; i++){
        let random = Math.floor(Math.random() * 100);
        randomQuestions.push(football[random]);
    }
    //GETTING 3 QUESTIONS FROM GENERAL 1 ARRAY
    for(let i =0; i<3; i++){
        let random = Math.floor(Math.random() * 100);
        randomQuestions.push(generalA[random]);
    }
    //GETTING 3 QUESTIONS FROM GENERAL 2 ARRAY
    for(let i =0; i<3; i++){
        let random = Math.floor(Math.random() * 100);
        randomQuestions.push(generalB[random]);
    }
    //GETTING 3 QUESTIONS FROM HISTORY ARRAY
    for(let i =0; i<3; i++){
        let random = Math.floor(Math.random() * 100);
        randomQuestions.push(history[random]);
    }
    //GETTING 3 QUESTIONS FROM HUMAN ARRAY
    for(let i =0; i<3; i++){
        let random = Math.floor(Math.random() * 100);
        randomQuestions.push(human[random]);
    }
    //GETTING 1 QUESTION FROM JAVASCRIPT ARRAY
    for(let i =0; i<1; i++){
        let random = Math.floor(Math.random() * 70);
        randomQuestions.push(javascript[random]);
    }
    //GETTING 3 QUESTIONS FROM SCIENCE ARRAY
    for(let i =0; i<3; i++){
        let random = Math.floor(Math.random() * 100);
        randomQuestions.push(science[random]);
    }
}

//CODE TO SHUFFLE THE OPTIONS
let optiona;
let optionb;
let optionc;

function getOptions(){
    let rand = Math.floor(Math.random()*3);
        if(rand == 0){
            optiona = rand;
            optionb = 2;
            optionc = 1;
        }else if(rand == 1){
            optiona = rand;
            optionb = 0;
            optionc = 2;
        }else{
            optiona = rand;
            optionb = 1;
            optionc = 0;
        }

        opt[0].textContent = randomQuestions[y][1][optiona];
        opt[1].textContent = randomQuestions[y][1][optionb];
        opt[2].textContent = randomQuestions[y][1][optionc];
} 

//VARIABLES FOR THE CHOICE, ANSWER, AND IF YOU'VE ANSWERED
let answered;
let answer;
let choice;

export function startRandom(){
    score = 0;
    scorez.textContent = score;

    y=19

    //EMPTYING THE RANDOM QUESTIONS ARRAY SO I CAN FILL IT WITH NEW QUESTIONS
    
    for(let i = 0; i<randomQuestions.length; i++){
        randomQuestions.pop();
    }
    
    //CALLING THE FUNCTION THAT'LL FILL THE RANDOM QUESTIONS ARRAY WITH 20 RANDOM QUESTIONS
    selectRandom();

    //RESETING THE COLORS OF THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].style.backgroundColor = 'var(--five)';
    }

    //SETTING THE ANSWERED AS FALSE BY DEFAULT
    answered = false;

    questionz.textContent = randomQuestions[y][0];
    getOptions();
    questionCount = 1;
    countQuestion.textContent = questionCount;
}

export function continueRandom(){
    //MAKING SURE AN ANSWER IS SELECTED
    if(answered == false) return;

    y = y-1;
    questionz.textContent = randomQuestions[y][0];
    getOptions();
    questionCount += 1;
    countQuestion.textContent = questionCount;

    //RESETING THE COLORS OF THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].style.backgroundColor = 'var(--five)';
    }

    //RESETING THE ANSWERED
    answered = false;
    
    //displaying the done button
    if(questionCount == 20){
        done.removeAttribute('class');
        next.setAttribute('class', 'hide');
    }
}

export function checkRandom(choice, answered, answer){
    if(answered == true) return;
    if(answer != randomQuestions[y][1][0]){
        choice.style.backgroundColor = 'var(--three)';
        remarkDisplay();
    }else{
        choice.style.backgroundColor = 'green';
        score += 1;
        scorez.textContent = score;
        remarkBox.textContent = "Keep Doing Good";
    }
    for(let i =0; i<opt.length; i++){
        if(opt[i].textContent == randomQuestions[y][1][0]){
            opt[i].style.backgroundColor = 'green';
        }
    }
}

opt[0].addEventListener('click', ()=>{
    choice = opt[0];
    answer = opt[0].textContent;
    switch (topic) {
        case 'Random':
            checkRandom(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[1].addEventListener('click', ()=>{
    choice = opt[1];
    answer = opt[1].textContent;
    switch (topic) {
        case 'Random':
            checkRandom(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[2].addEventListener('click', ()=>{
    choice = opt[2];
    answer = opt[2].textContent;
    switch (topic) {
        case 'Random':
            checkRandom(choice, answered, answer);
        break;
    }
    answered = true;
})