const remarkBox = document.querySelector('#remark');

const remark = [
    "He thinks he's him",
    "You're not that guy",
    "You're not him",
    "Blud thinks he's him",
    "You fell off man",
    "Bro fell like the rain",
    "Blud thought he got it",
    "Bro thought he got it",
    "You're not that guy",
    "He think's he's smart",
    "Blud thinks he's smart",
    "Blud thought he got it",
    "Want a tissue?",
    "You're not him",
    "Give up bro",
    "Bro thinks he's him",
    "Lol, why though?",
    "Kinda knew you'd take an L",
    "Gonna cry right?",
    "Just stop man..."
];

function remarkDisplay(){
    let rand = Math.floor(Math.random() * remark.length);
    remarkBox.textContent = remark[rand];
}

export{remarkBox, remark, remarkDisplay};