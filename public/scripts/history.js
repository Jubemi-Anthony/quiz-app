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

const history = [];

history[0] = [["In the 17th century practice of witch swimming, how would the accused prove their innocence?"], ["By drowning","By COming out with a goldfish","If one doesn't float"]];
history[1]  = [["Which Roman Emperor banned laughing and bathing for a year after the death of his sister Drusila?"], ["Caligula","Nero","Augustus"]];
history[2]  = [["Who sighted Cuba, which he thought was China, before landing on Hispaniola, which he thought was Japan?"], ["Christopher Columbus","Gregor Mendel","Fransis McJohnson"]];
history[3]  = [["What was remarkable about the appointment of Incitatus as a Roman Senator?"], ["Incitatus was a horse","Incitatus was a woman","Incitatus was a child"]];
history[4]  = [["What was dismantled, shipped across the Atlantic and now stands in Lake Havasu City, Arizona?"], ["The original London Bridge","The statue of goodwill originally in Scotland","The statue of Liberty originally in France"]];
history[5]  = [["Which Nobel prize were both Benito Mussolini and Josef Stalin nominated for?"], ["Peace","Good Governance 1821","Wealth"]];
history[6]  = [["Which vegetable did Antoine-Agustin Parmentier seek to popularise in France by surrounding his patch with Armed Guards during the day, so that people would think they were valuable and steal them at night?"], ["The Potato","The Carrot","They weren't actually vegetables but valuable treasures"]];
history[7]  = [["Needing somewhere highly secure, where did Henry III house his pet polar bear in the 13th century?"], ["The Tower of London","A safehouse behind the wall of China","The Pentagon"]];
history[8]  = [["Cecil Chubb's wife was angered when she sent him to an auction to buy dining chairs in 1915 and he instead purchased which prehistoric monument?"], ["Stonehenge","Pharaoh's Garment","Robe of the first Emperor"]];
history[9]  = [["Which symbol of triumph did Julius Caesar establish in Rome as a means to obscure his baldness?"], ["The laurel wreath","The laurel wealth","The laurel wrath"]];
history[10] = [["Who was the sixth and final wife of Henry VIII?"], ["Catherine Parr","Susan Christine","Christine Parr"]];
history[11] = [["Which Queen of the Iceni led a revolt against the Romans in AD60?"], ["Boudica","Elizabeth I","Susan Christine"]];
history[12] = [["Alfred the Great was the ruler of which Anglo Saxon kingdom?"], ["Wessex","Ireland","Wales"]];
history[13] = [["Which meadow in Berkshire was the site of the signing of Magna Carta in 1215?"], ["Runnymede","Blendo","Windering"]];
history[14] = [["Which King abdicated the throne in 1936?"], ["Edward VIII","James II","Henry VI"]];
history[15] = [["What relation was Queen Victoria to King George III?"], ["Granddaughter","Mother","Daughter"]];
history[16] = [["Which Stuart King united England and Scotland?"], ["James I (James VI of Scotland)","George I (George VI of Scotland)","Charles I (Charles VI of Scotland)"]];
history[17] = [["King Henry IV, King Henry V and King Henry VI were members of which royal house?"], ["Lancaster","Blendo","Windering"]];
history[18] = [["Who did William the Conqueror defeat at the Battle of Hastings in 1066?"], ["Harold (Godwin)","Julio (Caesar)","Henry (Borris)"]];
history[19] = [["What is the commonly given nickname of King Aethelred II?"], ["The Unready","The Broken","The Blind"]];
history[20] = [["Which US President was assassinated by Lee Harvey Oswald?"], ["John F Kennedy","Abraham Lincoln","Franklin D Roosevelt"]];
history[21] = [["Which country was known as Rhodesia before gaining independence from the British in 1979?"], ["Zimbabwe","Angola","Liberia"]];
history[22] = [["Which wife of Henry VIII was the first to be beheaded?"], ["Anne Boleyn","Susan Christine","Ann Joyce"]];
history[23] = [["Who was Prime Minister of Great Britain for most of the Second World War?"], ["Winston Churchill","Abraham Goldrich","Johnson Westerfield"]];
history[24] = [["Which country was unified by Giuseppe Garibaldi in 1851?"], ["Italy","France","Belgium"]];
history[25] = [["Who was the longest serving US President?"], ["Franklin D Roosevelt","Abraham Lincoln","George Washington"]];
history[26] = [["Who was the first Lord Protector of England after the Civil War?"], ["Oliver Cromwell","Silvester Maxwell","Justin Matthew"]];
history[27] = [["Who led the Chinese revolution, becoming chairman of the Communist Party in 1949?"], ["Mao Zedong","Lee Taiwin","Xi Wan Ji"]];
history[28] = [["Which President was brought down by the Watergate Scandal?"], ["Richard Nixon","Woodrow Wilson","Franklin D Roosevelt"]];
history[29] = [["Yuan, Qing and Ming were Imperial Dynasties in the history of which country?"], ["China","Japan","South Korea"]];
history[30] = [["Who was President of the USA throughout World War One?"], ["Woodrow Wilson","Richard Nixon","Franklin D Roosevelt"]];
history[31] = [["In what year did the Mayflower cross the Atlantic"], ["1620","1720","1520"]];
history[32] = [["The Treaty of Guadalupe Hidalgo in 1848 marked the end of which conflict?"], ["The Mexican-American War","World War I","The Cold War"]];
history[33] = [["Complete the extract from Martin Luther King's famous 1963 speech: I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the _____?"], ["Content of their character","Content of their brain","Content of their heart"]];
history[34] = [["Which Commander of the Continental Army defected to the British after his plot to surrender West Point to them was uncovered?"], ["Benedict Arnold","Ronald Maxwell","McDon Winston"]];
history[35] = [["Where on the island did the US trained and funded troops involved in the failed 1961 invasion of Cuba land?"], ["The Bay of Pigs","Area 59","The white door"]];
history[36] = [["What links Chester A. Arthur, Andrew Johnson, Millard Fillmore, John Tyler and Gerald Ford?"], ["Presidents who never won an election","Presidents who stepped down","Presidents who were later convicted"]];
history[37] = [["The sinking of which passenger ship in 1915 is often said to have brought about the USA's declaration of war on Germany?"], ["The Lusitania","The Olivia","The Diana"]];
history[38] = [["The Little Rock Nine were prevented from doing what on September 4th 1957? "], ["Going to High School","Ascending the Throne","Starting The Black Riot"]];
history[39] = [["Which Brigadier General earned his nickname at the First Battle of Bull Run in 1861 when his brigade held its ground in the face of attack from Union troops?"], ["Thomas Stonewall Jackson","Benedict Arnold","Ranald Maxwell"]];
history[40] = [["Which Venezuelan was known as the Liberator of Latin America?"], ["Simon Bolovar","Richard Nixon","Woodrow Wilson"]];
history[41] = [["Where did Vaclav Havel lead the so-called Velvet Revolution?"], ["Czechoslovakia","The Maori","Haiti"]];
history[42] = [["The treaty of Waitangi established the rights of which indigenous people?"], ["The Maori (in New Zealand)","Haiti","Czechoslovakia"]];
history[43] = [["Where did a 1791 slave uprising eventually lead to revolution and independence from French colonialism?"], ["Haiti","The Maori (in New Zealand)","Ceylon / Sri Lanka"]];
history[44] = [["In which country did Daniel Ortega become leader following the 1979 Sandinista revolution?"], ["Nicaragua","Haiti","Czechoslovakia"]];
history[45] = [["Which empire was ruled by the Ptolemaic dynasty from 305 BC until 30 BC?"], ["Egyptian","Haiti","Nicaragua"]];
history[46] = [["Where did Sirimavo Bandaranaike become the world's first female Prime Minister in 1960?"], ["Ceylon / Sri Lanka","Haiti","Egypt"]];
history[47] = [["Probably the richest man of all time, on which continent was the empire of 14th century ruler Mansa Musa?"], ["Africa","Europe","Asia"]];
history[48] = [["Who was assassinated at Birla House, India on January 30th 1948?"], ["Mahatma Ghandi","Mansa Musa","Sirimavo Bandaranaike"]];
history[49] = [["Which Emperor was known as Ras Tafari, after whom the Rastafarian religion is named?"], ["Haile Selassie (of Ethiopia)","Mahatma Ghandi (of Egypt)","Vaclav Havel(of Algeria)"]];
history[50] = [["Who was the Emperor of Japan during World War Two?"], ["Hirohito","Yuan Jo","Ming Pin"]];
history[51] = [["Which US President ordered the deployment of two atomic bombs in Japan?"], ["Harry S. Truman","Simon Bolovar","Richard Nixon"]];
history[52] = [["Atomic bombs were dropped on Hiroshima and which other Japanese city?"], ["Nagasaki","Plantuma","Tafwini"]];
history[53] = [["Which nation fought against the Allies until 1943 but declared war on Japan in July 1945?"], ["Italy","Finland","Belgium"]];
history[54] = [["Which German General was known as the Desert Fox?"], ["Erwin Rommel","Stefan Schwarz","Milkonav Ross"]];
history[55] = [["In reference to the town to which the government was evacuated, what was common name for the French state under occupation?"], ["Vichy France","Marsielle","Lyon"]];
history[56] = [["In which state of the USA is the Pearl Harbour base, attacked by Japan in 1941?"], ["Hawaii","Alaska","Florida"]];
history[57] = [["Which Scandinavian country was a co-belligerent of the Axis powers after signing the anti-Comintern pact of 1941?"], ["Finland","Wales","Northern Ireland"]];
history[58] = [["Troops from which nation liberated Auschwitz?"], ["USSR","NATO","Soviet Union"]];
history[59] = [["Complete the extract from Churchill's 1942 speech following the second Battle of El Alamein: This is not the end. It is not even the beginning of the end. But it may just be"], ["The end of the beginning","The end of the start","The beginning of the beginning"]];
history[60] = [["Born in Macedon in 356 BC, I was tutored by Aristotle and by the age of 30 had one of the largest kingdoms of the Ancient World, who am I?"], ["Alexander the Great","Napoleon Bonaparte","Emperor Nero"]];
history[61] = [["I was born on Corsica, exiled to Elba and died on Saint Helena, who am I?"], ["Napoleon Bonaparte","Alexander the Great","Genghis Khan"]];
history[62] = [["I was born in Braunau am Inn in 1889, failed in a coup of 1923 and married in 1945, who am I?"], ["Adolf Hitler","Erwin Rommel","Stefan Schwarz"]];
history[63] = [["The last monarch of the House of Tudor, I succeeded my sister but never married or had children, who am I?"], ["Elizabeth I","Lusitania","Christine"]];
history[64] = [["The eldest son of Pepin the Short, I united most of Western and Central Europe during the early middle ages, who am I?"], ["Charlemagne","Erwin Rommel","Ivan"]];
history[65] = [["The third President of the USA, I served two terms in office and organised the Louisiana Purchase, who am I?"], ["Thomas Jefferson","Franklin D Roosevelt","Woodrow Wilson"]];
history[66] = [["I ruled Ithaca in the early Bronze Age and, if the myths are to be believed, was instrumental in winning the Trojan War for the Greeks, who am I?"], ["Odysseus / Ulysses","Alexander the Great","Emperor James"]];
history[67] = [["Born in 1918, I spent 27 years in prison and did not become ruler of my country until 1994, who am I?"], ["Nelson Mandela","Andrew Johnson","Millard Fillmore"]];
history[68] = [["The first Tsar of Russia, my reign was marked by the Tartar burning of Moscow and the massacre of Novgorod, who am I?"], ["Ivan the Terrible","Varis the Wicked","Pali the troublesome"]];
history[69] = [["The first Emperor of Rome, I was in power at the birth of Jesus of Nazareth, who am I?"], ["Augustus","Herod","Pilate"]];
history[70] = [["Who gave the Gettysburg Address?"], ["Abraham Lincoln","Thomas Jefferson","John F. Kennedy"]];
history[71] = [["Which King of England was executed as a result of the English Civil War?"], ["Charles I","Henry II","James IV"]];
history[72] = [["Who was the wife of Louis XVI of France?"], ["Marie Antoinette","Cleopatra","Maltida"]];
history[73] = [["In what year was the Russian Revolution?"], ["1917","1918","1916"]];
history[74] = [["Florence Nightingale became famous for her work as a nurse during which conflict?"], ["The Crimean War","The Cold War","World War I"]];
history[75] = [["Augusto Pinochet took power in which country after a 1973 coup?"], ["Chile","Uruguay","Brazil"]];
history[76] = [["Which Queen gave birth to her son Caesarion in 47 BC?"], ["Cleopatra","Antoinette","Barret"]];
history[77] = [["In which country was the Battle of Ypres fought in World War One?"], ["Belgium","Wales","Spain"]];
history[78] = [["Which common British pub name recalls the hiding place of King Charles I after the battle of Worcester?"], ["The Royal Oak","The Royal Hub","The Royal Pool"]];
history[79] = [["Who was the first ruler of the Mongol Empire in the late 12th century?"], ["Genghis Khan","Napoleon Bonaparte","Ballack The Wild"]];
history[80] = [["Who overthrew their husband to rule Russia for more than thirty years in the eighteenth century?"], ["Catherine the Great","Ada Lovelace","Eleanor of Aquitaine"]];
history[81] = [["Which daughter of Lord Byron was a celebrated mathematician, known for her work with Charles Babbage on computing?"], ["Ada Lovelace","Eleanor of Aquitaine","Catherine the Great"]];
history[82] = [["Who was the third Prime Minister of India and assassinated in 1984?"], ["Indira Ghandi","Eleanor of Aquitaine","Ada Lovelace"]];
history[83] = [["Who married both Louis XII of France and Henry II of England?"], ["Eleanor of Aquitaine","Ada Lovelace","Catherine the Great"]];
history[84] = [["How did suffragette Emily Davison die?"], ["She ran in front of the King's horse at Epsom","She was hanged for grand larceny","She was poisoned by her husband"]];
history[85] = [["Who was, albeit not undisputedly, the first Queen to rule England in the 1140s?"], ["Matilda","Eleanor","Lovelace"]];
history[86] = [["In which state of the USA did Rosa Parks famously resist bus segregation?"], ["Alabama","Texas","Florida"]];
history[87] = [["In which country was Benazhir Bhutto twice the Prime Minister?"], ["Pakistan","India","Philippine"]];
history[88] = [["Which American pilot flew solo across the Atlantic in 1932?"], ["Amelia Earhart","Matilda Goldberg","Rosa Parks"]];
history[89] = [["Which Argentine was the first woman anywhere in the world to hold the title of President?"], ["Isabel Peron","Matilda Goldberg","Rosa Parks"]];
history[90] = [["What was Blackbeard's real name?"], ["Edward Teach","Francis Drake","William Kidd"]];
history[91] = [["Which Scottish Captain's body was hung over the Thames as a deterrent to other would-be pirates for 3 years after his execution in 1701?"], ["William Kidd","Edward Teach","Francis Drake"]];
history[92] = [["A hero in Elizabethan England, which global circumnavigator was considered a pirate by the Spanish who placed a huge ransom on his head?"], ["Francis Drake","Edward Teach","William Kidd"]];
history[93] = [["By what nickname was Ottoman pirate Hayreddin Barbarossa known in English?"], ["Redbeard","Blackbeard","Bluebeard"]];
history[94] = [["What term was used for freelance sailors who gained a commission of war from their governments to attack foreign ships?"], ["Privateers","Comandeer","Appendee"]];
history[95] = [["In which ocean did Blackbeard operate?"], ["Atlantic","Indian","Pacific"]];
history[96] = [["Which brand of rum is named after a 17th century Welsh pirate?"], ["Captain Morgan","Lord's Gin","Great Winston Brew"]];
history[97] = [["What was the common nickname given to any flag used to identify pirate ships, most famously the skull and crossbones design?"], ["Jolly Roger","Jolly Brother","Jolly Ramson"]];
history[98] = [["Name any year in the so-called Golden Era of Piracy."], ["1700","1800","1600"]];
history[99] = [["Nigeria was almagamated in what year and by who ?"], ["1914, Lord Lugard","1914 Queen Elizabeth II","1916 Lord Lugard"]];

const historyQuestions = [];

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

    opt[0].textContent = historyQuestions[y][1][optiona];
    opt[1].textContent = historyQuestions[y][1][optionb];
    opt[2].textContent = historyQuestions[y][1][optionc];
}

//VARIABLES FOR THE CHOICE, ANSWER, AND IF YOU'VE ANSWERED
let answered;
let answer;
let choice;

export function startHistory(){
    score = 0;
    scorez.textContent = score;

    y=19

    //EMPTYING THE HISTORY QUESTIONS ARRAY SO I CAN FILL IT WITH NEW QUESTIONS
    for(let i = 0; i<historyQuestions.length; i++){
        historyQuestions.pop();
    }

    //FILLING THE ARRAY WITH 20 QUESTIONS
    for(let i = 0; i<20; i++){
        let random = Math.floor(Math.random() * 100);
        historyQuestions.push(history[random]);
    }

    //RESETING THE COLORS OF THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].style.backgroundColor = 'var(--five)';
    }

    //SETTING THE ANSWERED AS FALSE BY DEFAULT
    answered = false;

    questionz.textContent = historyQuestions[y][0];
    getOptions();
    questionCount = 1;
    countQuestion.textContent = questionCount;
}

export function continueHistory(){
    //MAKING SURE AN ANSWER IS SELECTED
    if(answered == false) return;

    y = y-1;
    questionz.textContent = historyQuestions[y][0];
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

export function checkHistory(choice, answered, answer){
    if(answered == true) return;
    if(answer != historyQuestions[y][1][0]){
        choice.style.backgroundColor = 'var(--three)';
        remarkDisplay();
    }else{
        choice.style.backgroundColor = 'green';
        score += 1;
        scorez.textContent = score;
        remarkBox.textContent = "Keep Doing Good";
    }
    for(let i =0; i<opt.length; i++){
        if(opt[i].textContent == historyQuestions[y][1][0]){
            opt[i].style.backgroundColor = 'green';
        }
    }
}

opt[0].addEventListener('click', ()=>{
    choice = opt[0];
    answer = opt[0].textContent;
    switch (topic) {
        case 'History':
            checkHistory(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[1].addEventListener('click', ()=>{
    choice = opt[1];
    answer = opt[1].textContent;
    switch (topic) {
        case 'History':
            checkHistory(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[2].addEventListener('click', ()=>{
    choice = opt[2];
    answer = opt[2].textContent;
    switch (topic) {
        case 'History':
            checkHistory(choice, answered, answer);
        break;
    }
    answered = true;
})
export{history};