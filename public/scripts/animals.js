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

const animals = [];

animals[0] = [["There is only one insect which can turn head. What is it?"], ["Praying Mantis","German Flying Ant","Australian Spider"]];
animals[1]  = [["Kangaroo's gestation period lasts for how many days?"], ["33","90","56"]];
animals[2]  = [["A baby oyster is known as what?"], ["Spat","Oysto","Blemis"]];
animals[3]  = [["Which insect is famous as Pullicologist an expert on?"], ["Flea","Cockroach","Grasshopper"]];
animals[4]  = [["Do you know the name of the largest cat in the world?"], ["Siberian Tiger","African Lion","Alaskan Snow Puma"]];
animals[5]  = [["Which insect transmits Bubonic Plague?"], ["Flea","Termite","Locust"]];
animals[6]  = [["What is studied by a lepidopterist?"], ["Butterflies","Leopards","Hyenas"]];
animals[7]  = [["Do you know the name of the largest bird of prey in the world?"], ["Condor","Bald Eagle","Falcon"]];
animals[8]  = [["The Rhodesian Ridgeback is a dog that was bred to hunt which specific type of cat?"], ["Lion","Domestic Cats","Wild Cubs"]];
animals[9]  = [["A pinniped is what type of animal?"], ["Seal","Skunk","Wild Monkey"]];
animals[10] = [["Which is the largest beetle in the world?"], ["Goliath beetle","Giant beetle","Heavy beetle"]];
animals[11] = [["An ungulate animal has what?"], ["Hoofs","Teeth","Beak"]];
animals[12] = [["Which spider is the deadliest on Earth?"], ["Brazilian Wandering Spider","Australian Wandering Spider","Australian Wavering Spider."]];
animals[13] = [["A queen bee has how many legs?"], ["6","8","12"]];
animals[14] = [["Butterflies have _ sets of legs."], ["3","6","4"]];
animals[15] = [["Which animal can see both ultra-violet and infra-red?"], ["Goldfish","Dolphin","Dog"]];
animals[16] = [["Which is the largest animal in the earth?"], ["Blue Whale","Giraffe","Elephant"]];
animals[17] = [["What is the largest animal on the earth surface?"], ["Elephant","Giraffe","Blue Whale"]];
animals[18] = [["Which is the tallest animal in the earth?"], ["Giraffe","Blue Whale","Elephant"]];
animals[19] = [["A cat has how many whiskers?"], ["24","12","16"]];
animals[20] = [["Sockeye is what type of fish?"], ["Salmon","Clown Fish","Goldfish"]];
animals[21] = [["What is North America's only marsupial native?"], ["Opossum","Canadian Black Mamba","Flitz Bat"]];
animals[22] = [["In _ you would not likely find bats?"], ["Antarctica","Ice-Land","Canada"]];
animals[23] = [["What is eaten by a Carpophagus"], ["Fruit","Dead Animals","Insects"]];
animals[24] = [["The largest rodent in the world is what?"], ["Capybara","Giant Beetle","Austrlian Cockroach"]];
animals[25] = [["We can get sticky wax from sheep. What is it?"], ["Lanolin","Wool","Soft Leather"]];
animals[26] = [["Which bird has nostrils at its beak's end?"], ["Kiwi","Ostrich","Chicken"]];
animals[27] = [["The tortoise belongs to which class of animals?"], ["Reptila","Amphibia","Reptiles"]];
animals[28] = [["What will you call a rhinoceroses group?"], ["Crash","Storm","Box"]];
animals[29] = [["Which is the fastest two-legged runner in the world?"], ["Ostrich","Man","Indian Black Fowl"]];
animals[30] = [["Which mammal sleeps on its back?"], ["Human","Bats","Dolphins"]];
animals[31] = [["A female fox is known as what?"], ["Vixen","Fox","Flox"]];
animals[32] = [["A slug has how many noses?"], ["4","2","1"]];
animals[33] = [["A ladybug or a ladybird has how many legs?"], ["6","8","12"]];
animals[34] = [["A baby giraffe is known as what?"], ["Calf","Calvary","Giffy"]];
animals[35] = [["An echidna is what type of animal?"], ["Anteater","Eucalyptcus","Urchin"]];
animals[36] = [["We can obtain leather from which bird?"], ["Ostrich","None","Kiwi"]];
animals[37] = [["What is known as the largest reptile in the world?"], ["Saltwater Crocodile","Saltwater Aligator","Komodo Dragon"]];
animals[38] = [["Which land snake is known as the fastest moving snake in this world?"], ["Black Mamba","Rattle Snake","Green Viper"]];
animals[39] = [["Which mammal is most commonly seen in the U.S.?"], ["Mouse","Bat","Squirrel"]];
animals[40] = [["Which cat cannot retract its claws?"], ["Cheetah","Leopard","Puma"]];
animals[41] = [["An octopus has how many hearts?"], ["3","4","6"]];
animals[42] = [["A butterfly has how many legs?"], ["6","3","8"]];
animals[43] = [["A baby beaver is known as what?"], ["Kitten","Cub","Bomich"]];
animals[44] = [["A mosquito has how many teeth?"], ["47","0","28"]];
animals[45] = [["A female alligator is known as what?"], ["Tresor","Crocodile","Alligater"]];
animals[46] = [["What type of animal eats both animals and plants?"], ["Omnivore","Human","Herbi-carnivorous"]];
animals[47] = [["The cross between a zebra and a donkey is known as what?"], ["Zedonk","Donkbra","Zekey"]];
animals[48] = [["A lobster has how many legs?"], ["10","8","6"]];
animals[49] = [["What is the name of a male ferret?"], ["Hob","Meerkat","Meercat"]];
animals[50] = [["Which bird can fly backward?"], ["Hummingbird","Woodpecker","Patridge"]];
animals[51] = [["Which is the shortest mammal in the world?"], ["Bumblebee Bat","Bumblebee","Mouse"]];
animals[52] = [["A predator by nature, and the national emblem of the United States of America, what animal am I?"], ["A bald eagle","American Snow Horse","White Lion"]];
animals[53] = [["Crocodiles have roamed the earth for around 200 million years."], ["True","False","Undecided"]];
animals[54] = [["What is the largest lizard in the world?"], ["Komodo Dragon","Aligator","Saltwater Crocodile"]];
animals[55] = [["Apart from humans, which primate capable animal has blue eyes?"], ["Black Lemur","Ferret","Anteater"]];
animals[56] = [["A scorpion has how many legs?"], ["8","6","10"]];
animals[57] = [["What is Canada's national animal?"], ["Beaver","Cat","Dove"]];
animals[58] = [["Stinging nettles and red ants secrete an acid. What is it?"], ["Formic Acid","Fluoric Acid","Ascorbic Acid"]];
animals[59] = [["What is the colour of the blood of a lobster?"], ["Blue","Red","White"]];
animals[60] = [["Which mammal can fly?"], ["Bat","Flying Squirrel","Pengiun"]];
animals[61] = [["An African elephant has how many teeth?"], ["4","12","32"]];
animals[62] = [["Other than humans which animal has a chin?"], ["Elephant","Gorillas","Baboons"]];
animals[63] = [["Which mammal has the highest blood pressure in the world?"], ["Giraffe","Blue Whale","Elephant"]];
animals[64] = [["Which one is the largest amphibian in this world?"], ["Giant Salamander","Komodo Dragon","Saltwater Aligator"]];
animals[65] = [["Which is the loudest insect in this world?"], ["Male Cicada","Bee","Flying Beetle"]];
animals[66] = [["What will you find in the hump camel?"], ["Fat","Muscle","Water"]];
animals[67] = [["What is the colour of Yak milk?"], ["Pink","White","Brownish Yellow"]];
animals[68] = [["Which animal has the largest eyes in this world?"], ["Giant squid","Lemurs","Octopus"]];
animals[69] = [["A gruntle is what?"], ["Pig's snout","Racoon's tail","End of a snake"]];
animals[70] = [["In what mountain range would you find the snow leopard?"], ["The Himalayas","Mount Everest","Mount Kilimanjaro"]];
animals[71] = [["What is the home of a beaver is called?"], ["Lodge","Castle","Bridge"]];
animals[72] = [["Orangutans can only be found in the wild on two islands."], ["Borneo and Sumatra","Sumatra and Williana","Borneo and Williana"]];
animals[73] = [["Which city is known as “The Lion City”?"], ["Singapore","Madagascar","Melbroune"]];
animals[74] = [["Tigers are excellent swimmers."], ["True","False","Undecided"]];
animals[75] = [["Sloths move at a rate of about 40 yards per day."], ["True","False","Undecided"]];
animals[76] = [["American Bison have hooves."], ["True","False","Undecided"]];
animals[77] = [["Chameleons have the ability to change colour."], ["True","False","Undecided"]];
animals[78] = [["Dolphins are cetaceans."], ["True","False","Undecided"]];
animals[79] = [["The Giant Panda is native to China"], ["True","False","Undecided"]];
animals[80] = [["The emperor penguin is the smallest of 17 species of penguin."], ["False","True","Undecided"]];
animals[81] = [["Lemurs native only to the island of New Caledonia."], ["False","True","Undecided"]];
animals[82] = [["Bonobos share 65% of the same DNA as humans."], ["False","True","Undecided"]];
animals[83] = [["The cougar is the largest cat in North America."], ["False","True","Undecided"]];
animals[84] = [["What animal is Stuart Little?"], ["Mouse","Hare","Rabbit"]];
animals[85] = [["Which author wrote the book “Animal Farm”?"], ["George Orwell","Beatrix Potter","Dr. Seuss"]];
animals[86] = [["What animal is Marley in “Marley & me”? "], ["Dog","Wolf","Hyena"]];
animals[87] = [["What is the fastest dog breed in the world?"], ["Greyhound","Bull Dog","German Sheperd"]];
animals[88] = [["What is the fastest land animal?"], ["Cheetah","Horse","Lion"]];
animals[89] = [["Which animal can you see on the flag of California?"], ["Grizzly Bear","Polar Bear","Whale"]];
animals[90] = [["Are Asian Elephants larger or smaller than African Elephants?"], ["Smaller","Larger","Same Size"]];
animals[91] = [["What do penguins use to show their intended partner they want to mate for life?"], ["A pebble","Dance Moves","Loud Quacks"]];
animals[92] = [["A Joey is a baby ____?"], ["Kangaroo","Giraffe","Lion"]];
animals[93] = [["How is a baby cow called?"], ["Calf","Bull","Ewe"]];
animals[94] = [["Which country has the most sheep in the world?"], ["China","US","Iceland"]];
animals[95] = [["What is the other name for Orca?"], ["Killer Whale","Bat","Baby Dolphin"]];
animals[96] = [["Is a wallaby smaller or larger than a kangaroo?"], ["Smaller","Larger","Same Size"]];
animals[97] = [["Which Australian animal looks like an anteater and hedgehog?"], ["Echidna","Koala","Wallaby"]];
animals[98] = [["In Tom & Jerry, which one is the cat?"], ["Tom","Jerry","The Lady ?"]];
animals[99] = [["My name can be roughly translated from ancient Greek to mean river horse, what animal am I?"], ["Hippopotamus","Sea Horse","Aligator"]];

const animalQuestions = [];

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

    opt[0].textContent = animalQuestions[y][1][optiona];
    opt[1].textContent = animalQuestions[y][1][optionb];
    opt[2].textContent = animalQuestions[y][1][optionc];
}

//VARIABLES FOR THE CHOICE, ANSWER, AND IF YOU'VE ANSWERED
let answered;
let answer;
let choice;

export function startAnimal(){
    score = 0;
    scorez.textContent = score;

    y=19

    //EMPTYING THE ANIMAL QUESTIONS ARRAY SO I CAN FILL IT WITH NEW QUESTIONS
    for(let i = 0; i<animalQuestions.length; i++){
        animalQuestions.pop();
    }

    //FILLING THE ARRAY WITH 20 QUESTIONS
    for(let i = 0; i<20; i++){
        let random = Math.floor(Math.random() * 100);
        animalQuestions.push(animals[random]);
    }

    //RESETING THE COLORS OF THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].style.backgroundColor = 'var(--five)';
    }

    //SETTING THE ANSWERED AS FALSE BY DEFAULT
    answered = false;

    questionz.textContent = animalQuestions[y][0];
    getOptions();
    questionCount = 1;
    countQuestion.textContent = questionCount;
}

export function continueAnimal(){
    //MAKING SURE AN ANSWER IS SELECTED
    if(answered == false) return;

    y = y-1;
    questionz.textContent = animalQuestions[y][0];
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

function checkAnimal(choice, answered, answer){
    if(answered == true) return;
    if(answer != animalQuestions[y][1][0]){
        choice.style.backgroundColor = 'var(--three)';
        remarkDisplay();
    }else{
        choice.style.backgroundColor = 'green';
        score += 1;
        scorez.textContent = score;
        remarkBox.textContent = "Keep Doing Good";
    }
    for(let i =0; i<opt.length; i++){
        if(opt[i].textContent == animalQuestions[y][1][0]){
            opt[i].style.backgroundColor = 'green';
        }
    }
}

opt[0].addEventListener('click', ()=>{
    choice = opt[0];
    answer = opt[0].textContent;
    switch (topic) {
        case 'Animals':
            checkAnimal(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[1].addEventListener('click', ()=>{
    choice = opt[1];
    answer = opt[1].textContent;
    switch (topic) {
        case 'Animals':
            checkAnimal(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[2].addEventListener('click', ()=>{
    choice = opt[2];
    answer = opt[2].textContent;
    switch (topic) {
        case 'Animals':
            checkAnimal(choice, answered, answer);
        break;
    }
    answered = true;
})

export{animals};