const logs = document.getElementById("area")
let account = 0
let cash = 0

function setbalance() {
    account = Number(document.getElementById("current-account").value) || 0
    cash = Number(document.getElementById("current-cash").value) || 0

    area.value += `Current account balance : ${account} , Current cash balance : ${cash}\n`

}

function bankOperation() {
    const amount = Number(document.getElementById("opAmount").value) || 0
    const type = document.getElementById("togglebtn")
    const selected = type.options[type.selectedIndex].text.toLowerCase()

    if (amount >= 1) {
        if (selected == "deposit" && amount <= cash) {
            cash -= amount
            account += amount
            area.value += `Current account balance : ${account} , Current cash balance : ${cash}\n`
        } else if (selected == "withdraw" && amount <= account) {
            cash += amount
            account -= amount
            area.value += `Current account balance : ${account} , Current cash balance : ${cash}\n`
        } else {
            area.value += `failed!\n`
        }
    }
}