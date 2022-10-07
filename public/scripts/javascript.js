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

const javascript = [];

javascript[0] = [["JavaScript is the programming language of the"], ["Web","Desktop","Server"]];
javascript[1]  = [["JavaScript language is not?"], ["Object-based","Object-oriented","Object-manufactured"]];
javascript[2]  = [["Which of the following statement(s) is true about the JavaScript?"], ["Scripting language used to make the website interactive","Advanced version of Java for Desktop and Mobile application development","Markup language of Java to develop the webpages"]];
javascript[3]  = [["In which HTML element do we put the JavaScript code?"], ["<script>...</script>","<javascript>...</javascript>","<js>...</js>"]];
javascript[4]  = [["JavaScript code can be written in?"], ["JavaScript file and in HTML document directly","HTML document directly","JavaScript file (.js file)"]];
javascript[5]  = [["Which symbol is used to separate JavaScript statements?"], ["Semicolon (;)","Colon (:)","Comma (,)"]];
javascript[6]  = [["Which symbol is used to seperate JavaScript Array elements?"], ["Comma (,)","Colon (:)","Semicolon (;)"]];
javascript[7]  = [["JavaScript ignores?"], ["newlines","hyphen","semicolon"]];
javascript[8]  = [["Which is the correct syntax to call an external JavaScript file in the current HTML document?"], ["<script src='jsfile.js'></script>","<import src='jsfile.js'></import>","<script link=' jsfile.js'></script>"]];
javascript[9]  = [["Which JavaScript method is used to access an HTML element by id?"], ["getElementById(id)","getElementById()","getElement(id)"]];
javascript[10] = [["Which property is used to define the HTML content to an HTML element with a specific id?"], ["innerHTML","innerText","elementText"]];
javascript[11] = [["Which JavaScript method is used to write HTML output?"], ["document.write()","console.log()","document.writeHTML()"]];
javascript[12] = [["Which JavaScript operator is used to determine the type of a variable?"], ["typeof","TypeOf","typeOf"]];
javascript[13] = [["JavaScript objects are written with?"], ["curly brackets {}","round brackets ()","square brackets []"]];
javascript[14] = [["What will be the output of the following JavaScript code? \n<script> \n\tvar x = 10 + 20 * 5;\n\tdocument.getElementById('tes').innerHTML = x;\n</script>"], ["110","150","Error"]];
javascript[15] = [["Which is the exponentiation operator in JavaScript?"], ["**","^","exp()"]];
javascript[16] = [["What is the default value of an uninitialized variable?"], ["Undefined","null","0"]];
javascript[17] = [["In JavaScript, multi-line comments start with __ and end with ___."], ["/* and */","<!—and -->","// and //"]];
javascript[18] = [["Which JavaScript method is used to write into an alert box?"], ["window.alert()","window.alertContent()","window.alertHTML()"]];
javascript[19] = [["How many keywords are there in JavaScript to declare variables or constants?"], ["3","2","4"]];
javascript[20] = [["The const keyword is used to define a ______."], ["Constant","Function scopes variable","Constant with no initial value"]];
javascript[21] = [["What is the output of the following JavaScript code?\n\t let a\n\t document.getElementById('demo').innerHTML = a+1;"], ["NaN","undefined","1"]];
javascript[22] = [["What is the output of the following JavaScript code (let example)? \nlet a = 10;\nlet a = 0; "], ["SyntaxError","undefined","0"]];
javascript[23] = [["What will be the output of the following JavaScript code? \nlet x = 5;\ndocument.getElementById('demo').innerHTML = x--;"], ["4","TypeError","5"]];
javascript[24] = [['What is the use of this JavaScript statement?\n\n <button onclick="window.print()">Submit</button>'], ['It will print the content of the current page','It will write "Submit" on the current Window',"It will write the content of the current page in the browser's console"]];
javascript[25] = [['In JavaScript, single line comment begins with ___.'], ['//','#','/*']];
javascript[26] = [["Why so JavaScript and Java have a similar name?"], ["JavaScript's syntax is loosely based on Java's","JavaScript is a stripped-down version of Java","They both originated on the island of Java"]];
javascript[27] = [["When a user views a page containing a JavaScript program, which machine actually executes the script?"], ["The User's machine running a Web browser","The Web server","A central machine deep within Netscape's corporate offices"]];
javascript[28] = [[" ______ JavaScript is also called client-side JavaScript."], ["Navigator","LiveWire","Native"]];
javascript[29] = [[" ______ JavaScript is also called server-side JavaScript."], ["LiveWire","Microsoft","Native"]];
javascript[30] = [["What are variables used for in JavaScript Programs?"], ["Storing numbers, dates, or other values","Varying randomly","Causing high-school algebra flashbacks"]];
javascript[31] = [["_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse clicks, form input, and page navigation."], ["Client-side","Local","Server-side"]];
javascript[32] = [["Which of the following can't be done with client-side JavaScript?"], ["Storing the form's contents to a database file on the server","Validating a form","Sending a form's contents by email"]];
javascript[33] = [[" ___ tag is an extension to HTML that can enclose any number of JavaScript statements."], ["<SCRIPT>","<HEAD>","<BODY>"]];
javascript[34] = [["How does JavaScript store dates in a date object?"], ["The number of milliseconds since January 1st, 1970","None of the options","The number of days since January 1st, 1900"]];
javascript[35] = [["Which types of image maps can be used with JavaScript?"], ["Client-side image maps","Server-side image maps and Client-side image maps","Server-side image maps"]];
javascript[36] = [["Which of the following navigator object properties is the same in both Netscape and IE?"], ["navigator.appCodeName","navigator.appVersion","navigator.appName"]];
javascript[37] = [["What does the <noscript> tag do?"], ["Enclose text to be displayed by non-JavaScript browsers.","Describes certain low-budget movies.","Prevents scripts on the page from executing."]];
javascript[38] = [["JavaScript entities start with ____ and end with _____."], ["Ampersand, semicolon","Semicolon, colon","Semicolon, Ampersand"]];
javascript[39] = [["Choose the server-side JavaScript object?"], ["File Upload","Import","Function"]];
javascript[40] = [["Which of the following is not considered a JavaScript operator?"], ["this","type of","delete"]];
javascript[41] = [["______method evaluates a string of JavaScript code in the context of the specified object."], ["Eval","ParseInt","ParseFloat"]];
javascript[42] = [["Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?"], ["onblur","onfocus","ondblclick"]];
javascript[43] = [["The syntax of Eval is ________"], ["[objectName.]eval(string)","[objectName.]eval(numeriC.","[EvalName.]eval(string)"]];
javascript[44] = [["JavaScript is interpreted by _________"], ["Client","Server","Object"]];
javascript[45] = [["Using _______ statement is how you test for a specific condition."], ["if","for","switch"]];
javascript[46] = [["Which of the following is the structure of an if statement?"], ["if (conditional expression is true)   {then execute this code>->}","if (the conditional expression is true) then {execute this code}","if (the conditional expression is true)execute this code end if"]];
javascript[47] = [["How to create a Date object in JavaScript?"], ["dateObjectName = new Date([parameters])","dateObjectName Date([parameters])","dateObjectName.new Date([parameters])"]];
javascript[48] = [["The _______ method of an Array object adds and/or removes elements from an array."], ["Splice","Slice","Shift"]];
javascript[49] = [["To set up the window to capture all Click events, we use which of the following statement?"], ["window.captureEvents(Event.CLICK);","window.handleEvents (Event.CLICK);","window.routeEvents(Event.CLICK);"]];
javascript[50] = [["_________ is a wrapped Java array, accessed from within JavaScript code."], ["JavaArray","JavaClass","JavaObject"]];
javascript[51] = [[" A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript ."], ["JavaClass","JavaArray","JavaPackage"]];
javascript[52] = [["Is it possible to nest functions in JavaScript?"], ["True","False","Undecided"]];
javascript[53] = [["Scripting language is"], ["High-Level Programming language","Machine level programming language","Assembly Level programming language"]];
javascript[54] = [["Which best explains getSelection()?"], ["Returns the value of the cursor-selected text","Returns the VALUE of a selected OPTION.","Returns document.URL of the window in focus."]];
javascript[55] = [["What is mean by “this” keyword in javascript?"], ["It refers to the current object","It refers to the previous object","It is a variable which contains the value"]];
javascript[56] = [["In JavaScript, Window.prompt() method return true or false value ?"], ["False","True","Undecided"]];
javascript[57] = [["document.write(navigator.appCodeName);"], ["get code name of the browser of a visitor","get code name of the browser of a server","set code name of the browser of a visitor"]];
javascript[58] = [["The syntax of a blur method in a button object is _______"], ["Blur()","Blur(value)","Blur(depth)"]];
javascript[59] = [[" _______ class provides an interface for invoking JavaScript methods and examining JavaScript properties."], ["JSObject","Jobject","ScriptObject"]];
javascript[60] = [["JavaScript arrays are written with _____."], ["square brackets []","round brackets ()","curly brackets {}"]];
javascript[61] = [["JavaScript types are _____."], ["Dynamic","Static","Remotely"]];
javascript[62] = [["Which JavaScript method is used to write on browser's console?"], ["console.log()","console.write()","console.output()"]];
javascript[63] = [["Can be redeclare a variable that is declared with let keyword?"], ["Yes","No","Uhmmm?"]];
javascript[64] = [["If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?"], ["para1.value=”New Text”;","para1.firstChild.nodeValue= “New Text”;","“New Text”?"]];
javascript[65] = [["Which of the following best describes JavaScript?"], ["an object-oriented scripting language.","a scripting language precompiled in the browser.","a compiled scripting language."]];
javascript[66] = [[" _______ is the tainted property of a window object."], ["Default status","Pathname","Protocol"]];
javascript[67] = [["Which is the correct JavaScript statement to display 'Hello Boss!' into an alert box?"], ["alert('Hello Boss!');","alert(Hello Boss!);","alert(Text:'Hello Boss!');"]];
javascript[68] = [["x=4+'4';\ndocument.write(x); \n\nOutput——?"], ["44","undefined","4'4'"]];
javascript[69] = [["Which keyword is used to define a JavaScript function?"], ["function","func","module"]];

const javascriptQuestions = [];

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

        opt[0].textContent = javascriptQuestions[y][1][optiona];
        opt[1].textContent = javascriptQuestions[y][1][optionb];
        opt[2].textContent = javascriptQuestions[y][1][optionc];
} 

//VARIABLES FOR THE CHOICE, ANSWER, AND IF YOU'VE ANSWERED
let answered;
let answer;
let choice;

export function startJavascript(){
    score = 0;
    scorez.textContent = score;

    y=19

    //EMPTYING THE JAVASCRIPT QUESTIONS ARRAY SO I CAN FILL IT WITH NEW QUESTIONS
    for(let i = 0; i<javascriptQuestions.length; i++){
        javascriptQuestions.pop();
    }

    //FILLING THE ARRAY WITH 20 QUESTIONS
    for(let i = 0; i<20; i++){
        let random = Math.floor(Math.random() * 70);
        javascriptQuestions.push(javascript[random]);
    }

    //RESETING THE COLORS OF THE OPTIONS
    for(let i =0; i<opt.length; i++){
        opt[i].style.backgroundColor = 'var(--five)';
    }

    //SETTING THE ANSWERED AS FALSE BY DEFAULT
    answered = false;

    questionz.textContent = javascriptQuestions[y][0];
    getOptions();
    questionCount = 1;
    countQuestion.textContent = questionCount;
}

export function continueJavascript(){
    //MAKING SURE AN ANSWER IS SELECTED
    if(answered == false) return;

    y = y-1;
    questionz.textContent = javascriptQuestions[y][0];
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

export function checkJavascript(choice, answered, answer){
    if(answered == true) return;
    if(answer != javascriptQuestions[y][1][0]){
        choice.style.backgroundColor = 'var(--three)';
        remarkDisplay();
    }else{
        choice.style.backgroundColor = 'green';
        score += 1;
        scorez.textContent = score;
        remarkBox.textContent = "Keep Doing Good";
    }
    for(let i =0; i<opt.length; i++){
        if(opt[i].textContent == javascriptQuestions[y][1][0]){
            opt[i].style.backgroundColor = 'green';
        }
    }
}

opt[0].addEventListener('click', ()=>{
    choice = opt[0];
    answer = opt[0].textContent;
    switch (topic) {
        case 'Javascript':
            checkJavascript(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[1].addEventListener('click', ()=>{
    choice = opt[1];
    answer = opt[1].textContent;
    switch (topic) {
        case 'Javascript':
            checkJavascript(choice, answered, answer);
        break;
    }
    answered = true;
})

opt[2].addEventListener('click', ()=>{
    choice = opt[2];
    answer = opt[2].textContent;
    switch (topic) {
        case 'Javascript':
            checkJavascript(choice, answered, answer);
        break;
    }
    answered = true;
})
export{javascript};