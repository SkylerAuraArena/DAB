import { getScreenText, checkCard, useCashMachine } from './algo.js'

sessionStorage.setItem('code', "")
localStorage.setItem('code', "")
localStorage.setItem('lastCode', "")
sessionStorage.setItem('tries', 2)
sessionStorage.setItem('changeCode', true)
sessionStorage.setItem('frozenCard', false)
const cashAmount = Math.floor(Math.random() * 1001)
localStorage.setItem('cash', cashAmount)
sessionStorage.setItem('withdraw', false)
let userCode = localStorage.getItem('code')
if (!userCode || userCode === "") {
    getScreenText("Définir un code de 4 chiffres et valider")
}

const card = document.querySelector("#userCard");
let shiftX;
let shiftY;

card.addEventListener("dragstart", event => event.preventDefault());

const move = event => {
    card.style.left = event.pageX - shiftX + "px";
    card.style.top = event.pageY - shiftY + "px";
};

const mouseMove = event => {
    move(event);
};

card.addEventListener("mousedown", event => {
    card.style.position = "absolute";
    const rect = card.getBoundingClientRect();
    shiftX = event.clientX - rect.left;
    shiftY = event.clientY - rect.top;
    move(event);
    card.addEventListener("mousemove", mouseMove);
    checkCard(0, card)
});

card.addEventListener("mouseup", () => {
    card.removeEventListener("mousemove", mouseMove);
    checkCard(1, card)
});


const cashSlot = document.querySelector(`#cashSlot`)
const cash = document.querySelector("#cash");
cashSlot.addEventListener("click", event => {
    event.preventDefault()
    cash.style.display = "flex"
});

let shiftXCash;
let shiftYCash;

cash.addEventListener("dragstart", event => event.preventDefault());

const moveCash = event => {
    cash.style.left = event.pageX - shiftX + "px";
    cash.style.top = event.pageY - shiftY + "px";
};

const mouseMoveCash = event => {
    moveCash(event);
};

cash.addEventListener("mousedown", event => {
    cash.style.position = "absolute";
    const rect = cash.getBoundingClientRect();
    shiftXCash = event.clientX - rect.left;
    shiftYCash = event.clientY - rect.top;
    moveCash(event);
    cash.addEventListener("mousemove", mouseMoveCash);
});

cash.addEventListener("mouseup", () => {
    cash.removeEventListener("mousemove", mouseMoveCash);
    document.querySelector(`#cashSlot`).style.backgroundColor = "lightgray"
    document.querySelector(`.screen`).style.alignItems = "stretch"
    document.querySelector(`#connectionScreen`).style.display = "none"
    document.querySelector(`#mainScreen`).style.display = "grid"
});


let btn0 = document.querySelector('#btn0')
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')
let btn7 = document.querySelector('#btn7')
let btn8 = document.querySelector('#btn8')
let btn9 = document.querySelector('#btn9')
let empty1 = document.querySelector('#empty1')
let coma = document.querySelector('#coma')
let cancel = document.querySelector('#cancel')
let clear = document.querySelector('#clear')
let empty2 = document.querySelector('#empty2')
let validate = document.querySelector('#validate')
let arrowL1 = document.querySelector('#LArrow1')
let arrowL2 = document.querySelector('#LArrow2')
let arrowL3 = document.querySelector('#LArrow3')
let arrowL4 = document.querySelector('#LArrow4')
let arrowR1 = document.querySelector('#RArrow1')
let arrowR2 = document.querySelector('#RArrow2')
let arrowR3 = document.querySelector('#RArrow3')
let arrowR4 = document.querySelector('#RArrow4')

btn0.onclick = (e) => {
    useCashMachine(e.target.id)
}
btn1.onclick = (e) => {
    useCashMachine(e.target.id)
}
btn2.onclick = (e) => {
    useCashMachine(e.target.id)
}
btn3.onclick = (e) => {
    useCashMachine(e.target.id)
}
btn4.onclick = (e) => {
    useCashMachine(e.target.id)
}
btn5.onclick = (e) => {
    useCashMachine(e.target.id)
}
btn6.onclick = (e) => {
    useCashMachine(e.target.id)
}
btn7.onclick = (e) => {
    useCashMachine(e.target.id)
}
btn8.onclick = (e) => {
    useCashMachine(e.target.id)
}
btn9.onclick = (e) => {
    useCashMachine(e.target.id)
}
empty1.onclick = (e) => {
    useCashMachine(e.target.id)
}
coma.onclick = (e) => {
    useCashMachine(e.target.id)
}
cancel.onclick = (e) => {
    useCashMachine(e.target.id)
}
clear.onclick = (e) => {
    useCashMachine(e.target.id)
}
empty2.onclick = (e) => {
    useCashMachine(e.target.id)
}
validate.onclick = (e) => {
    useCashMachine(e.target.id)
}
arrowL1.onclick = (e) => {
    useCashMachine(e.target.id)
}
arrowL2.onclick = (e) => {
    useCashMachine(e.target.id)
}
arrowL3.onclick = (e) => {
    useCashMachine(e.target.id)
}
arrowL4.onclick = (e) => {
    useCashMachine(e.target.id)
}
arrowR1.onclick = (e) => {
    useCashMachine(e.target.id)
}
arrowR2.onclick = (e) => {
    useCashMachine(e.target.id)
}
arrowR3.onclick = (e) => {
    useCashMachine(e.target.id)
}
arrowR4.onclick = (e) => {
    useCashMachine(e.target.id)
}