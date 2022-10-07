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

const football = [];

football[0] = [['Which player scored the fastest hat-trick in the Premier League?'],['Sadio Mane','Sergio Aguero','Wayne Rooney']]
football[1] = [['Which player, with 653 games, has made the most Premier League appearances?'],['Gareth Barry','Ryan Giggs','John Terry']]
football[2] = [["With 260 goals, who is the Premier League's all-time top scorer?"],['Alan Shearer','Sergio Aguero','Wayne Rooney']]
football[3] = [['Which team won the first Premier League title?'],['Manchester United','Liverpool','Arsenal']]
football[4] = [['The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?'],['Shane Long','Luis Suarez','Michael Owen']]
football[5] = [['Three countries have won the World Cup twice. Can you name them?'],['Argentina, France and Uruguay','Argentina, Germany and Uruguay','Brazil, Germany and Uruguay']]
football[6] = [["In which World Cup did Diego Maradona score his infamous 'Hand of God' goal?"],["Mexico 1986","England 1986","England 1982"]]
football[7] = [["Which country has appeared in three World Cup finals, but never won the competition?"],["Netherlands","Belgium","Wales"]]
football[8] = [["Which Swedish footballer once had a clause inserted into his Premier League contract that prohibited him from travelling into space?"],["Stefan Schwarz","Mike Stocklom","Wilder Boonman"]]
football[9] = [["Messi famously retired from international duty in which year before reversing his decision?"],["2016","2014","2015"]]
football[10] = [["Messi wore the No.30 at the start of his Barca career and was also No.10. What other number has he worn for the club?"],["19","25","17"]]
football[11] = [["Messi has won a record number of Ballon d'Or awards - how many? "],["7","6","8"]]
football[12] = [["Who is the only player to win the Champions League with three different clubs?"],["Clarence Seedorf","Paolo Maldini","Samuel Eto'o"]]
football[13] = [["In which season was the European Cup rebranded as the Champions League?"],["1992-93","1993-94","1994-95"]]
football[14] = [["Which outfield player appeared in the Champions League final in three different decades?"],["Ryan Giggs","Steven Gererd","Frank Lampard"]]
football[15] = [["It took Cristiano Ronaldo 27 games to score his first Champions League goal."],["True","False","Undecided"]]
football[16] = [["The phrase 'park the bus' arose when Jose Mourinho was forced to park the Chelsea team bus after the bus driver fell ill."],["False","True","Undecided"]]
football[17] = [["Singer in Irish boyband Westlife Nicky Byrne played for Leeds United before moving into music."],["True","False","Undecided"]]
football[18] = [["Sir Alex Ferguson managed the Scotland national team."],["True","False","Undecided"]]
football[19] = [["Liverpool legend Kenny Dalglish is known as 'King Kenny' because he is related to the British Royal Family."],["False","True","Undecided"]]
football[20] = [["Frank Lampard has scored more Premier League goals than Thierry Henry, Robbie Fowler and Michael Owen."],["True","False","Undecided"]]
football[21] = [["Bayern Munich star Thomas Muller is a keen chess player and once won a Bavarian chess tournament."],["False","True","Undecided"]]
football[22] = [["Former Brazil and Barcelona star Ronaldinho spent time in prison after being found to have used a fake passport."],["True","False","Undecided"]]
football[23] = [["David Beckham took ballet lessons during his time at Manchester United in order to improve his agility."],["False","True","Undecided"]]
football[24] = [["Brazil icon Pele once starred in a Hollywood movie alongside Michael Caine and Sylvester Stallone."],["True","False","Undecided"]]
football[25] = [["I've played in Germany, Italy, Austria and France. I have won Serie A and scored the first ever Golden Goal in international football."],["Oliver Bierhoff","Milkonas Klose","Balack Ryan II"]]
football[26] = [["I've worn numbers 7, 17, 28 and 9 in my career, playing my football across, England, Spain, Italy and Portugal."],["Cristiano Ronaldo","Luis Figo","Matthew Fernandez"]]
football[27] = [["I was the first Liverpool player to win the Ballon d'Or. I scored 40 goals for my country and have played in England and Spain."],["Michael Owen","Cesc Fabregas","Alexis Sanchez"]]
football[28] = [["I was originally a striker before becoming a defender. I played 11 seasons for the same club before managing them. I've won two Bundesliga titles and a Champions League."],["Jurgen Klopp","Julien Naglesmann","Thomas Tuchel"]]
football[29] = [["I have played for Chelsea and spent time playing in Turkey. I've been crowned African Footballer of the Year four times and the Africa Cup of Nations twice."],["Samuel Eto'o","Sadio Mane","Mohammed Salah"]]
football[30] = [["Manchester United famously wear red, but what colours did they wear before adopting red?"],["Green and Gold","Red and Gold","Red and Green"]]
football[31] = [["Which club is associated with 'Galacticos'?"],["Real Madrid","Inter Milan","Bayern Munich"]]
football[32] = [["Which MLS franchise team does David Beckham own?"],["Inter Miami","LA Galaxy","DC United"]]
football[33] = [["In Spanish football, what is 'the Pichichi'?"],["The award given to the top goalscorer","The award given for the best goal","The award given to best coach"]]
football[34] = [["RB Leipzig are otherwise known as...?"],["The Red Bulls","The Flying Bulls","The Strong Bulls"]]
football[35] = [["When was the first FIFA World Cup inaugurated?"],["1930","1926","1946"]]
football[36] = [["Who is the greatest footballer of all time ?"],["Lionel Messi","Cristiano Ronaldo","Jubemi Anthony"]]
football[37] = [["Which country is Lionel Messi from?"],["Argentina","Spain","Brazil"]]
football[38] = [["How many Golden Boots Has Lionel Messi won?"],["6","7","5"]]
football[39] = [["How many Pichichi has Lionel Messi won?"],["6","7","5"]]
football[40] = [["Which of them Never coached Barcelona"],["Carlo Ancelotti","Pep Guardiola","Ernesto Valverde"]]
football[41] = [["Who is football's highest goal scorer"],["Cristiano Ronaldo","Ali Dei","Lionel Messi"]]
football[42] = [["The latest edition of the Finalisimma was between which Countries?"],["Argentina and Italy","France and Crotia","England and Italy"]]
football[43] = [["Who was the man of the match in the latest edition of the Finalisimma"],["Lionel Messi","Angel Di Maria","Lautaro Martinez"]]
football[44] = [["How many teams played in the first Premier League season?"],["22","20","18"]]
football[45] = [["Which Spanish Club did Griezmann not play for?"],["Real Valadolid","Barcelona","Real Sociedad"]]
football[46] = [["Which club did Aguero not play for?"],["Boca Juniors","Atletico Madrid","Barcelona"]]
football[47] = [["Ernesto Valverde almost went unbeaten with Barca and lost only one game that season to who?"],["Levante","Real Madrid","Sevilla"]]
football[48] = [["Coutinho scored only 1 Hattrick for Barcelona against which club?"],["Levente","Osasuna","Celta Vigo"]]
football[49] = [["Which of this club isn't in Catalonia"],["Mallorca","Espanol","Girona"]]
football[50] = [["Lionel Messi scored 5 goals in the UCL against?"],["Bayern Leverkusen","Arsenal","Dynamo Kyiv"]]
football[51] = [["Who was the first Egyptian to score in the Premier League,"],["Mido","Mo Salah","El Neny"]]
football[52] = [["How many clubs have won a game 9-0 in the EPL"],["3","2","4"]]
football[53] = [["Who has scored against the most teams in the Champions League"],["Lionel Messi","Cristiano Ronaldo","Zlatan Ibrahimovic"]]
football[54] = [["Whish of the following is a valid Messi record"],["Most goals in UCL group stage","Most goals in UCL","Most assist in UCL"]]
football[55] = [["Ronaldo's first senior Hattrick was against which club?"],["Newcastle United","Norwich FC,","Sevilla FC"]]
football[56] = [["Messi's first senior Hattrick was against which club?"],["Real Madrid","Sevilla FC","Girona FC"]]
football[57] = [["Who won the 2018 Ballon D'or award"],["Luka Modric","Lionel Messi","Cristiano Ronaldo"]]
football[58] = [["Which amongst the 3 has a World Cup trophy"],["Samuel Umtiti","Lionel Messi","Cristiano Ronaldo"]]
football[59] = [["Which amongst the 3 does not have a world cup award"],["Cristiano Ronaldo","Lionel Messi","Harry Kane"]]
football[60] = [["Who scored the goal against Brazil in the 2021 Copa America Final"],["Di Maria","Lionel Messi","Rodrigo De Paul"]]
football[61] = [["Who scored the only goal in the FIFA World Cup FInal 2010"],["Andres Iniesta","David Villa","Xavi Hernandez"]]
football[62] = [["Has Victor Moses got a Premier League medal?"],["Yes","No","Idk man!"]]
football[63] = [["Did Michael Owen win the Premier League?"],["No","Yes","Idk man!"]]
football[64] = [["Did Stephen Gerrard win the title?"],["NO","YES","Idk man!"]]
football[65] = [["Has Gerard Piqué got a Premier League medal?"],["YES","NO","Idk man!"]]
football[66] = [["Did Salomon Kalou win the Premier League?"],["YES","NO","Idk man!"]]
football[67] = [["“AGUEROOOOOO… I swear, you'll never see anything like this ever again!“ Against whom had Sergio just scored?"],["Queens Park Rangers","Leciester City","Manchester United"]]
football[68] = [["“Rooney! It defies description! How about 'sensational'? How about 'superb'?” Against whom had Wayne just scored?"],["Manchester City","Chelsea","Liverpool"]]
football[69] = [["How many Hattricks did Cristiano Ronaldo score in La Liga"],["34","60","21"]]
football[70] = [["Who has the record for highest league goals in a season in Europe?"],["Lionel Messi","Cristiano Ronaldo","Erling Haaland"]]
football[71] = [["How many league goals did Lionel Messi score to set the record for highest league goals in a season"],["50","48","39"]]
football[72] = [["Which manager has won the Champions League the most times?"],["Carlo Ancelotti","Zidene Zidane","Alex Ferguson"]]
football[73] = [["Who is the fastest player to reach 3 Premier League Hattricks"],["Erling Haaland","Sergio Aguero","Bobby CHartlon"]]
football[74] = [["What is the capacity of Valencia's Mestalla stadium?"],["55,000","60,000","65,000"]]
football[75] = [["Who is the most expensive signing in La Liga history?"],["Philippe Coutinho","Gareth Bale","Osumane Dembele"]]
football[76] = [["Which is the only club, other than Real Madrid and Barcelona, never to have played outside the Spanish top division?"],["Athletic Bilbao","Sevilla FC","Atletico Madrid"]]
football[77] = [["Which club is La Liga's third most successful team?"],["Atletico Madrid","Atlethic Bilbao","Valencia FC"]]
football[78] = [["Which company is the current main sponsor of La Liga?"],["Santander","1X Bet","Fly Emirates"]]
football[79] = [["Which season did Deportivo La Coruña win their sole La Liga title?"],["1999/2000","2000/2001","2001/2002"]]
football[80] = [["Who has made the most La Liga appearances?"],["Andoni Zubizarreta","Inaki Williams","Lionel Messi"]]
football[81] = [["Who is the only African footballer to win the La Liga Golden Boot?"],["Samuel Eto'o","George Weah","Jay Jay Okocha"]]
football[82] = [["In what year was La Liga formed?"],["1929","1930","1926"]]
football[83] = [["What year did Lionel Messi make his Barca debut?"],["2004","2005","2006"]]
football[84] = [["What year did Real Madrid sign Gareth Bale"],["2009","2010","2008"]]
football[85] = [["After Barca, who has won the most Copa Del Rey?"],["Atlethic Bilbao","Real Madrid","Atletico Madrid"]]
football[86] = [["Who is the most expensive signing in Bundesliga history?"],["Lucas Hernandez","Jude Bellignham","Mario Gotze"]]
football[87] = [["Who were the Bundesliga's only remaining ever-present team until their relegation in 2018?"],["Hamburger SV","RB Lepzig","Union Berlin"]]
football[88] = [["In 2015, how many minutes did it take Robert Lewandowski to score five goals for Bayern Munich against Wolfsburg?"],["9","17","16"]]
football[89] = [["Who scored the winner in the all-Bundesliga Champions League final between Bayern Munich and Borussia Dortmund at Wembley in 2013?"],["Arjen Robben","Frank Ribery","Thomas Muller"]]
football[90] = [["Who is the all-time top scorer in the Bundesliga?"],["Gerd Muller","Robert Lewandowski","Milkonas Klose"]]
football[91] = [["Who are Germany's second most successful team?"],["Nuremberg","Dortmund","Union Berlin"]]
football[92] = [["Between 2009-2019, which player scored in every calendar year of the Bundesliga?"],["Claudio Pizarro","Robert Lewandowski","Thomas Muller"]]
football[93] = [["Which manager took Mainz to their highest ever league finish?"],["Thomas Tuchel","Jurgen Klopp","Julien Naglesmann"]]
football[94] = [["How many teams are there in Germany's top flight?"],["18","20","21"]]
football[95] = [["How many times have Bayern Munich won the Bundesliga?"],["29","34","39"]]
football[96] = [["What year was the Bundesliga founded?"],["1963","1941","1920"]]
football[97] = [["What is the capacity of Borussia Dortmund's Signal Iduna Park?"],["81,000","70,000","86,500"]]
football[98] = [["Which Bundesliga club has a live goat for a mascot?"],["Cologne","Hamburger SV","Hoffeim"]]
football[99] = [["2 players have scored 4 goals or more in the UCL twice, who are they?"],["Robert Lweandowski & Lionel Messi","Cristiano Ronaldo & Lionel Messi","Erling Haaland & Lionel Messi"]]

const footballQuestions = [];

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

        opt[0].textContent = footballQuestions[y][1][optiona];
        opt[1].textContent = footballQuestions[y][1][optionb];
        opt[2].textContent = footballQuestions[y][1][optionc];
} 

//VARIABLES FOR THE CHOICE, ANSWER, AND IF YOU'VE ANSWERED
let answered;
let answer;
let choice;

export function startFootball(){
    score = 0;
    scorez.textContent = score;

    y=19

    //EMPTYING THE FOOTBALL QUESTIONS ARRAY SO I CAN FILL IT WITH NEW QUESTIONS
    for(let i = 0; i<footballQuestions.length; i++){
        footballQuestions.pop();
    }

    //FILLING THE ARRAY WITH 20 QUESTIONS
    for(let i = 0; i<20; i++){
        let random = Math.floor(Math.random() * 100);
        footballQuestions.push(football[random]);
    }

    //RESETING THE COLORS OF THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].style.backgroundColor = 'var(--five)';
    }

    //SETTING THE ANSWERED AS FALSE BY DEFAULT
    answered = false;

    questionz.textContent = footballQuestions[y][0];
    getOptions();
    questionCount = 1;
    countQuestion.textContent = questionCount;
}

export function continueFootball(){
    //MAKING SURE AN ANSWER IS SELECTED
    if(answered == false) return;

    y = y-1;
    questionz.textContent = footballQuestions[y][0];
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

export function checkFootball(choice, answered, answer){
    if(answered == true) return;
    if(answer != footballQuestions[y][1][0]){
        choice.style.backgroundColor = 'var(--three)';
        remarkDisplay();
    }else{
        choice.style.backgroundColor = 'green';
        score += 1;
        scorez.textContent = score;
        remarkBox.textContent = "Keep Doing Good";
    }
    for(let i =0; i<opt.length; i++){
        if(opt[i].textContent == footballQuestions[y][1][0]){
            opt[i].style.backgroundColor = 'green';
        }
    }
}

opt[0].addEventListener('click', ()=>{
    choice = opt[0];
    answer = opt[0].textContent;
    switch (topic) {
        case 'Football':
            checkFootball(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[1].addEventListener('click', ()=>{
    choice = opt[1];
    answer = opt[1].textContent;
    switch (topic) {
        case 'Football':
            checkFootball(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[2].addEventListener('click', ()=>{
    choice = opt[2];
    answer = opt[2].textContent;
    switch (topic) {
        case 'Football':
            checkFootball(choice, answered, answer);
        break;
    }
    answered = true;
})
export{football};