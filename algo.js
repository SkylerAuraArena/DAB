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

export function getScreenText(text = "") {
    let screen = document.querySelector('.screen')
    text === "null" ? screen.textContent = "Insérer votre carte" : screen.textContent = text
}

export function useCashMachine(btnClicked = null) {
    let screen = document.querySelector('.screen')
    let userCode = localStorage.getItem('code')
    if (userCode && userCode.length === 4 && (screen.textContent !== "Insérer votre carte" && screen.textContent !== "La carte est mal positionnée")) {
        if (mode === "setCode") {
            btnClicked && setUserCode(btnClicked)
        } else if (mode === "getCode") {
            btnClicked && getUserCode(btnClicked)
        }
    } else {
        btnClicked && setUserCode(btnClicked)
    }
    // if (!userCode || userCode === "") {
    //     btnClicked && setUserCode(btnClicked)
    // } else if (userCode.length === 0 || userCode.length < 4) {
    //     getScreenText('*'.repeat(codeLength))
    //     btnClicked && setUserCode(btnClicked)
    // }
}

function getUserCode(btnClicked = null) {
    let screen = document.querySelector('.screen')
    let btnClickedTxt = document.querySelector(`#${btnClicked}`).textContent
    if (screen.textContent === "Veuillez saisir votre code") {
        if (btnClicked.includes('btn')) {
            sessionStorage.setItem('code', btnClickedTxt)
            getScreenText('*')
        }
    } else {
        if (!btnClicked.includes('Arrow') && !btnClicked.includes('coma') && !btnClicked.includes('empty')) {
            let codeLength = sessionStorage.getItem('code').length
            if (btnClicked.includes('cancel') || (btnClicked.includes('clear') && codeLength === 1)) {
                sessionStorage.setItem('code', '')
                getScreenText('Veuillez saisir votre code')
            } else if (codeLength < 4) {
                if (btnClicked.includes('btn')) {
                    sessionStorage.setItem('code', sessionStorage.getItem('code') + btnClickedTxt)
                    getScreenText('*'.repeat(codeLength + 1))
                } else if (btnClicked.includes('clear')) {
                    console.log(sessionStorage.getItem('code').substring(0, codeLength - 1))
                    sessionStorage.setItem('code', sessionStorage.getItem('code').substring(0, codeLength - 1))
                    getScreenText('*'.repeat(codeLength - 1))
                } else if (btnClicked.includes('validate')) {
                    getScreenText('Le code doit être de 4 chiffres')
                }
            } else {
                if (btnClicked.includes('clear')) {
                    console.log(sessionStorage.getItem('code').substring(0, codeLength - 1))
                    sessionStorage.setItem('code', sessionStorage.getItem('code').substring(0, codeLength - 1))
                    getScreenText('*'.repeat(codeLength - 1))
                } else if (btnClicked.includes('validate')) {
                    codeLength > 4 ? getScreenText('Le code doit être de 4 chiffres') : getScreenText('Consultation || Retrait')
                } else {
                    getScreenText('Le code doit être de 4 chiffres')
                }
            }
        }
    }
}

function setUserCode(btnClicked = null) {
    let screen = document.querySelector('.screen')
    let btnClickedTxt = document.querySelector(`#${btnClicked}`).textContent
    let userCode = localStorage.getItem('code')
    if (screen.textContent === "Définir un code de 4 chiffres et valider" || userCode.length === 0 || userCode.length < 4) {
        if (!btnClicked.includes('Arrow') && !btnClicked.includes('coma') && !btnClicked.includes('empty')) {
            let codeLength = sessionStorage.getItem('code').length
            if (btnClicked.includes('cancel') || (btnClicked.includes('clear') && codeLength === 1)) {
                sessionStorage.setItem('code', '')
                getScreenText('Définir un code de 4 chiffres et valider')
            } else if (codeLength < 4) {
                if (btnClicked.includes('btn')) {
                    sessionStorage.setItem('code', sessionStorage.getItem('code') + btnClickedTxt)
                    getScreenText('*'.repeat(codeLength + 1))
                } else if (btnClicked.includes('clear')) {
                    if (codeLength === 0) {
                        sessionStorage.setItem('code', '')
                        getScreenText('Définir un code de 4 chiffres et valider')
                    } else {
                        sessionStorage.setItem('code', sessionStorage.getItem('code').substring(0, codeLength - 1))
                        getScreenText('*'.repeat(codeLength - 1))
                    }
                } else if (btnClicked.includes('validate')) {
                    getScreenText('Le code doit être de 4 chiffres')
                }
            } else {
                if (btnClicked.includes('clear')) {
                    sessionStorage.setItem('code', sessionStorage.getItem('code').substring(0, codeLength - 1))
                    getScreenText('*'.repeat(codeLength - 1))
                } else if (btnClicked.includes('validate')) {
                    if (codeLength > 4) {
                        getScreenText('Le code doit être de 4 chiffres')
                    } else {
                        localStorage.setItem('code', sessionStorage.getItem('code'))
                        getScreenText('Insérer votre carte')
                    }
                } else {
                    getScreenText('Le code doit être de 4 chiffres')
                }
            }
        }
    } else {
        if (!btnClicked.includes('Arrow') && !btnClicked.includes('coma') && !btnClicked.includes('empty')) {
            let codeLength = sessionStorage.getItem('code').length
            if (btnClicked.includes('cancel') || (btnClicked.includes('clear') && codeLength === 1)) {
                sessionStorage.setItem('code', '')
                getScreenText('Veuillez saisir votre code')
            } else if (codeLength < 4) {
                if (btnClicked.includes('btn')) {
                    sessionStorage.setItem('code', sessionStorage.getItem('code') + btnClickedTxt)
                    getScreenText('*'.repeat(codeLength + 1))
                } else if (btnClicked.includes('clear')) {
                    sessionStorage.setItem('code', sessionStorage.getItem('code').substring(0, codeLength - 1))
                    getScreenText('*'.repeat(codeLength - 1))
                } else if (btnClicked.includes('validate')) {
                    getScreenText('Le code doit être de 4 chiffres')
                }
            } else {
                if (btnClicked.includes('clear')) {
                    sessionStorage.setItem('code', sessionStorage.getItem('code').substring(0, codeLength - 1))
                    getScreenText('*'.repeat(codeLength - 1))
                } else if (btnClicked.includes('validate')) {
                    codeLength > 4 ? getScreenText('Le code doit être de 4 chiffres') : getScreenText('Consultation || Retrait')
                } else {
                    getScreenText('Le code doit être de 4 chiffres')
                }
            }
        }
    }
}