export function checkCard(mode = 0, userCard = null) {
    if (mode !== 0) {
        let cardSlot = document.querySelector('.cardImgGroup')
        let cardSlotPos = cardSlot?.getBoundingClientRect()
        let userCardPos = userCard?.getBoundingClientRect()
        if (mode === 1) {
            if (userCard && (userCardPos.top >= cardSlotPos.top && userCardPos.bottom <= cardSlotPos.bottom) && (userCardPos.left >= cardSlotPos.left && userCardPos.right <= cardSlotPos.right)) {
                getScreenText("Veuillez saisir votre code")
            } else {
                getScreenText("La carte est mal positionnée")
            }
        }
    } else {
        getScreenText("Placer la carte sur l'image de carte blanche")
    }
}

function getScreenText(text = "") {
    let screen = document.querySelector('.screen')
    text === "null" ? screen.textContent = "Insérer votre carte" : screen.textContent = text
}

export function useCashMachine(btnClicked = null, mode = null) {
    let screen = document.querySelector('.screen')
    if (screen.textContent !== "Insérer votre carte" && screen.textContent !== "La carte est mal positionnée") {
        if (mode === "code") {
            btnClicked && getUserCode(btnClicked)
        }
    }
}

function getUserCode(btnClicked = null) {
    let screen = document.querySelector('.screen')
    let btnClickedTxt = document.querySelector(`#${btnClicked}`).textContent
    screen.textContent === "Veuillez saisir votre code" ? getScreenText(btnClickedTxt) : getScreenText(screen.textContent + btnClickedTxt)
}