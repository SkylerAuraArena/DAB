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