export function getScreenText(text = "") {
    let screen = document.querySelector('.screen')
    text === "null" ? screen.textContent = "Insérer votre carte" : screen.textContent = text

}

export function useCashMachine(btnClicked = null, userCard = null) {
    let cardSlot = document.querySelector('.cardImgGroup')
    let cardSlotPos = cardSlot?.getBoundingClientRect()
    let userCardPos = userCard?.getBoundingClientRect()
    console.log(cardSlotPos)
    userCard && console.log(userCardPos)
    if ((userCardPos.top >= cardSlotPos.top && userCardPos.bottom <= cardSlotPos.bottom) && (userCardPos.left >= cardSlotPos.left && userCardPos.right <= cardSlotPos.right)) {
        getScreenText(btnClicked)
    } else {
        getScreenText("La carte est mal positionnée")
    }
}