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
    const frozenCard = sessionStorage.getItem('frozenCard')
    const withdraw = sessionStorage.getItem('withdraw')
    if (frozenCard === "false") {
        if (mainScreenDisplayed === "grid") {
            btnClicked && chooseOption(btnClicked)
        } else if (withdraw === "true") {
            btnClicked && manageCash(btnClicked)
        } else if (screen.textContent.includes("€ en banque")) {
            document.querySelector(`.screen`).style.alignItems = "stretch"
            document.querySelector(`#connectionScreen`).style.display = "none"
            document.querySelector(`#mainScreen`).style.display = "grid"
        } else if (screen.textContent !== "Insérer votre carte" && screen.textContent !== "La carte est mal positionnée") {
            btnClicked && setUserCode(btnClicked)
        }
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
                        const code = localStorage.getItem('code')
                        const lastCode = localStorage.getItem('lastCode')
                        if (userCode === lastCode) {
                            getScreenText('Vous devez saisir un code différent')
                            localStorage.setItem('code', "")
                            sessionStorage.setItem('code', "")
                        } else {
                            localStorage.setItem('code', userCode)
                            sessionStorage.setItem('code', '')
                            let displayCard = sessionStorage.getItem('changeCode')
                            if (displayCard === "true") {
                                getScreenText('Insérer votre carte')
                                document.querySelector("#userCard").style.display = "block"
                                sessionStorage.setItem('changeCode', false)
                            } else {
                                document.querySelector(`.screen`).style.alignItems = "stretch"
                                document.querySelector(`#connectionScreen`).style.display = "none"
                                document.querySelector(`#mainScreen`).style.display = "grid"
                            }
                        }
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
                            document.querySelector("#userCard").style.display = "none"
                        } else {
                            if (tries > 0) {
                                getScreenText(`Code faux, ${tries} essai(s) restant(s)`)
                                sessionStorage.setItem('code', "")
                                sessionStorage.setItem('tries', tries - 1)
                            } else {
                                getScreenText(`Code faux, carte avalée.`)
                                document.querySelector("#userCard").style.display = "none"
                                sessionStorage.setItem('frozenCard', true)
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
    if (btnClicked === "LArrow1") {
        document.querySelector(`.screen`).style.alignItems = "center"
        document.querySelector(`#connectionScreen`).style.display = "block"
        document.querySelector(`#mainScreen`).style.display = "none"
        getScreenText(`Combien voulez-vous retirer ?`)
        sessionStorage.setItem('withdraw', true)
    } else if (btnClicked === "LArrow2") {
        document.querySelector(`.screen`).style.alignItems = "center"
        document.querySelector(`#connectionScreen`).style.display = "block"
        document.querySelector(`#mainScreen`).style.display = "none"
        getScreenText(`Définir un code de 4 chiffres et valider`)
        localStorage.setItem('lastCode', localStorage.getItem('code'))
        localStorage.setItem('code', "")
        sessionStorage.setItem('code', "")
        sessionStorage.setItem('changeCode', false)
    } else if (btnClicked === "RArrow1") {
        document.querySelector(`.screen`).style.alignItems = "center"
        document.querySelector(`#connectionScreen`).style.display = "block"
        document.querySelector(`#mainScreen`).style.display = "none"
        getScreenText(`Vous avez ${cash}€ en banque`)
    } else if (btnClicked === "RArrow2") {
        document.querySelector(`.screen`).style.alignItems = "center"
        document.querySelector(`#connectionScreen`).style.display = "block"
        document.querySelector(`#mainScreen`).style.display = "none"
        getScreenText(`Merci, au revoir et à bientôt`)
        document.querySelector("#userCard").style.display = "block"
        sessionStorage.setItem('code', "")
    }
}

function manageCash(btnClicked = null) {
    const cash = localStorage.getItem('cash')
    let screen = document.querySelector(`#connectionScreen`).textContent
    let figure = document.querySelector(`#${btnClicked}`).textContent
    const cashLength = screen.length
    if (btnClicked.includes('btn')) {
        if (screen === "Combien voulez-vous retirer ?") {
            getScreenText(`${figure}`)
        } else {
            if (cashLength < 12) {
                getScreenText(`${screen}${figure}`)
            } else {
                getScreenText(`Impossible de retirer plus de 99 999 999 999€`)
            }
        }
    } else if (btnClicked.includes('cancel')) {
        document.querySelector(`.screen`).style.alignItems = "stretch"
        document.querySelector(`#connectionScreen`).style.display = "none"
        document.querySelector(`#mainScreen`).style.display = "grid"
    } else if (btnClicked.includes('clear')) {
        if (cashLength > 1 && screen !== "Combien voulez-vous retirer ?" && screen !== "Vous ne possédez pas autant sur votre compte" && !screen.includes('Prenez vos billets') && !screen.includes('Impossible de retirer plus de')) {
            getScreenText(`${screen.substring(0, screen.length - 1)}`)
        } else {
            getScreenText(`Combien voulez-vous retirer ?`)
        }
    } else if (btnClicked.includes('validate')) {
        const cashToWithdraw = parseInt(screen)
        if (cashLength > 1 && screen !== "Combien voulez-vous retirer ?" && cashToWithdraw <= cash) {
            getScreenText(`Prenez vos billets : ${cashToWithdraw}€`)
        } else {
            getScreenText(`Vous ne possédez pas autant sur votre compte`)
        }
    }
}