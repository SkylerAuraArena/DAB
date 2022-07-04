export function checkCard(mode = 0, userCard = null) {
    if (mode !== 0) {
        let cardSlot = document.querySelector('.cardImgGroup')
        let cardSlotPos = cardSlot?.getBoundingClientRect()
        let userCardPos = userCard?.getBoundingClientRect()
        if (mode === 1) {
            if (userCard && (userCardPos.top >= cardSlotPos.top && userCardPos.bottom <= cardSlotPos.bottom) && (userCardPos.left >= cardSlotPos.left && userCardPos.right <= cardSlotPos.right)) {
                getScreenText("Veuillez saisir votre code et valider")
            } else {
                getScreenText("La carte est mal positionnée")
            }
        }
    } else {
        getScreenText("Placer la carte sur l'image de carte blanche")
    }
}

export function getScreenText(text = "") {
    let screen = document.querySelector('#connectionScreen')
    text === "null" ? screen.textContent = "Insérer votre carte" : screen.textContent = text
}

export function useCashMachine(btnClicked = null) {
    let screen = document.querySelector('.screen')
    let mainScreenDisplayed = getComputedStyle(document.querySelector('#mainScreen')).display
    if (mainScreenDisplayed === "grid") {
        btnClicked && chooseOption(btnClicked)
    } else if (screen.textContent.includes("€ en banque")) {
        document.querySelector(`.screen`).style.alignItems = "stretch"
        document.querySelector(`#connectionScreen`).style.display = "none"
        document.querySelector(`#mainScreen`).style.display = "grid"
    } else if (screen.textContent !== "Insérer votre carte" && screen.textContent !== "La carte est mal positionnée") {
        btnClicked && setUserCode(btnClicked)
    }
}

function setUserCode(btnClicked = null) {
    let screen = document.querySelector('.screen')
    let btnClickedTxt = document.querySelector(`#${btnClicked}`).textContent
    let validCode = localStorage.getItem('code')
    let userCode = sessionStorage.getItem('code')
    let codeLength = userCode.length
    if (screen.textContent === "Définir un code de 4 chiffres et valider" || validCode.length === 0 || validCode.length < 4) {
        if (!btnClicked.includes('Arrow') && !btnClicked.includes('coma') && !btnClicked.includes('empty')) {
            if (btnClicked.includes('cancel') || (btnClicked.includes('clear') && codeLength === 1)) {
                sessionStorage.setItem('code', '')
                getScreenText('Définir un code de 4 chiffres et valider')
            } else if (codeLength < 4) {
                if (btnClicked.includes('btn')) {
                    sessionStorage.setItem('code', userCode + btnClickedTxt)
                    getScreenText('*'.repeat(codeLength + 1))
                } else if (btnClicked.includes('clear')) {
                    if (codeLength === 0) {
                        sessionStorage.setItem('code', '')
                        getScreenText('Définir un code de 4 chiffres et valider')
                    } else {
                        sessionStorage.setItem('code', userCode.substring(0, codeLength - 1))
                        getScreenText('*'.repeat(codeLength - 1))
                    }
                } else if (btnClicked.includes('validate')) {
                    getScreenText('Le code doit être de 4 chiffres')
                }
            } else {
                if (btnClicked.includes('clear')) {
                    sessionStorage.setItem('code', userCode.substring(0, codeLength - 1))
                    getScreenText('*'.repeat(codeLength - 1))
                } else if (btnClicked.includes('validate')) {
                    if (codeLength > 4) {
                        getScreenText('Le code doit être de 4 chiffres')
                    } else {
                        localStorage.setItem('code', userCode)
                        sessionStorage.setItem('code', '')
                        getScreenText('Insérer votre carte')
                        document.querySelector("#userCard").style.display = "block"
                    }
                } else {
                    getScreenText('Le code doit être de 4 chiffres')
                }
            }
        }
    } else {
        if (!btnClicked.includes('Arrow') && !btnClicked.includes('coma') && !btnClicked.includes('empty')) {
            if (btnClicked.includes('cancel') || (btnClicked.includes('clear') && codeLength === 1)) {
                sessionStorage.setItem('code', '')
                getScreenText('Veuillez saisir votre code et valider')
            } else if (codeLength < 4) {
                if (btnClicked.includes('btn')) {
                    sessionStorage.setItem('code', userCode + btnClickedTxt)
                    getScreenText('*'.repeat(codeLength + 1))
                } else if (btnClicked.includes('clear')) {
                    if (codeLength === 0) {
                        sessionStorage.setItem('code', '')
                        getScreenText('Veuillez saisir votre code et valider')
                    } else {
                        sessionStorage.setItem('code', userCode.substring(0, codeLength - 1))
                        getScreenText('*'.repeat(codeLength - 1))
                    }
                } else if (btnClicked.includes('validate')) {
                    getScreenText('Le code doit être de 4 chiffres')
                }
            } else {
                if (btnClicked.includes('clear')) {
                    sessionStorage.setItem('code', userCode.substring(0, codeLength - 1))
                    getScreenText('*'.repeat(codeLength - 1))
                } else if (btnClicked.includes('validate')) {
                    if (codeLength > 4) {
                        getScreenText('Le code doit être de 4 chiffres')
                    } else {
                        const tries = sessionStorage.getItem('tries')
                        if (userCode === validCode) {
                            document.querySelector(`.screen`).style.alignItems = "stretch"
                            document.querySelector(`#connectionScreen`).style.display = "none"
                            document.querySelector(`#mainScreen`).style.display = "grid"
                        } else {
                            if (tries > 0) {
                                getScreenText(`Code faux, ${tries} essai(s) restant(s)`)
                                sessionStorage.setItem('code', "")
                                sessionStorage.setItem('tries', tries - 1)
                            } else {
                                getScreenText(`Code faux, carte avalée.`)
                                document.querySelector("#userCard").style.display = "none"
                            }
                        }
                    }
                } else {
                    getScreenText('Le code doit être de 4 chiffres')
                }
            }
        }
    }
}

function chooseOption(btnClicked = null) {
    const cash = localStorage.getItem('cash')
    if (btnClicked === "RArrow1") {
        document.querySelector(`.screen`).style.alignItems = "center"
        document.querySelector(`#connectionScreen`).style.display = "block"
        document.querySelector(`#mainScreen`).style.display = "none"
        getScreenText(`Vous avez ${cash}€ en banque`)
    } else {
        console.log(btnClicked)
    }
}