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

const generalB = [];

generalB[0] = [["How many stars are there on the flag of the USA?"], ["50","60","52"]];
generalB[1]  = [["What is the name of Roger's dalmatian in the Disney movie '101 Dalmatians'?"], ["Pongo","Bolt","Bernard"]];
generalB[2]  = [["Who sang “Baby One More Time” and “Oops! I did it again?"], ["Britney Spears","Daniel Craig","James Bradwood"]];
generalB[3]  = [["Who sang “Da Ya Think I'm Sexy?” and “I don't want to talk about it”?"], ["Rod Stewart","Bradley Cooper","Pierce Brosman"]];
generalB[4]  = [["Which actor played James Bond before Daniel Craig?"], ["Pierce Brosman","Britney Spears","Rod Stewart"]];
generalB[5]  = [["What is the capital of Ireland?"], ["Dublin","Sydney","Cario"]];
generalB[6]  = [["Who directed the 2018 movie 'A star is born'?"], ["Bradley Cooper","Pierce Brosman","Daniel Craig"]];
generalB[7]  = [["What is the most expensive spice in the world?"], ["Saffron","Chile Pepper","Frankinsence"]];
generalB[8]  = [["Which girl band was Beyoncé part of?"], ["The Destiny's Child","Queens of New America","The wild Angels"]];
generalB[9]  = [["Which actor plays Edward Lewis in Pretty Woman?"], ["Richard Gere","Chandler Bing","Josephine Donald"]];
generalB[10] = [["What was the Beatles' first album?"], ["Please Please Me","Nothing like you","Give me one more"]];
generalB[11] = [["Who sang “Bad Romance “ and “Poker Face”?"], ["Lady Gaga","Beyonce","Celine Dion"]];
generalB[12] = [["In which country is Mamma Mia! Set?"], ["Greece","England","Germany"]];
generalB[13] = [["In Friends, who does Monica get married with?"], ["Chandler Bing","Richard Gere","Edward Lewis"]];
generalB[14] = [["Which artist painted 'The Starry Night' and 'The Potato Eaters'?"], ["Vincent Van Gogh","Leonardo Da Vinci","Busten Van Wolt"]];
generalB[15] = [["What is the capital of Germany?"], ["Berlin","Munich","Munchen"]];
generalB[16] = [["Which band was made of John Lennon, Paul McCartney, George Harrison and Ringo Starr?"], ["The Beatles","Oasis","Imagine Dragons"]];
generalB[17] = [["Complete the name of the movie “13 Going On ___”."], ["30","Tomorrow","The world"]];
generalB[18] = [["When is Independence day in the US?"], ["4th July","6th September","20th November"]];
generalB[19] = [["Who is Queen Elizabeth II's eldest child?"], ["King Charles","Prince Harry","King Henry"]];
generalB[20] = [["Which band sang “Wonderwall” and “Champagne Supernova”?"], ["Oasis","The Beatles","Imagine Dragons"]];
generalB[21] = [["Who designed and built the Eiffel Tower?"], ["Gustave Eiffel","Bren De La Mal","Ivan Preston"]];
generalB[22] = [["WHat is the capital of Australia"], ["Canberra","Sydney","New Zealand"]];
generalB[23] = [["In which city can you find the cities of Westminster, Chelsea and Kensington?"], ["London","Manchester","Aberdeen"]];
generalB[24] = [["Who founded the fashion house Chanel?"], ["Coco Chanel","Chanel Leonard","Winston Chanel"]];
generalB[25] = [["In which band is Chris Martin the lead singer?"], ["Coldplay","Oasis","Imagine Dragon"]];
generalB[26] = [["Which country is Green Day from?"], ["USA","UK","Canada"]];
generalB[27] = [["What is Prince William the duke of?"], ["Cambridge","Celtic","Dundee"]];
generalB[28] = [["In the Simpsons, which colour is Marge's hair?"], ["Blue","Yellow","Black"]];
generalB[29] = [["What was Princess Diana's surname before marrying Prince Charles?"], ["Spencer","Jaden","Rosa"]];
generalB[30] = [["In which country is the island of Bali?"], ["Indonesia","Iran","Qatar"]];
generalB[31] = [["Who is the villain in the Disney movie, the Little mermaid?"], ["Ursula","Ariel","Malificent"]];
generalB[32] = [["Which actress plays Emily in Emily in Paris?"], ["Lily Collins","Diana Jude","Joyce Boston"]];
generalB[33] = [["What is the world's best-selling video game franchise?"], ["Call of Duty","Pro Evolution Soccer","FIFA"]];
generalB[34] = [["Which country attacked the United States on Pearl Harbor?"], ["Japan","South Korea","Russia"]];
generalB[35] = [["What is the rarest blood type?"], ["AB negative","O negative","O positive"]];
generalB[36] = [["If you are born on the 1st of october, which star sign are you?"], ["Libra","Taurus","Gemini"]];
generalB[37] = [["Did Shakespeare write MacBeth or Romeo and Juliet first?"], ["Romeo and Juliet","MacBeth","Undecided"]];
generalB[38] = [["Which character does Blake Lively play in Gossip Girl?"], ["Serena Van Der Woodsen","Violet Van Le Busten","Mihojo Vlad Jensen"]];
generalB[39] = [["What do you put on top of the ice cream to make an affogato?"], ["An espresso","A cherry","Chocolate topping"]];
generalB[40] = [["Which country sits on the Eurasian and North American tectonic plates?"], ["Iceland","Spain","Portugal"]];
generalB[41] = [["In which European country can you find the landmark 'The Brandenburg Gate'?"], ["Berlin","Munich","Moscow"]];
generalB[42] = [["In the UK, what is celebrated on the 5th of November?"], ["Bonfire Night","Thanksgiving","Haloween"]];
generalB[43] = [["What does NFL stand for?"], ["National Football League","National Federal League","Nations Football League"]];
generalB[44] = [["True or False - 12 is a prime number?"], ["False","True","Undecided"]];
generalB[45] = [["What are the 3 primary colours?"], ["Red, Yellow and Blue","Green, Yellow, Blue","Green, Purple, Orange"]];
generalB[46] = [["Steve Jobs was the CEO and co-founder of which company?"], ["Apple","Samsung","Toyota"]];
generalB[47] = [["What are the two official languages of Canada?"], ["French and English","Canadian and English","English and Arabic"]];
generalB[48] = [["Kyle Richards, Lisa Rina and Erika Jayne are 3 of the Real Housewives of?"], ["Beverly Hills","Richard Craig","Smith Cooper"]];
generalB[49] = [["With which former US president did James Patterson write the book “The President Is Missing”?"], ["Bill Clinton","George Washington","George Bush"]];
generalB[50] = [["Which year was the first landing on the moon?"], ["1969","1970","1955"]];
generalB[51] = [["Who was playing at the Manchester arena during the attacks in May 2017?"], ["Ariana Grande","Billie Eillish","Justin Bieber"]];
generalB[52] = [["Who directed Jurassic Park?"], ["Steven Spielberg","Pep Gailter","Carlo Simeone"]];
generalB[53] = [["Which band was Harry Styles part of?"], ["One direction","Oasis","The Beatles"]];
generalB[54] = [["When is Bastille day?"], ["14th of July","26th September","17th August"]];
generalB[55] = [["What is the closest planet to the sun?"], ["Mercury","Venus","Mars"]];
generalB[56] = [["Which fashion designer was nicknamed the 'enfant terrible' of the fashion industry?"], ["Jean-Paul Gaultier","Hector Bellirin","Nelson Christain-Dale"]];
generalB[57] = [["Katniss Everdeen is a character in which movies and books?"], ["The Hunger Games","Dark Wisdom","Green truth"]];
generalB[58] = [["Who is the CEO of Facebook?"], ["Mark Zuckerberg","Metaverse","Jeff Bezos"]];
generalB[59] = [["What does PC stand for?"], ["Personal Computer","Providing Communication","Pocreation"]];
generalB[60] = [["Which British actress played Violet Crawley (the grandmother) in Downton Abbey?"], ["Maggie Smith","Violet Jenevive","Meghan James"]];
generalB[61] = [["Which famous fictional character likes his martinis shaken, not stirred?"], ["James Bond","Indiana Jones","Lincon Burrows"]];
generalB[62] = [["What is the capital of Thailand?"], ["Bangkok","Delhi","Moscow"]];
generalB[63] = [["In the Disney movie 'The Lion King', what is the name of Simba's dad?"], ["Mufasa","Scar","Rafiki"]];
generalB[64] = [["What type of alcohol is a single malt scotch?"], ["Whisky","Brandy","Rum"]];
generalB[65] = [["Which grain is used to make flour?"], ["Wheat","Millet","Corn"]];
generalB[66] = [["In which country can you find the Whitsunday Islands?"], ["Australia","New Zeland","Protugal"]];
generalB[67] = [["Who played Don Vito Corleone in The Godfather?"], ["Marlon Brando","Martins Joshua","Dante Du Vanneseh"]];
generalB[68] = [["Which country is the author Gabriel García Márquez from?"], ["Colombia","Mexico","Peru"]];
generalB[69] = [["What type of marine animal is Patrick in the cartoon SpongeBob Square Pants?"], ["A Starfish","Jelly Fish","Squiq"]];
generalB[70] = [["What is the highest mountain in Africa?"], ["Mount Kilimanjaro","Mount Everest","Mount Fuji"]];
generalB[71] = [["According to the American Christmas tradition, what are you supposed to do under the mistletoe?"], ["Kiss","Exchange Gift","Hug"]];
generalB[72] = [["Who created Star Wars?"], ["George Lucas","Edward Lewis","James Bradwood"]];
generalB[73] = [["In which city is JFK International airport?"], ["New York City","Blackwater","Munich"]];
generalB[74] = [["Which Scottish battle is featured in the TV show Outlander?"], ["Battle of Culloden","Battle of the Brave","Battle of Hastings"]];
generalB[75] = [["Which sport is played in MBL?"], ["Baseball","Basketball","Bounce ball"]];
generalB[76] = [["What sport is Tiger Woods known for?"], ["Golf","Baseball","Basketball"]];
generalB[77] = [["In which city is the Golden Gate Bridge?"], ["San Francisco","Florida","Las Vegas"]];
generalB[78] = [["Who was the first President of the United States?"], ["George Washington","Thomas Jefferson","Mike Pence"]];
generalB[79] = [["In which country was the cocktail Mojito invented?"], ["Cuba","Fiji","Tunisia"]];
generalB[80] = [["In which French region were the landings on D-Day?"], ["Normandy","Bondady","Blackwater"]];
generalB[81] = [["Which bird endemic to New Zealand has the same name as a fruit?"], ["Kiwi","Duck","Conroll"]];
generalB[82] = [["What is the theatre district in New York City?"], ["Broadway","Nottignham","Yellowwall"]];
generalB[83] = [["What's the Sunshine State?"], ["Florida","Texas","Los Angeles"]];
generalB[84] = [["Complete the name of this Leonardo Dicaprio movie “Wolf of______”"], ["Wall Street","The Wild","The Bold"]];
generalB[85] = [["What is the capital of Scotland?"], ["Edinburgh","Aberdeen","Celtic"]];
generalB[86] = [["Who won the world cup of football in 2018?"], ["France","Germany","Brazil"]];
generalB[87] = [["Which Spanish TV show is about robberies planned by “The Professor”?"], ["Money Heist","Prison Break","Red Notice"]];
generalB[88] = [["In Chess, how many pawns does each player have?"], ["8","16","6"]];
generalB[89] = [["Who invented the lightbulb?"], ["Thomas Edison","Jean-Paul Gaultier","Steven Spielberg"]];
generalB[90] = [["In Games of Thrones, who was the son of Lyanna Stark and Rhaegar Targaryen?"], ["Jon Snow","Brandon Stark","Jamie Lannister"]];
generalB[91] = [["In which month is the Super Bowl?"], ["February","March","September"]];
generalB[92] = [["Which company bought Instagram in 2012?"], ["Facebook","Metaverse","Mark Zukerberg"]];
generalB[93] = [["What is Winnie the Pooh's favourite food?"], ["Honey","Bee","Banana's"]];
generalB[94] = [["Which painter is known for painting loads of melting clocks?"], ["Salvador Dali","Steven Spielberg"," Ivan Preston"]];
generalB[95] = [["What is the largest museum in the world?"], ["The Louvre","Museo de la Paris",""]];
generalB[96] = [["Who is the God of the sky in Greek Mythology?"], ["Zeus","Olympus","Hades"]];
generalB[97] = [["How many Harry Potter books are there?"], ["7","6","9"]];
generalB[98] = [["Which port did the Titanic leave from?"], ["Southampton","Tottehenm","Fulham"]];
generalB[99] = [["Which sport does Rafael Nadal play?"], ["Tennis","Football","Baseball"]];

const generalBQuestions = [];

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

    opt[0].textContent = generalBQuestions[y][1][optiona];
    opt[1].textContent = generalBQuestions[y][1][optionb];
    opt[2].textContent = generalBQuestions[y][1][optionc];
}

//VARIABLES FOR THE CHOICE, ANSWER, AND IF YOU'VE ANSWERED
let answered;
let answer;
let choice;

export function startGeneralB(){
    score = 0;
    scorez.textContent = score;

    y=19

    //EMPTYING THE GENERAL QUESTIONS ARRAY SO I CAN FILL IT WITH NEW QUESTIONS
    for(let i = 0; i<generalBQuestions.length; i++){
        generalBQuestions.pop();
    }

    //FILLING THE ARRAY WITH 20 QUESTIONS
    for(let i = 0; i<20; i++){
        let random = Math.floor(Math.random() * 100);
        generalBQuestions.push(generalB[random]);
    }

    //RESETING THE COLORS OF THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].style.backgroundColor = 'var(--five)';
    }

    //SETTING THE ANSWERED AS FALSE BY DEFAULT
    answered = false;

    questionz.textContent = generalBQuestions[y][0];
    getOptions();
    questionCount = 1;
    countQuestion.textContent = questionCount;
}

export function continueGeneralB(){
    //MAKING SURE AN ANSWER IS SELECTED
    if(answered == false) return;

    y = y-1;
    questionz.textContent = generalBQuestions[y][0];
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

export function checkGeneralB(choice, answered, answer){
    if(answered == true) return;
    if(answer != generalBQuestions[y][1][0]){
        choice.style.backgroundColor = 'var(--three)';
        remarkDisplay();
    }else{
        choice.style.backgroundColor = 'green';
        score += 1;
        scorez.textContent = score;
        remarkBox.textContent = "Keep Doing Good";
    }
    for(let i =0; i<opt.length; i++){
        if(opt[i].textContent == generalBQuestions[y][1][0]){
            opt[i].style.backgroundColor = 'green';
        }
    }
}

opt[0].addEventListener('click', ()=>{
    choice = opt[0];
    answer = opt[0].textContent;
    switch (topic) {
        case 'General II':
            checkGeneralB(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[1].addEventListener('click', ()=>{
    choice = opt[1];
    answer = opt[1].textContent;
    switch (topic) {
        case 'General II':
            checkGeneralB(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[2].addEventListener('click', ()=>{
    choice = opt[2];
    answer = opt[2].textContent;
    switch (topic) {
        case 'General II':
            checkGeneralB(choice, answered, answer);
        break;
    }
    answered = true;
})
export{generalB};