import { getScreenText } from './algo.js'

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

getScreenText()

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

btn0.onclick = () => {
    console.log("btn0")
}
btn1.onclick = () => {
    console.log("btn1")
}
btn2.onclick = () => {
    console.log("btn2")
}
btn3.onclick = () => {
    console.log("btn3")
}
btn4.onclick = () => {
    console.log("btn4")
}
btn5.onclick = () => {
    console.log("btn5")
}
btn6.onclick = () => {
    console.log("btn6")
}
btn7.onclick = () => {
    console.log("btn7")
}
btn8.onclick = () => {
    console.log("btn8")
}
btn9.onclick = () => {
    console.log("btn9")
}
empty1.onclick = () => {
    console.log("empty1")
}
coma.onclick = () => {
    console.log("coma")
}
cancel.onclick = () => {
    console.log("cancel")
}
clear.onclick = () => {
    console.log("clear")
}
empty2.onclick = () => {
    console.log("empty2")
}
validate.onclick = () => {
    console.log("validate")
}
arrowL1.onclick = () => {
    console.log("arrowL1")
}
arrowL2.onclick = () => {
    console.log("arrowL2")
}
arrowL3.onclick = () => {
    console.log("arrowL3")
}
arrowL4.onclick = () => {
    console.log("arrowL4")
}
arrowR1.onclick = () => {
    console.log("arrowR1")
}
arrowR2.onclick = () => {
    console.log("arrowR2")
}
arrowR3.onclick = () => {
    console.log("arrowR3")
}
arrowR4.onclick = () => {
    console.log("arrowR4")
}