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

const science = [];

science[0] = [["Who was the first pre-Socratic philosopher to suggest that matter could neither be created nor destroyed?"], ["Parmenides","John Dalton","Isaac Newton"]];
science[1]  = [["Which quantum number gives the shape of the orbital?"], ["Azimuthal quantum number.","Heisenberg quantum number","Plank's quantum numbe"]];
science[2]  = [["What is ecosystem?"], ["Entire living and non-living factors of the environment.","The study of Economics","The entire system of the ecological factors that makes up life"]];
science[3]  = [["In 1729 AD, Pieter Van Musschenbroek used the term 'PHYSICS' for the first time. What was the subject called so far?"], ["Natural philosophy","Early Philosophy","Medival Philosophy"]];
science[4]  = [["What is the maximum capacity of d-orbital?"], ["10 electrons.","8 electrons.","6 electrons."]];
science[5]  = [["Which form of science dealing with the study of structural and cultural traits of human beings?"], ["Anthropology","Dendrology","Taxnomy"]];
science[6]  = [["Which Greek philosopher suggested that the material world was composed of four basic elements: air, water, fire and earth?"], ["Empedocles","Anaxagoras","Parmenides"]];
science[7]  = [["What is the shape of s-orbital?"], ["Spherical","Dumb-bell","Planet Like"]];
science[8]  = [["What are the two functional groups in an ecosystem?"], ["Autotrophs and heterotrophs","Auotrophs and Producers","Heterotrophs and consumers"]];
science[9]  = [["Who in 1231 was the first to describe the science of optics?"], ["Robert Grosseteste","Edmund Halley","Abraham Bennet."]];
science[10] = [["What do you mean by Zeeman Effect?"], ["Splitting of spectral lines by magnetic field.","Splitting of spectral lines by electric field.","Splitting of photo-sensitive lines by magnetic field."]];
science[11] = [["Where does the primary photo chemical reaction occur in chloroplast?"], ["Quantasome.","Chloroplast","Quantum firld"]];
science[12] = [["Who was burnt to death for suggesting that the sun might be an ordinary star?"], ["Giordano Bruno.","Edmund Halley","Evangelista Torricelli"]];
science[13] = [["What is the shape of p-orbital?"], ["Dumb-bell","Spherical","Planet Like"]];
science[14] = [["What is exobiology?"], ["It is the study of life in outer space.","It is the study of life in a vacuum","It is the study of life in the past"]];
science[15] = [["Who in 1643 was the first person to create vacuum above the liquid?"], ["Evangelista Torricelli.","Sommerfeld","Robert Grosseteste"]];
science[16] = [["Which series of hydrogen atomic spectrum lies in the visible region?"], ["Balmer series.","Bernoulli's series.","Torricelli series."]];
science[17] = [["What is the magnification of an electron microscope?"], ["100000","10000","100000"]];
science[18] = [["Who in 1786 invented the gold leaf electro scope?"], ["Abraham Bennet.","Giordano Bruno.","Evangelista Torricelli"]];
science[19] = [["Who proposed elliptical orbits?"], ["Sommerfeld.","Abraham Bennet.","Giordano Bruno."]];
science[20] = [["Which is the monocarpic plant which shows gregarious flowering once in 48 years?"], ["Bamboo.","Iroko.","Moss"]];
science[21] = [["Who encouraged Newton to write his idea for principia?"], ["Edmund Halley.","Robert Grosseteste","Etienne-Louis Malus."]];
science[22] = [["How many atomic orbitals are known? What are they?"], ["Four. S, p, d, and f.","Four. k, l, m, and n.","Five. S, p, d, f and k."]];
science[23] = [["Write an example of serendipity."], ["Discovery of penicillin by Fleming.","Giving birth to twins.","When an animal dies prepared"]];
science[24] = [["Etienne-Louis Malus discovered polarization of light and introduced the term 'Polarization' in which year?"], ["1808","1908","1950"]];
science[25] = [["What is the maximum number of electrons that can be accommodated in an orbital?"], ["2","4","8"]];
science[26] = [["What do you mean by Hydroponics?"], ["Plant growth in liquid culture medium.","Animal life in liquid culture medium.","Human life in liquid culture medium."]];
science[27] = [["The first scientist to apply scientific reasoning to cosmology was Rene Descartes. What was his theory called?"], ["Vortex Theory.","Bernoulli's theorem","Descartes Principle"]];
science[28] = [["How many orbitals present 5f subshell?"], ["7","8","2"]];
science[29] = [["What is the technique of separation of disrupted cell components?"], ["Fractionation.","Crystalization.","Filtration."]];
science[30] = [["In which year did Otto Von Guericke demonstrate his famous Magdeburg experiment dealing vacuum?"], ["1672","1972","1872"]];
science[31] = [["On which property of electrons does the electron microscope work?"], ["Wave nature","Particle Nature","Radioactive Nature"]];
science[32] = [["What is EM?"], ["Electron microscope.","Electro-Magnetic.","Electron Motion."]];
science[33] = [["Who was the first to attack Newton's Corpuscular theory of light?"], ["Thomas Young","Otto Von Guericke","Rene Descartes"]];
science[34] = [["The element with the minimum atomic number having 8 electrons in the outer most shell is what?"], ["Neon","Helium","Xenon"]];
science[35] = [["Name two monocarpic plants which show gregarious flowering."], ["Bambusa tulda, Melocanna bambusoides.","Destenda maripoda, Iotamoda masupia","Bristopa cinida, Grinoc masupia"]];
science[36] = [["Who was the first person to design models of flying machine?"], ["Leonardo da Vinci.","Wright Brothers","Galilee Galielo"]];
science[37] = [["The s-orbital of the L shell is represented as what?"], ["2s","4s","6s"]];
science[38] = [["Under what system, organisms are provided with scientific means?"], ["Binomial nomenclature.","Scientific nomenclature.","Scientific Naming"]];
science[39] = [["Who in 1749 developed a method for making an artificial magnet?"], ["John canton.","Romer Kleist.","Brandon Stark."]];
science[40] = [["What is the maximum number of electrons in principal energy level?"], ["K-2, L-8, M-18, N-32.","S-2, P-8, D-18, F-32.","K-3, L-6, M-12, N-24."]];
science[41] = [["What is the name of that branch of Biology which devoted to identifying, naming and classifying organisms?"], ["Taxonomy.","Anatomy.","Dendrology."]];
science[42] = [["Hydrodynamica gave explanation of Bernoulli's theorem in 1738. Who was the first to suggest this theorem?"], ["Daniel Bernoulli","Michael Bernoulli","David Bernoulli"]];
science[43] = [["What is the atomic number of the element which has 3 electrons in its M shell?"], ["13","8","4"]];
science[44] = [["Who was the author of 'Man's place in nature'?"], ["Huxley.","Musschenbroek.","Pieter"]];
science[45] = [["Who invented Leyden jar?"], ["Pieter Van Musschenbroek and Ewald Georg von Kleist","Sir William Herschel and Homi J. Bhabha","Rene Descartes and Otto Von Guericke"]];
science[46] = [["Which atom has only one electron?"], ["Hydrogen","Helium -1","Lithium -2"]];
science[47] = [["Both living and the non-living are made of same elements and are governed by the similar physical laws. In which respect are they different?"], ["Level organization","Band organization","Round organization"]];
science[48] = [["Which famous Danish physicist in 1675 measured the speed of light?"], ["Romer","Einstein","Kleist"]];
science[49] = [["The path of the electron according to Niels Bohr's theory was called what?"], ["Orbit shell","Ring Shell","Planetry Shell"]];
science[50] = [["Expand the TMV."], ["Tobacco Mosaic Virus","Toranic Mastery Vaccine","Torr's Mundane Vector"]];
science[51] = [["What did Sir William Herschel discover in 1800?"], ["Infra-red radiation","X-Ray","The Radio"]];
science[52] = [["How many electrons can be accommodated in the M shell?"], ["18","12","8"]];
science[53] = [["What is DNA?"], ["Deoxyribonucleic acid","Daring Nutride Acid","Diabolical Neutrino Acid"]];
science[54] = [["In which year did G.S. Ohm formulate Ohm's law?"], ["1827","1927","1917"]];
science[55] = [["An electron jumps in to the next lower orbit when loses what?"], ["One quantum of energy","One packet of energy","One plank unit of energy"]];
science[56] = [["What is Histology?"], ["Study of tissues.","Study of history","Study of learning"]];
science[57] = [["In which year did A. Michelson and E. Morley conduct their experiment to verify the existence of ether?"], ["1887","1825","1907"]];
science[58] = [["How many orbitals are there in p-subshell?"], ["3","6","8"]];
science[59] = [["Which is the free living soil bacteria in fixes nitrogen?"], ["Azotobacter","Nitrobacter","Neobacter"]];
science[60] = [["Who in 1939 suggested the name meson for middle-weight particles?"], ["Homi J. Bhabha.","Pieter Van Musschenbroek","Ewald Georg von Kleist"]];
science[61] = [["The various orbitals of the same subshell will differ in what?"], ["In their direction orientation.","In their shape formation.","in their respective reaction"]];
science[62] = [["What is Physiology?"], ["The study of structure and functions.","The study of the brain and thinking.","The study of .wisdom and life"]];
science[63] = [["What is the importance of 2nd December 1942?"], ["The creation of the first controlled chain reaction.","The dropping of the Atomic Bomb","The death of Albert Einstein"]];
science[64] = [["Electron is looked upon as a cloud of negative charge according to what?"], ["Wave-mechanics theory","Wave-optics theory","Particle-mechanics theory"]];
science[65] = [["What is Cell Biology?"], ["The study of structure and reproduction of cells.","The study of cell creation and destruction.","The study of cell placement and magnification"]];
science[66] = [["Which philosopher conjectured that if the moon did not move, it would fall upon the earth?"], ["Anaxagoras","Thomas Young","Leonardo da Vinci"]];
science[67] = [["The subshell consisting of dumb-bell shaped orbitals is known as what?"], ["P-subshell","D-subshell","S-subshell"]];
science[68] = [["What do you mean by Genetics?"], ["The study of heredity and variations.","The study of life and death","The study of parents and children"]];
science[69] = [["Who said, “A bird is an instrument working according to the mathematical laws”?"], ["Leonardo da Vinci.","Anaxagoras","Otto Von Guericke"]];
science[70] = [["The region of space around the nucleus where there is a high probability of finding an electron is called what?"], ["Orbital","Planetary Circle","Electron Ring"]];
science[71] = [["Write a Radio isotope"], ["I-131","Q-223","A-541"]];
science[72] = [["Who said, “All falling bodies, irrespective of their size, descend at the same speed”?"], ["Galileo Galilei.","Isaac Newton","Aristotle"]];
science[73] = [["The major shell-wise electronic configuration of element with the atomic number 15 is what?"], ["2, 8, 5.","3, 5, 7.","2, 5, 7."]];
science[74] = [["How does the living and non-living resemble up to the level organization?"], ["Molecules and compounds","Creation and Destruction","Cell walls and Orbitals"]];
science[75] = [["Which Austrian physicist developed the philosophy that all knowledge is simply sensation?"], ["Ernest Mach","William Herschel","Homi Bhabha"]];
science[76] = [["Who put forward the principle of uncertainty?"], ["Werner Heisenberg","Nikola Tesla","Albert Einstein"]];
science[77] = [["What number of chemicals are present in a cell?"], ["About 5000.","About 2000.","About 10000."]];
science[78] = [["Who contemplated “A freely floating magnet orients itself in the north-south direction?"], ["Robert Norman","Ernest Mach","Thomas Alva"]];
science[79] = [["When does electron leaves an orbital and jumps in to another?"], ["When its energy changes","When its energy reduces","When its energy increases"]];
science[80] = [["Write an example of homeostasis"], ["Sweating during exercise.","Sleeping and waking up.","Food digestion."]];
science[81] = [["Who gave the idea “Electricity flows through space from heated metal”?"], ["Thomas Edison.","Victor de Broglie","Robert Norman"]];
science[82] = [["The electronic configuration of an atom is 2, 8, and 2. What is its atomic number?"], ["12","25","13"]];
science[83] = [["Which is called blue-print of information?"], ["DNA","RNA","Cells"]];
science[84] = [["“Moving particles have wave characteristics.” Who proposed the idea first?"], ["Victor de Broglie","Robert Norman","Ernest Mach"]];
science[85] = [["Orbitals are regions of space round the nucleus where the probability of finding an electron is?"], ["Maximum","Minimum","Average"]];
science[86] = [["Which cells are programmed to die during embryonic stage?"], ["Vessel elements.","Compact elements","Blind elements"]];
science[87] = [["Who suggested that light is made up of packets of energy known as protons?"], [" Albert Einstein.","Nikola Tesla.","Max Plank."]];
science[88] = [["What are the integers used to express the energy, posit, etc. of an electron?"], ["Quantum numbers.","Quantum packets.","Quantum nodes."]];
science[89] = [["Why can virus not be cultured in totally artificial medium?"], ["It lacks machinery to use genetic information.","They behave abnormally","They are too small"]];
science[90] = [["Who first gave the concept of 'Atom'?"], ["Kanada","John Dalton","Neils Bohr"]];
science[91] = [["The steady state from which no spontaneous change takes place is called what?"], ["Equilibrium","Rest","Flacidity"]];
science[92] = [["What are seedless plants called?"], ["Cryptogams.","Impoverts","Placidic"]];
science[93] = [["How many times is the proton heavier than the electron?"], ["1836 times","2000 times","5021 times"]];
science[94] = [["What is the color of ammonium chloride?"], ["White","Brown","Milky"]];
science[95] = [["What is Dendrology?"], ["The study of trees","Dentistry","The study of mammals"]];
science[96] = [["What is AMU?"], ["It is the unit of atomic mass.","",""]];
science[97] = [["The chemical reactions which never go to completion are called what?"], ["Reversible reactions.","Irreversible reactions","Exothermic Reactions"]];
science[98] = [["Whose contributions through her mastery of X-ray crystallography were crucial to arguably the greatest discovery of the 20th century, but did not win her the recognition she deserved?"], ["Rosalind Franklin","Marie Curie","Sandra Milkonach"]];
science[99] = [["Whose pea plant experiments established many of the rules of heredity?"], ["Gregor Medel","Charles Darwin","Roberto Firmino"]];

const scienceQuestions = [];

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

    opt[0].textContent = scienceQuestions[y][1][optiona];
    opt[1].textContent = scienceQuestions[y][1][optionb];
    opt[2].textContent = scienceQuestions[y][1][optionc];
}

//VARIABLES FOR THE CHOICE, ANSWER, AND IF YOU'VE ANSWERED
let answered;
let answer;
let choice;

export function startScience(){
    score = 0;
    scorez.textContent = score;

    y=19

    //EMPTYING THE SCIENCE QUESTIONS ARRAY SO I CAN FILL IT WITH NEW QUESTIONS
    for(let i = 0; i<scienceQuestions.length; i++){
        scienceQuestions.pop();
    }

    //FILLING THE ARRAY WITH 20 QUESTIONS
    for(let i = 0; i<20; i++){
        let random = Math.floor(Math.random() * 100);
        scienceQuestions.push(science[random]);
    }

    //RESETING THE COLORS OF THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].style.backgroundColor = 'var(--five)';
    }

    //SETTING THE ANSWERED AS FALSE BY DEFAULT
    answered = false;

    questionz.textContent = scienceQuestions[y][0];
    getOptions();
    questionCount = 1;
    countQuestion.textContent = questionCount;
}

export function continueScience(){
    //MAKING SURE AN ANSWER IS SELECTED
    if(answered == false) return;

    y = y-1;
    questionz.textContent = scienceQuestions[y][0];
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

export function checkScience(choice, answered, answer){
    if(answered == true) return;
    if(answer != scienceQuestions[y][1][0]){
        choice.style.backgroundColor = 'var(--three)';
        remarkDisplay();
    }else{
        choice.style.backgroundColor = 'green';
        score += 1;
        scorez.textContent = score;
        remarkBox.textContent = "Keep Doing Good";
    }
    for(let i =0; i<opt.length; i++){
        if(opt[i].textContent == scienceQuestions[y][1][0]){
            opt[i].style.backgroundColor = 'green';
        }
    }
}

opt[0].addEventListener('click', ()=>{
    choice = opt[0];
    answer = opt[0].textContent;
    switch (topic) {
        case 'Science':
            checkScience(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[1].addEventListener('click', ()=>{
    choice = opt[1];
    answer = opt[1].textContent;
    switch (topic) {
        case 'Science':
            checkScience(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[2].addEventListener('click', ()=>{
    choice = opt[2];
    answer = opt[2].textContent;
    switch (topic) {
        case 'Science':
            checkScience(choice, answered, answer);
        break;
    }
    answered = true;
})
export{science};