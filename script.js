const logs = document.getElementById("area")
let account = 0
let cash = 0

function setbalance() {
    account = Number(document.getElementById("current-account").value) || 0
    cash = Number(document.getElementById("current-cash").value) || 0

    area.value += `Current account balance : ${account} , Current cash balance : ${cash}\n`

}