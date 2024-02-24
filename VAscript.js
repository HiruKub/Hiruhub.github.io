
let x = 0;
let words;
function Starting(){
    displayRandomWord()
}
function HPVT(){
    switch (x) {
        case 0:
            words = "H";
            break;
        case 1:
            words = "a";
            break;
        case 2:
            words = "p";
            break;
        case 3:
            words = "p";
            break;
        case 4:
            words = "y";
            break;
        case 5:
            words = "V";
            break;
        case 6:
            words = "a";
            break;
        case 7:
            words = "l";
            break;
        case 8:
            words = "e";
            break;
        case 9:
            words = "n";
            break;
        case 10:
            words = "t";
            break;
        case 11:
            words = "i";
            break;
        case 12:
            words = "n";
            break;
        case 13:
            words = "e";
            break;
    }
    
}


function displayRandomWord() {
    const wordElement = document.getElementById("button1");
    HPVT();
    wordElement.textContent = words;
    // const para = document.getElementById("parameter");
    // para.textContent = x + words;
    const random = RandomNumber();
    const random2 = RandomNumber2();
    wordElement.onclick = function() {
        wordElement.style.opacity = 0;
        wordElement.style.left = random + "%";
        wordElement.style.top = random2 + "%";
        x += 1;
        setTimeout(() => {
            wordElement.style.opacity = 100;
            displayRandomWord();
        }, 500);

    if (x > 13) {          
            document.body.innerHTML = "";
            const Happ = document.createElement("h1");            
            Happ.textContent="💐💐Happy Valentine!💐💐"
            document.body.appendChild(Happ);
    }
    };
}

function RandomNumber() {
    const randomNumber = Math.random();
    const scaledNumber = randomNumber * (80 - 20);
    const randomInteger = Math.floor(scaledNumber) + 20;

    return randomInteger;
}
function RandomNumber2() {
    const randomNumber = Math.random();
    const scaledNumber = randomNumber * (80 - 20);
    const randomInteger = Math.floor(scaledNumber) + 20;
    return randomInteger;
}
