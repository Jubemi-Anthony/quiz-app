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

const human = [];

human[0] = [["The lungs of the human body are situated within which cavity of the chest?"], ["Thoracic cavity","Respiral cavity","Cardiac cavity"]];
human[1]  = [["What is the other name of the adrenal glands?"], ["Suprarenal glands","Superenal glands","Multirenal glands"]];
human[2]  = [["A grain of a sand-sized piece of brain tissue has how many neurons and 1 billion synapses, all of which communicate with one another?"], ["100,000","1,000,000","10,000"]];
human[3]  = [["What are the large air tubes leading from the trachea to the lungs?"], ["Bronchi","Veins","Arteries"]];
human[4]  = [["What is the ability to sense the orientation of your body in your environment called?"], ["Proprioception","Photo Perception","Echo Perception"]];
human[5]  = [["We shed thousands of skin cells each minute, how much?"], ["30,000 to 40,000 per minute","40,000 to 50,000 per minute","50,000 to 60,000 per minute"]];
human[6]  = [["Prior to the Renaissance period, the voice was thought to be coming out from which organ?"], ["Heart","Brain","Lungs"]];
human[7]  = [["Before the invention of which instrument, doctors had to press their ears directly to each patient's chest?"], ["Stethoscope","Microscope","Thermometer"]];
human[8]  = [["Melatonin inhibits the release of pituitary reproductive hormones, known as what?"], ["Gonadotropins","Serotonin","Adrenalin"]];
human[9]  = [["The smallest bones in the human body are found in which organ of the human body?"], ["Ears","Pinky Toe","Heart (Make's it beat)"]];
human[10] = [["Pinealocytes are found in which organ of the body?"], ["Pineal gland","Pinoic gland","Placidic gland"]];
human[11] = [["The primary organs of balance, known as what?"], ["Vestibular system","Ear echonactor","Plasma Skeletal System"]];
human[12] = [["What is a brain part at the base of the brain?"], ["Hypothalamus","Cerebral Core","Rear Mundane"]];
human[13] = [["How many parathyroid glands do humans have?"], ["4","6","100,000"]];
human[14] = [["Commonly, the right atrium and ventricle of the heart are referred to together as to what?"], ["The right heart","The Main Vein","The Throat"]];
human[15] = [["Vocal cords are now more accurately known as what?"], ["Vocal folds","Voice Box","Wind Pipe"]];
human[16] = [["The right lung is bigger than the left."], ["True","False","Undecided"]];
human[17] = [["All brain cells are the same."], ["False","True","Undecided"]];
human[18] = [["How many people in the UK have Chronic Kidney Disease (CKD)?"], ["Around 3 million","Around 6 million","Around 5 million"]];
human[19] = [["Which of the body parts of the average adult is around 22 feet long?"], ["The small intestine","The large intestine","The wind pipe"]];
human[20] = [["The first study showing the benefits of a vegetarian diet appears in which book?"], ["The Bible's Book of Daniel (600 BCE)","The Green Meal (709 BCE)","Bones or Sticks ? (1100 AD)"]];
human[21] = [["Which organ of the body was commonly dubbed the third eye?"], ["The pineal gland","The nose","The throat"]];
human[22] = [["Calcium crystals are a normal part of what body region?"], ["Ears","Kidney","Liver"]];
human[23] = [["Which gland of the body produces adrenaline hormone?"], ["Adrenal gland","Adrenal Cavity","Adrenaline Base"]];
human[24] = [["In September 2016, the Food and Drug Administration approved the first what for people with type 1 diabetes who are 14 and older?"], ["Artificial pancreas","Insulin","'The Sweet Venom' From the Amazon"]];
human[25] = [["Each neuron has the ability to transmit How many nerve impulses per second and form tens of thousands of synaptic connections with neighboring neurons?"], ["1,000","5,000","10,000"]];
human[26] = [["Analgesics is a disease caused by malfunctioning of which body organ?"], ["Kidneys","Liver","Small Intestine"]];
human[27] = [["Which organ of the body help keep your bones strong and healthy by helping produce an active form of vitamin D?"], ["Kidneys","Liver","Calcite Gland"]];
human[28] = [["The diaphragm, located below the lungs, is the major muscle used for what purpose?"], ["Respiration","Circulation","Digestion"]];
human[29] = [["Which hormone plays a key role in regulating the amount of calcium in the blood and within the bones?"], ["Parathyroid hormone","Calcite Hormone (secreted by the Calcite Gland)","Adrenaline"]];
human[30] = [["Normal anatomy of the human body includes what types of vocal folds?"], ["Both false vocal folds and true vocal folds","Only true vocal folds","Only false vocal folds that produces echonation"]];
human[31] = [["Your feet can sweat the equivalent of half a glass of water a day."], ["True","False","Lol.. WTF?"]];
human[32] = [["Which part of your body has the thickest skin?"], ["Palms and soles of your feet","Forehead","Buttocks"]];
human[33] = [["Veins are _____arteries"], ["Less muscular than","More muscular than","Just as muscular as"]];
human[34] = [["Immune cells lymphocytes are harbored in which organ of the body?"], ["Lymph Nodes","Kidney","Liver"]];
human[35] = [["The ________ sits above the hypothalamus"], ["Thalamus","Pituitary gland","Hyperthalamus"]];
human[36] = [["The hypothalamus sits above the pituitary gland."], ["True","False","Lol... WTF?"]];
human[37] = [["In a child of 3-4 years milk teeth do not include which type of teeth?"], ["Molar","Canine","Incisor"]];
human[38] = [["The number of heart attacks peaks on what date?"], ["Christmas Day","New Year's eve","The day of black sun"]];
human[39] = [["The bronchi's walls are made of what?"], ["Cartilage","Bones","Muscles"]];
human[40] = [["Which organ of the body breaks down estrogen and secretes it into bile, which enters the intestines for excretion?"], ["Liver","Kidney","Small Instestine"]];
human[41] = [["Zona glomerulosa, the zona fasciculata, and the zona reticularis are the parts of which glands of the body?"], ["Adrenal gland","Estrogen Gland","Endorphine Gland"]];
human[42] = [["The average poop happens once in how many hours?"], ["24","16","30"]];
human[43] = [["What type of gland is the mammary gland?"], ["Exocrine gland","Oxytocin Gland","Serotonin Gland"]];
human[44] = [["In humans, what is part of the digestive system and the conducting zone of the respiratory system?"], ["The pharynx","The Babel","The Vein"]];
human[45] = [["Without adequate cholesterol, brain cells die."], ["True","False","Lol... WTF?"]];
human[46] = [["Many of the muscles used for swallowing are also used for what?"], ["Talking","Chewing","Coughing"]];
human[47] = [["Which type of diabetes occurs when your immune system which is supposed to fight invading bacteria and viruses mistakenly starts attacking the insulin-producing cells in the pancreas?"], ["Type 1 diabetes","Type 4 diabetes","Type 2 diabetes"]];
human[48] = [["Contraction of which organ creates a vacuum, which pulls air into the lungs?"], ["Diaphragm","Pancreas","Respiral Cavity"]];
human[49] = [["What starts the digestive process?"], ["Saliva","Enzymes","Blood"]];
human[50] = [["Leonardo da Vinci is believed to draw the first depiction of which organ in his anatomical drawings in 1492?"], ["Appendix","Heart","Brain"]];
human[51] = [["What is the other name of the Pituitary Gland?"], ["Master gland","Mother's gland","Slippery gland"]];
human[52] = [["In which part of an eye a pigment is present which is responsible for brown, blue or black eyes?"], ["Iris","Cornea","Lens"]];
human[53] = [["What is the size of a normal heart valve?"], ["About the size of a half dollar","About the size of a dollar","About the size of 2 dollar notes"]];
human[54] = [["The prostate gland is about the size of a what?"], ["Walnut","Egg","Orange"]];
human[55] = [["What percent of the body's cholesterol resides within the brain?"], ["25%","10%","30%"]];
human[56] = [["How did Alexander the Great die?"], ["Gallbladder malfunctioning","Kidney Failure","Heart Attack"]];
human[57] = [["Kidneys filter how much blood every day"], ["Around 180 Liters","Around 500 Liters","Around 20 Liters"]];
human[58] = [["The Liver controls the production of red blood cells and release hormones that regulate your blood pressure."], ["False","True","Undecided"]];
human[59] = [["Which part of the pituitary gland is called the neurohypophysis?"], ["Posterior","Anterior","Middle"]];
human[60] = [["Of the 206 bones in the human body, the six smallest are found in which location of the body?"], ["Ears","Toes","Eyes"]];
human[61] = [["Pectoralis muscles are found in which organ of the body?"], ["Mammary gland","Male reproductive organ","The shoulder (for lubricaton)"]];
human[62] = [["Which organ passes through the thoracic cavity into the diaphragm into the stomach?"], ["Esophagus","The right Ventricle","The left Ventricle"]];
human[63] = [["Fluids we drink for hydrating the body coats and lubricate the vocal folds directly"], ["False","True","Undecided"]];
human[64] = [["Your eyes focus on how many different objects every second."], ["50","100","75"]];
human[65] = [["Plasma glucose and ammonia levels are regulated by which organ of the body?"], ["Liver","Kidney","Pectoralis Gland"]];
human[66] = [["In which organ of the human body are the lymphocytes cells formed?"], ["Bone Marrow","Liver","Kidney"]];
human[67] = [["Without what in your mouth, you wouldn't be able to taste a thing?"], ["Saliva","Teeth","Enzymes"]];
human[68] = [["Where is the mesorectum?"], ["Attached to the upper third of the rectum.","Attached to the lower third of the rectum.","Attached to the lower half of the rectum."]];
human[69] = [["Which colored urine indicates you are not drinking enough water"], ["Dark or honey-colored","Milky colored","Red colored"]];
human[70] = [["The hearing organ, called the cochlea, has 16,000 microscopic hair cells called what?"], ["Sterocilia","Antenna","Ear follicle"]];
human[71] = [["What is the average weight of a human brain?"], ["3 pounds","5 pounds","10 pounds"]];
human[72] = [["What is the ball and socket in the body?"], ["Types of joints","Types of bones","Types of myscles"]];
human[73] = [["People don't directly control their bones."], ["True","False","Undecided"]];
human[74] = [["What is the main way the nervous system controls the hormones in our bodies?"], ["Hypothalamus","Thalamus","Hyperthalamus"]];
human[75] = [["The most complex organ in the body is what?"], ["Brain","Heart","Ear"]];
human[76] = [["The heart is more complex than the eye"], ["False","True","Undecided"]];
human[77] = [["The eye is more complex than the Kidney"], ["True","False","Undecided"]];
human[78] = [["Insulin is produced in which organ of the body?"], ["Pancreas","Liver","Kidney"]];
human[79] = [["Young people of which years old are the bone marrow donors needed most?"], ["18-25","11-18","4-10"]];
human[80] = [["The most common problem with the pituitary gland is what?"], ["Tumer","Ages faster than the body","Failure due to dehydration"]];
human[81] = [["When whispering, your vocal folds work ______ than simply talking softly."], ["Harder","Lesser","Same"]];
human[82] = [["Signal-to-noise ratio is related to which part of the body?"], ["Ears","Eyes","Brain"]];
human[83] = [["Why can a tooth actually die?"], ["Teeth have their own blood supply and nerves.","Teeth are made of Dolomite which decays without calcium","They can't die bro.. lol"]];
human[84] = [["The typical brain comprises about what percent of the body's total weight?"], ["2%","5%","7%"]];
human[85] = [["What are bean-shaped and are around 10-12cm long (about the size of a clenched fist)?"], ["Kidneys","Lungs","Heart"]];
human[86] = [["What are the most flexible joints of the body?"], ["Hips and shoulders","Knee and Elbow","Anckle and Wrist"]];
human[87] = [["Your eyes can distinguish approximately how many different colors?"], ["10 million","20 million"," 5 million"]];
human[88] = [["Yellow fever is transmitted by which insects?"], ["Mosquitoes","House Flies","Locusts"]];
human[89] = [["Each hand has how many bones?"], ["27","35","42"]];
human[90] = [["Your nose will slowly sag and lengthen as you grow older."], ["True","False","Undecided"]];
human[91] = [["The unit used to measure loudness the decibel was named after whom?"], ["Alexander Graham Bell","McAllister Decibel","Miss Belle Donovan"]];
human[92] = [["A tooth that is knocked out dies within how many minutes?"], ["15","25","30"]];
human[93] = [["Which colored urine indicates the presence of blood and a much-needed visit to the doctor?"], ["Pink","Yellow","Red"]];
human[94] = [["What percent of your brain is made of water?"], ["73","90","75"]];
human[95] = [["During swallowing, which organ tilts backward to prevent food from going down the larynx and lungs?"], ["Epiglottis","Esophagus","Tongue"]];
human[96] = [["Most adults have how many ribs?"], ["24 ribs (12 pairs)","22 ribs (11 pairs)","12 ribs (6 pairs)"]];
human[97] = [["What is a fear of the eyes?"], ["Ommatophobia","Photosiphobia","Electophobia"]];
human[98] = [["Sweating for how long can temporarily shrink the brain as much as one year of aging?"], ["90 minutes","1 hour","12 hours"]];
human[99] = [["A human's thumb is as long as his or her"], ["Nose","Tongue","Big Toe"]];

const humanQuestions = [];

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

    opt[0].textContent = humanQuestions[y][1][optiona];
    opt[1].textContent = humanQuestions[y][1][optionb];
    opt[2].textContent = humanQuestions[y][1][optionc];
}

//VARIABLES FOR THE CHOICE, ANSWER, AND IF YOU'VE ANSWERED
let answered;
let answer;
let choice;

export function startHuman(){
    score = 0;
    scorez.textContent = score;

    y=19

    //EMPTYING THE HUMAN QUESTIONS ARRAY SO I CAN FILL IT WITH NEW QUESTIONS
    for(let i = 0; i<humanQuestions.length; i++){
        humanQuestions.pop();
    }

    //FILLING THE ARRAY WITH 20 QUESTIONS
    for(let i = 0; i<20; i++){
        let random = Math.floor(Math.random() * 100);
        humanQuestions.push(human[random]);
    }

    //RESETING THE COLORS OF THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].style.backgroundColor = 'var(--five)';
    }

    //SETTING THE ANSWERED AS FALSE BY DEFAULT
    answered = false;

    questionz.textContent = humanQuestions[y][0];
    getOptions();
    questionCount = 1;
    countQuestion.textContent = questionCount;
}

export function continueHuman(){
    //MAKING SURE AN ANSWER IS SELECTED
    if(answered == false) return;

    y = y-1;
    questionz.textContent = humanQuestions[y][0];
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

export function checkHuman(choice, answered, answer){
    if(answered == true) return;
    if(answer != humanQuestions[y][1][0]){
        choice.style.backgroundColor = 'var(--three)';
        remarkDisplay();
    }else{
        choice.style.backgroundColor = 'green';
        score += 1;
        scorez.textContent = score;
        remarkBox.textContent = "Keep Doing Good";
    }
    for(let i =0; i<opt.length; i++){
        if(opt[i].textContent == humanQuestions[y][1][0]){
            opt[i].style.backgroundColor = 'green';
        }
    }
}

opt[0].addEventListener('click', ()=>{
    choice = opt[0];
    answer = opt[0].textContent;
    switch (topic) {
        case 'Human':
            checkHuman(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[1].addEventListener('click', ()=>{
    choice = opt[1];
    answer = opt[1].textContent;
    switch (topic) {
        case 'Human':
            checkHuman(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[2].addEventListener('click', ()=>{
    choice = opt[2];
    answer = opt[2].textContent;
    switch (topic) {
        case 'Human':
            checkHuman(choice, answered, answer);
        break;
    }
    answered = true;
})
export{human};