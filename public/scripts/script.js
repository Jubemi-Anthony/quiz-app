import {continueAnimal, startAnimal} from "./animals.js";
import {startFootball, continueFootball} from "./football.js";
import {continueGeneralA, startGeneralA} from "./generalA.js";
import {continueGeneralB, startGeneralB} from "./generalB.js";
import {startHistory, continueHistory} from "./history.js";
import {continueHuman, startHuman} from "./human.js";
import {continueJavascript, startJavascript} from "./javascript.js";
import {continueRandom, startRandom} from "./random.js";
import {continueScience, startScience} from "./science.js";
import {remarkBox} from "./remark.js";

//C FOR CLASS, H FOR HIDE, K FOR CLICK
const c = 'class';
const h = 'hide';
const k = 'click';

//GETTING THE EVERYTHING FROM THE HTML
const about = document.querySelector('#about');
const aboutMe = document.querySelector('#aboutMe');
const clearAbout = document.querySelector('#clearAbout');
const clearHelp = document.querySelector('#clearHelp');
const clearProject = document.querySelector('#clearProject');
const countQuestion = document.querySelector('#countQuestion');
const countQuestion1 = document.querySelector('#countQuestion1');
const done = document.querySelector('#submit');
const goBack = document.querySelector('#goBack');
const head = document.querySelector('#topic');
const help = document.querySelector('#help');
const help0 = document.querySelector('#help0');
const leave = document.querySelector('#leave');
const locHigh = document.querySelector('.loc-high');
const main = document.querySelector('#sec-a');
const next = document.querySelector('#next');
const noTime = document.querySelector('#noTime');
const noTime1 = document.querySelector('#noTime1');
const noTime2 = document.querySelector('#noTime2');
const opt = document.querySelectorAll('.opt');
const popBack = document.querySelector('#pop-back');
const popTimeOn = document.querySelector('#pop-time-on');
const popTimeOff = document.querySelector('#pop-time-off');
const project = document.querySelector('#project');
const projects = document.querySelector('#projects');
const questionz = document.querySelector('.questionz');
const quizS = document.querySelector('#sec-b');
const scorez = document.querySelector('.scorez');
const stay = document.querySelector('#stay');
const test = document.querySelector('#test');
const timed = document.querySelector('#timer');
const timeQ = document.querySelector('#time');
const timez = document.querySelector('.timez');
const tiny = document.querySelector('#tiny');
const userbox = document.querySelector('#username');
const usery = document.querySelector('.usery');
const yesTime1 = document.querySelector('#yesTime1');
const yesTime2 = document.querySelector('#yesTime2');

//EXPORTING ALL THE OPTIONS
export{questionz, done, next, countQuestion};

//Creating a variable for the username
let username;

//Getting the username from the local storage
username = JSON.parse(localStorage.getItem("userName"));

//TOGGLING THE NAVBAR SLIDER
const nav = document.querySelector('#nav');
const cancelx = document.querySelector('#cancelx');

cancelx.addEventListener(k,()=>{
    nav.classList.toggle('transition');
})
//SHOW ABOUT ME POP UP
about.addEventListener(k,()=>{
    aboutMe.removeAttribute(c);
})
//CLEAR ABOUT ME POP UP
clearAbout.addEventListener(k,()=>{
    aboutMe.setAttribute(c,h);
})


//SHOW HELP POPUP
help0.addEventListener(k,()=>{
    help.removeAttribute(c);
})
//CLEAR HELP POPUP
clearHelp.addEventListener(k,()=>{
    help.setAttribute(c,h);
})


//SHOW PROJECT POPUP
project.addEventListener(k,()=>{
    projects.removeAttribute(c);
})

//REMOVE PROJECT POPUP
clearProject.addEventListener(k,()=>{
    projects.setAttribute(c,h);
})

//GETTING The different quiz options
const football = document.querySelector('.football')
const animals = document.querySelector('.animals')
const history = document.querySelector('.history')
const human = document.querySelector('.human')
const javascript = document.querySelector('.javascript')
const science = document.querySelector('.science')
const generalA = document.querySelector('.general1');
const generalB = document.querySelector('.general2');
const random = document.querySelector('.random')
const category = document.querySelectorAll('.category');

//SETTING THE HIGHSCORES
let footballHighscore;
let animalHighscore;
let historyHighscore;
let humanHighscore;
let scienceHighscore;
let javascriptHighscore;
let generalAHighscore;
let generalBHighscore;
let randomHighscore;

//SETTING A VARIABLE FOR THE NUMBER OF QUESTIONS (20 QUESTIONS BECAUSE IT'S 19 - 0)
let y = 19;

//SETTING A VARIABLE FOR THE SCORE
let score = 0;

//FUNCTIONALITY FOR THE TIMER
let time = true;
let timer = 80;
timez.textContent = timer;

//BRINGING THE POP UP ASKING FOR NO TIME, THEN CHOOSING
timed.addEventListener(k, ()=>{
    popTimeOff.removeAttribute(c);
})
yesTime2.addEventListener(k, ()=>{
    time = false;
    timed.setAttribute(c, h);
    noTime.removeAttribute(c);
    timeQ.setAttribute(c, h);
    popTimeOff.setAttribute(c,h);
})
noTime2.addEventListener(k, ()=>{
    popTimeOff.setAttribute(c,h);
})

//BRINGING THE POP UP ASKING FOR TIME, THEN CHOOSING
noTime.addEventListener(k, ()=>{
    popTimeOn.removeAttribute(c);
})
yesTime1.addEventListener(k, ()=>{
    time = true;
    noTime.setAttribute(c, h);
    timed.removeAttribute(c);
    timeQ.removeAttribute(c);
    popTimeOn.setAttribute(c,h);
})
noTime1.addEventListener(k, ()=>{
    popTimeOn.setAttribute(c,h);
})

//FUNCTIONALITY FOR THE QUIZ PAGE
function quiz(){
    main.setAttribute(c,h);
    quizS.removeAttribute(c);
}

goBack.addEventListener(k,()=>{
    popBack.removeAttribute(c);
})

leave.addEventListener(k, ()=>{
    main.removeAttribute(c);
    quizS.setAttribute(c, h);
    popBack.setAttribute(c, h);
    scorez.textContent = 0;
    next.setAttribute(c, h);
    endGame();
    timer = 0;
})

stay.addEventListener(k, ()=>{
    popBack.setAttribute(c, h);
})

//GETTING THE TOPIC
export let topic;

//CALLING THE QUIZ FUNCTION WHICH HIDES THE MAIN PAGE WHEN ANY OF THE QUIZ 
for(let i =0; i<category.length; i++){
    category[i].addEventListener(k, ()=>{
        if(username == null){
            alert('Enter a username first. Click Help for more info');
            return;
        }
        
        //Putting the username in the local highscore box
        usery.textContent = username;

        quiz();
        test.style.backgroundColor = 'green';
    });
}

//CHANGING THE TOPIC WHEN THE DIV IS CLICKED
football.addEventListener(k, ()=> {
    topic = 'Football';
    head.textContent = topic;

    //CHANGING THE TEXT IN THE LOCAL HIGHSCORE
    tiny.textContent = 'Football';

    //GETTING THE HIGHSCORE FROM THE LOCAL STORAGE
    footballHighscore = Number(localStorage.getItem("football"));
    locHigh.textContent = footballHighscore;

     //RESETING THE QUESTION BOARD
     questionz.textContent = 'READY FOR THE TEST ?';
});
animals.addEventListener(k, ()=> {
    topic = 'Animals';
    head.textContent = topic;

    //CHANGING THE TEXT IN THE LOCAL HIGHSCORE
    tiny.textContent = 'Animals';

    //GETTING THE HIGHSCORE FROM THE LOCAL STORAGE
    animalHighscore = Number(localStorage.getItem("animal"));
    locHigh.textContent = animalHighscore;

    //RESETING THE QUESTION BOARD
    questionz.textContent = 'READY FOR THE TEST ?';
});
history.addEventListener(k, ()=> {
    topic = 'History';
    head.textContent = topic;

    //CHANGING THE TEXT IN THE LOCAL HIGHSCORE
    tiny.textContent = 'History';

    //GETTING THE HIGHSCORE FROM THE LOCAL STORAGE
    historyHighscore = Number(localStorage.getItem("history"));
    locHigh.textContent = historyHighscore;

    //RESETING THE QUESTION BOARD
    questionz.textContent = 'READY FOR THE TEST ?';
});
human.addEventListener(k, ()=> {
    topic = 'Human';
    head.textContent = topic;

    //CHANGING THE TEXT IN THE LOCAL HIGHSCORE
    tiny.textContent = 'Humans';

    //GETTING THE HIGHSCORE FROM THE LOCAL STORAGE
    humanHighscore = Number(localStorage.getItem("human"));
    locHigh.textContent = humanHighscore;

    //RESETING THE QUESTION BOARD
    questionz.textContent = 'READY FOR THE TEST ?';
});
javascript.addEventListener(k, ()=> {
    topic = 'Javascript';
    head.textContent = topic;

    //CHANGING THE TEXT IN THE LOCAL HIGHSCORE
    tiny.textContent = 'Javascript';

    //GETTING THE HIGHSCORE FROM THE LOCAL STORAGE
    javascriptHighscore = Number(localStorage.getItem("javascript"));
    locHigh.textContent = javascriptHighscore;

    //RESETING THE QUESTION BOARD
    questionz.textContent = 'READY FOR THE TEST ?';
});
science.addEventListener(k, ()=> {
    topic = 'Science';
    head.textContent = topic;

    //CHANGING THE TEXT IN THE LOCAL HIGHSCORE
    tiny.textContent = 'Science';

    //GETTING THE HIGHSCORE FROM THE LOCAL STORAGE
    scienceHighscore = Number(localStorage.getItem("science"));
    locHigh.textContent = scienceHighscore;

    //RESETING THE QUESTION BOARD
    questionz.textContent = 'READY FOR THE TEST ?';
});
generalA.addEventListener(k, ()=> {
    topic = 'General I';
    head.textContent = topic;

    //CHANGING THE TEXT IN THE LOCAL HIGHSCORE
    tiny.textContent = 'General I';

    //GETTING THE HIGHSCORE FROM THE LOCAL STORAGE
    generalAHighscore = Number(localStorage.getItem("generalA"));
    locHigh.textContent = generalAHighscore;

    //RESETING THE QUESTION BOARD
    questionz.textContent = 'READY FOR THE TEST ?';
});
generalB.addEventListener(k, ()=> {
    topic = 'General II';
    head.textContent = topic;

    //CHANGING THE TEXT IN THE LOCAL HIGHSCORE
    tiny.textContent = 'General II';

    //GETTING THE HIGHSCORE FROM THE LOCAL STORAGE
    generalBHighscore = Number(localStorage.getItem("generalB"));
    locHigh.textContent = generalBHighscore;

    //RESETING THE QUESTION BOARD
    questionz.textContent = 'READY FOR THE TEST ?';
});
random.addEventListener(k, ()=> {
    topic = 'Random';
    head.textContent = topic;

    //CHANGING THE TEXT IN THE LOCAL HIGHSCORE
    tiny.textContent = 'Random';

    //GETTING THE HIGHSCORE FROM THE LOCAL STORAGE
    randomHighscore = Number(localStorage.getItem("random"));
    locHigh.textContent = randomHighscore;

    //RESETING THE QUESTION BOARD
    questionz.textContent = 'READY FOR THE TEST ?';
});

//GETTING AND SETTING THE HIGHSCORE FOR ALL THE QUIZES
function newFootball(){
    if(Number(scorez.textContent) > footballHighscore){
        footballHighscore = Number(scorez.textContent);
        locHigh.textContent = footballHighscore;
        localStorage.setItem("football", footballHighscore.toString());
    }
}

function newAnimal(){
    if(Number(scorez.textContent) > animalHighscore){
        animalHighscore = Number(scorez.textContent);
        locHigh.textContent = animalHighscore;
        localStorage.setItem("animal", animalHighscore.toString());
    }
}

function newHistory(){
    if(Number(scorez.textContent) > historyHighscore){
        historyHighscore = Number(scorez.textContent);
        locHigh.textContent = historyHighscore;
        localStorage.setItem("history", historyHighscore.toString());
    }
}

function newHuman(){
    if(Number(scorez.textContent) > humanHighscore){
        humanHighscore = Number(scorez.textContent);
        locHigh.textContent = humanHighscore;
        localStorage.setItem("human", humanHighscore.toString());
    }
}

function newScience(){
    if(Number(scorez.textContent) > scienceHighscore){
        scienceHighscore = Number(scorez.textContent);
        locHigh.textContent = scienceHighscore;
        localStorage.setItem("science", scienceHighscore.toString());
    }
}

function newGeneralA(){
    if(Number(scorez.textContent) > generalAHighscore){
        generalAHighscore = Number(scorez.textContent);
        locHigh.textContent = generalAHighscore;
        localStorage.setItem("generalA", generalAHighscore.toString());
    }
}

function newGeneralB(){
    if(Number(scorez.textContent) > generalBHighscore){
        generalBHighscore = Number(scorez.textContent);
        locHigh.textContent = generalBHighscore;
        localStorage.setItem("generalB", generalBHighscore.toString());
    }
}

function newJavascript(){
    if(Number(scorez.textContent) > javascriptHighscore){
        javascriptHighscore = Number(scorez.textContent);
        locHigh.textContent = javascriptHighscore;
        localStorage.setItem("javascript", javascriptHighscore.toString());
    }
}

function newRandom(){
    if(Number(scorez.textContent) > randomHighscore){
        randomHighscore = Number(scorez.textContent);
        locHigh.textContent = randomHighscore;
        localStorage.setItem("random", randomHighscore.toString());
    }
}

//THIS FUNCTION WILL BE CALLED WHEN THE GAME ENDS
function endGame(){
    //DISPLAYING THE SCORE
    questionz.textContent = `TEST OVER... You answered ${countQuestion.textContent} questions and your Score is ${scorez.textContent}`;

    //HIDING THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].classList.toggle(h);
    }
    
    //HIDING THE QUESTION COUNTER
    countQuestion1.setAttribute(c, h);

    //CHANGING THE TEXT AND COLOR OF THE START BUTTON
    test.textContent = 'Start';
    test.style.backgroundColor = 'green';

    //HIDING THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].setAttribute(c, h);
    }

    timer = 80;
    timez.textContent = timer;

    if(time === true){
        switch (topic) {
            case 'Football':
               newFootball(); 
            break;
            case 'Animals':
                newAnimal();
            break;
            case 'History':
                newHistory();
            break;
            case 'Science':
                newScience();
            break;
            case 'Human':
                newHuman();
            break;
            case 'Javascript':
                newJavascript();
            break;
            case 'Random':
                newRandom();
            break;
            case 'General I':
                newGeneralA();
            break;
            case 'General II':
                newGeneralB();
            break;
        }
    }
}

//STARTING AND ENDING THE QUIZ
let isActive = false;

test.addEventListener(k, ()=>{
    if(test.textContent === 'Start'){
        timer = 80;
        test.textContent = 'End Quiz';
        test.style.backgroundColor = 'var(--three)' ;
        isActive = true;
        //DISPLAYING THE QUESTION COUNTER
        countQuestion1.removeAttribute(c);
        
        score = 0;
        scorez.textContent = score;

        //DISPLAYING THE OPTIONS
        for(let i =0; i<opt.length; i++){
            opt[i].classList.toggle(h);
        }
    }else{
        endGame();
        isActive = false;
    }
    
    if(isActive == true){
        next.removeAttribute(c);
        switch (topic) {
            case 'Football':
                startFootball();
            break;
            case 'Animals':
                startAnimal();
            break;
            case 'History':
                startHistory();
            break;
            case 'Human':
                startHuman();
            break;
            case 'Science':
                startScience();
            break;
            case 'General I':
                startGeneralA();
            break;
            case 'General II':
                startGeneralB();
            break;
            case 'Javascript':
                startJavascript();
            break;
            case 'Random':
                startRandom();
            break;

            default:
                break;
        }
        if(time === true){
            let count = setInterval(() => {
                timer = timer - 1;
                timez.textContent = timer;
    
                done.addEventListener(k, ()=>{
                    clearInterval(count);
                    let timer = 80;
                    timez.textContent = timer;
                })
    
                if(timer < 0 || isActive == false){
                    clearInterval(count);
                    isActive = false;
                    test.textContent = 'Start';
                    test.style.backgroundColor = 'green';
                    timer = 80;
                    timez.textContent = timer;
    
                    //HIDING THE QUESTION COUNTER
                    countQuestion1.setAttribute(c, h);
    
                    //HIDING THE NEXT BUTTON
                    next.setAttribute(c, h);
    
                    endGame();
                }
            }, 950);
        }
    }else{

    }
})

//FUNCTION TO MOVE TO THE NEXT QUESTION
next.addEventListener(k, ()=>{
    remarkBox.textContent = '';
    if(y>0){
        switch (topic) {
            case 'Football':
                continueFootball();
            break;
            case 'Animals':
                continueAnimal();
            break;
            case 'History':
                continueHistory();
            break;
            case 'Human':
                continueHuman();
            break;
            case 'Science':
                continueScience();
            break;
            case 'General I':
                continueGeneralA();
            break;
            case 'General II':
                continueGeneralB();
            break;
            case 'Javascript':
                continueJavascript();
            break;
            case 'Random':
                continueRandom();
            break;
        }
    }
})

//If the game ends before the timer.
done.addEventListener(k, ()=>{
    y = y-1;
    endGame();
    done.setAttribute(c, h);
})

//Entering the username
function getUsername(){
    username = prompt('Enter or Change Username');
    username = JSON.stringify(username);
    localStorage.setItem("userName", username);
}

userbox.addEventListener(k, getUsername);