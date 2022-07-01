import { getScreenText, useCashMachine } from './algo.js'

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
});

card.addEventListener("mouseup", () => {
    card.removeEventListener("mousemove", mouseMove);
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
let arrowL1 = document.querySelector('#btnLArrow1')
let arrowL2 = document.querySelector('#btnLArrow2')
let arrowL3 = document.querySelector('#btnLArrow3')
let arrowL4 = document.querySelector('#btnLArrow4')
let arrowR1 = document.querySelector('#btnRArrow1')
let arrowR2 = document.querySelector('#btnRArrow2')
let arrowR3 = document.querySelector('#btnRArrow3')
let arrowR4 = document.querySelector('#btnRArrow4')

btn0.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
btn1.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
btn2.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
btn3.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
btn4.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
btn5.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
btn6.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
btn7.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
btn8.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
btn9.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
empty1.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
coma.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
cancel.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
clear.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
empty2.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
validate.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
arrowL1.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
arrowL2.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
arrowL3.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
arrowL4.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
arrowR1.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
arrowR2.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
arrowR3.onclick = (e) => {
    useCashMachine(e.target.id, card)
}
arrowR4.onclick = (e) => {
    useCashMachine(e.target.id, card)
}