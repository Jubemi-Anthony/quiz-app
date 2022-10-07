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

const generalA = [];

generalA[0] = [["Which Italian city can you find the Colosseum?"], ["Rome","Milan","Bolgona"]];
generalA[1]  = [["In the TV show New Girl, which actress plays Jessica Day?"], ["Zooey Deschanel","Elizabeth Bennet","Agatha Christie"]];
generalA[2]  = [["What is the largest canyon in the world?"], ["Grand Canyon","Great Canyon","Giant Canyon"]];
generalA[3]  = [["How long is the border between the United States and Canada?"], ["5,525 miles","30,153 miles","2,311 miles"]];
generalA[4]  = [["What is the largest active volcano in the world?"], ["Mouna Loa","Mount Jitu","Via Fuji"]];
generalA[5]  = [["When did Lenin die?"], ["21 January 1924","4th June 1966","21st September 1920"]];
generalA[6]  = [["In which US state did the Scopes Monkey Trial happen?"], ["Tennessee","Alabama","Las Vegas"]];
generalA[7]  = [["When was the book “To Kill a Mockingbird” by Harper Lee published?"], ["1960","1970","1980"]];
generalA[8]  = [["In which museum can you find Leonardo Da Vinci's Mona Lisa?"], ["Le Louvre","Prado Museum","Museo de la Fonce"]];
generalA[9]  = [["In which city can you find the Prado Museum?"], ["Madrid","Paris","London"]];
generalA[10] = [["When did Salt Lake City host the Winter Olympics?"], ["2002","2006","2010"]];
generalA[11] = [["In the Big Bang Theory, what is the name of Sheldon and Leonard's neighbour?"], ["Penny","Jessica","Joyce"]];
generalA[12] = [["When did Hitler invade Poland?"], ["1st September 1939","4th June 1936","21st October 1940"]];
generalA[13] = [["What is the largest continent in size?"], ["Asia","Africa","South America"]];
generalA[14] = [["Which French king was nicknamed the “Sun King”?"], ["Louis XIV","Henry II","Antoine XI"]];
generalA[15] = [["Who was George W. Bush' vice president?"], ["Dick Cheney","Deschanel Mark","Denzel Blackwater"]];
generalA[16] = [["Which famous inventor invented the telephone?"], ["Alexander Graham Bell","Abraham John Titlor","Ballack Westerfield Jnr"]];
generalA[17] = [["If you are born on the 1st of January, which star sign are you? "], ["Capricorn","Taurus","Scorpio"]];
generalA[18] = [["How many wives had Henry VIII?"], ["6","3","4"]];
generalA[19] = [["In which city is the Juventus Football Club based?"], ["Turin","Juve","Torino"]];
generalA[20] = [["Which artist and author made the Smurfs comic strips?"], ["Peyo","Dohan","Junpia"]];
generalA[21] = [["What does the Richter scale measure?"], ["The Magnitude of an earthquake","The depth of the sea","The acidity of lava"]];
generalA[22] = [["Which country is the footballer Lionel Messi from?"], ["Argentina","Spain","Fance"]];
generalA[23] = [["What is the longest river in the world?"], ["Nile","Misissipi","Pacific"]];
generalA[24] = [["How many sides has a Hexagon?"], ["6","7","8"]];
generalA[25] = [["Poland does not shares a border with Romania?"], ["True","False","Undecided"]];
generalA[26] = [["What is the name of the main character in Pride and Prejudice?"], ["Elizabeth Bennet","Agatha Christie","Josephine Heller"]];
generalA[27] = [["In which country was the airline Ryanair founded?"], ["Ireland","Peru","SOuth Korea"]];
generalA[28] = [["When were Guy Fawkes and The Gunpowder Plot discovered?"], ["1605","1705","1805"]];
generalA[29] = [["Who wrote Catch-22?"], ["Joseph Heller","Cooper Jalfrezi","Michael Kenneth"]];
generalA[30] = [["Who was assassinated on the 22nd of November 1963?"], ["John F Kennedy","Martin Luther King Jr.","General McBelic"]];
generalA[31] = [["When was the first Harry Potter book published?"], ["1997","1990","1980"]];
generalA[32] = [["Which author is known for creating Hercule Poirot?"], ["Agatha Christie","Jessica Penny","Cyndi Lauper"]];
generalA[33] = [["If you are eating chicken jalfrezi, what type of food are you eating?"], ["Indian Food","Chinese Food","Italian Food"]];
generalA[34] = [["Which battle did William the Conqueror win in 1066?"], ["Battle of Hastings","Battle of the forgotten","Battle of fire"]];
generalA[35] = [["Who is the CEO of Amazon?"], ["Jeff Bezos","Bill Gates","Elon Musk"]];
generalA[36] = [["Soviet Union was part of the Axis Powers during WWII."], ["False","True","Undecided"]];
generalA[37] = [["Which band released the song “Wonderwall” in the 90s?"], ["Oasis","Beatles","Imagine Dragons"]];
generalA[38] = [["“When I find myself in times of trouble, Mother Mary comes to me” is the opening line of which song?"], ["Let it Be - The Beatles","Get it in- Oasis","Put to bed - Imagine Dragons"]];
generalA[39] = [["What was Euclid?"], ["A mathematician","A philosopher","A nurse"]];
generalA[40] = [["Which ballroom dance originated in Germany and Austria?"], ["Waltz","Splitz","Morcilz"]];
generalA[41] = [["What is the capital of Iraq?"], ["Baghdad","Mumbai","Syndey"]];
generalA[42] = [["Which country won the first Football World Cup in 1930?"], ["Uruguay","Brazil","France"]];
generalA[43] = [["In which country is the baht the currency?"], ["Thailand","Morocco","Paraguay"]];
generalA[44] = [["In which city were the 2000 Summer Olympics held?"], ["Sydney","Berlin","Milan"]];
generalA[45] = [["What colour is the “m” from the McDonald's logo?"], ["Yellow","Red","White"]];
generalA[46] = [["In which city was Martin Luther King Jr. assassinated?"], ["Memphis","St Louis","Vernia"]];
generalA[47] = [["What is the name of the dog in Tintin?"], ["Snowy","Bruno","Bolt"]];
generalA[48] = [["Who released the song “Girls Just Want To Have Fun” in the 80s?"], ["Cyndi Lauper","Jessica Cheney","Cassandra Bennete"]];
generalA[49] = [["What is guacamole made of?"], ["Avocado","Green Beans","Papaya"]];
generalA[50] = [["“Onze” is the french number for?"], ["11","1","101"]];
generalA[51] = [["Which month is the aquamarine the birthstone of?"], ["March","December","August"]];
generalA[52] = [["Moeraki Boulders is in Australia."], ["False","True","Undecided"]];
generalA[53] = [["Caladesi Island is not in Scotland."], ["True","False","Undecided"]];
generalA[54] = [["Who was the 1st President of Post-Independence Nigeria?"], ["Nnamdi Azikiwe","Peter Obi","Gen. Buhari"]];
generalA[55] = [["How many players are in a cricket team?"], ["11","6","14"]];
generalA[56] = [["Which actress played Sally Draper in Mad Men?"], ["Kiernan Shipka","Marie Rosevelt","Matilda Harrison"]];
generalA[57] = [["What does NASA stand for?"], ["National Aeronautics and Space Administration","National Association of Space Astronauts","National American Space Astronauts"]];
generalA[58] = [["What is “the Marbella” in Jane the Virgin?"], ["A hotel","A ship","An island"]];
generalA[59] = [["Who was the first woman to win a Nobel Prize?"], ["Marie Curie","Cyndi Lauper","Joyce Curie"]];
generalA[60] = [["Which Friends character's famous pickup line is “How you doin'?"], ["Joey","Justin","Jeorge"]];
generalA[61] = [["What is Marshall's job in How I met your mother?"], ["Lawyer","Engineer","Doctor"]];
generalA[62] = [["On which streaming service did The Morning show premiere in 2019?"], ["Apple TV+","Netflix","HBO"]];
generalA[63] = [["What is the name of the gem in the movie Titanic?"], ["Heart of the Ocean","The blue diamond","Soul of the Sun"]];
generalA[64] = [["What is the national animal of England?"], ["Lion","Dove","Penguin"]];
generalA[65] = [["Which constellation is on the Australian flag?"], ["The southern cross","The big bear","The archer"]];
generalA[66] = [["What is the capital of New Zealand?"], ["Wellington","Sydney","Candella"]];
generalA[67] = [["Which one of the following companies has a mermaid in its logo?"], ["Starbucks","Chevrolet","Feyenoord"]];
generalA[68] = [["What is the second most popular drink in the world?"], ["Tea","Water","Coca-cola"]];
generalA[69] = [["In The Lion King, who is Simba's uncle?"], ["Scar","Timon","Zazu"]];
generalA[70] = [["How many bones are there in an adult human body?"], ["206","300","326"]];
generalA[71] = [["What is the currency in Poland?"], ["Polish Zloty","Euros","Polish Dollar"]];
generalA[72] = [["What was Daniel Craig's first James Bond movie?"], ["Casino Royale","Big Bad","Brave and Bold"]];
generalA[73] = [["Which fruit is at the top of the Wimbledon gentlemen's singles trophy?"], ["Pineapple","Grape","Pear"]];
generalA[74] = [["During which historical period is the movie 'Schindler's List' set?"], ["WWII","WWI","Medival"]];
generalA[75] = [["Who famously said “Veni, vidi, vici”?"], ["Julius Caesar","Socrates","Aristotle"]];
generalA[76] = [["Who discovered the tumb of Tutankhamun? "], ["Howard Carter","WInston McCallister","Alfred Churchill"]];
generalA[77] = [["Which city was covered in ashes during the eruption of Mount Vesuvius in 79 AD?"], ["Pompeii","North Dakota","Munich"]];
generalA[78] = [["What was the first national park in the US? "], ["Yellowstone National Park","Washington National Park","Greenwood National Park"]];
generalA[79] = [["Which historical battle is featured in the TV series “Outlander”?"], ["Battle of Culloden","Battle of the Blind","Battle of Hastings"]];
generalA[80] = [["Mallorca is part of which archipelago?"], ["Balearic Islands","Costic Islands","Melandic Islands"]];
generalA[81] = [["The Union Jack is the name of which country's flag? "], ["UK","US","France"]];
generalA[82] = [["Which Nobel Prize did Winston Churchill win?"], ["Literature","Invention","Charity"]];
generalA[83] = [["In Home Alone, where were the McCallister flying to when they left Kevin?"], ["France","Germany","Singapore"]];
generalA[84] = [["In Mamma Mia, Hugh Grant didn't play one of Sophie's dad?"], ["True","False","Undecided"]];
generalA[85] = [["What type of pastry is used to make a Mille-feuille?"], ["Puff Pastry","Wheat Pastry","Tomato Pastry"]];
generalA[86] = [["In which Disney movie can you see a character named Mr. Banks?"], ["Mary Poppins","SNow White","Beauty and the Beast"]];
generalA[87] = [["Which actress played Emily Cooper in “Emily in Paris”? "], ["Lily Collins","Louisa Bumble","Lady O Garreth"]];
generalA[88] = [["Which one of the following is the correct spelling?"], ["Maintenance","Maintanence","Maintanance"]];
generalA[89] = [["Which one of the following is not a character in the cartoon “The Powerpuff Girls”?"], ["Butterfly","Snow","Flower"]];
generalA[90] = [["Who lives at the following address '10 Downing Street'?"], ["UK Prime Minister","The British Mornach","Duke of Weselton"]];
generalA[91] = [["Which one of the following artists wasn't part of the Rolling Stones?"], ["Jimmy Page","Justin Pink","Jared Poppin"]];
generalA[92] = [["What's Garfield favourite food? "], ["Lasagna","Fish","Guacamole"]];
generalA[93] = [["How many years did Nelson Mandela spend in prison?"], ["27","30","14"]];
generalA[94] = [["What is the highest mountain in Japan?"], ["Mount Fuji","Mount Everest","Mount Kilimanjaro"]];
generalA[95] = [["How high is Mount Everest?"], ["8,849 m","9,300 m","100,300 m"]];
generalA[96] = [["Whis the symbol for Silver?"], ["Ag","Si","Sl"]];
generalA[97] = [["How many elements are there on the periodic table?"], ["118","120","96"]];
generalA[98] = [["When is St. Patrick's Day?"], ["17 March","12 November","22nd Febuary"]];
generalA[99] = [["Who painted 'Girl with a Pearl Earring'?"], ["Johannes Vermeer","Leonardo Di Caprico","Vin Jan Loan"]];

const generalAQuestions = [];

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

    opt[0].textContent = generalAQuestions[y][1][optiona];
    opt[1].textContent = generalAQuestions[y][1][optionb];
    opt[2].textContent = generalAQuestions[y][1][optionc];
}

//VARIABLES FOR THE CHOICE, ANSWER, AND IF YOU'VE ANSWERED
let answered;
let answer;
let choice;

export function startGeneralA(){
    score = 0;
    scorez.textContent = score;

    y=19

    //EMPTYING THE GENERAL QUESTIONS ARRAY SO I CAN FILL IT WITH NEW QUESTIONS
    for(let i = 0; i<generalAQuestions.length; i++){
        generalAQuestions.pop();
    }

    //FILLING THE ARRAY WITH 20 QUESTIONS
    for(let i = 0; i<20; i++){
        let random = Math.floor(Math.random() * 100);
        generalAQuestions.push(generalA[random]);
    }

    //RESETING THE COLORS OF THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].style.backgroundColor = 'var(--five)';
    }

    //SETTING THE ANSWERED AS FALSE BY DEFAULT
    answered = false;

    questionz.textContent = generalAQuestions[y][0];
    getOptions();
    questionCount = 1;
    countQuestion.textContent = questionCount;
}

export function continueGeneralA(){
    //MAKING SURE AN ANSWER IS SELECTED
    if(answered == false) return;

    y = y-1;
    questionz.textContent = generalAQuestions[y][0];
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

export function checkGeneralA(choice, answered, answer){
    if(answered == true) return;
    if(answer != generalAQuestions[y][1][0]){
        choice.style.backgroundColor = 'var(--three)';
        remarkDisplay();
    }else{
        choice.style.backgroundColor = 'green';
        score += 1;
        scorez.textContent = score;
        remarkBox.textContent = "Keep Doing Good";
    }
    for(let i =0; i<opt.length; i++){
        if(opt[i].textContent == generalAQuestions[y][1][0]){
            opt[i].style.backgroundColor = 'green';
        }
    }
}

opt[0].addEventListener('click', ()=>{
    choice = opt[0];
    answer = opt[0].textContent;
    switch (topic) {
        case 'General I':
            checkGeneralA(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[1].addEventListener('click', ()=>{
    choice = opt[1];
    answer = opt[1].textContent;
    switch (topic) {
        case 'General I':
            checkGeneralA(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[2].addEventListener('click', ()=>{
    choice = opt[2];
    answer = opt[2].textContent;
    switch (topic) {
        case 'General I':
            checkGeneralA(choice, answered, answer);
        break;
    }
    answered = true;
})
export{generalA};