const myinput = document.getElementById("myinput")

function add() {
    myinput.value = Number(myinput.value) + 1
}
function low() {
    myinput.value = Number(myinput.value) - 1
}


const logs = document.getElementById('logs')
let balanceInfo = {
	"Account": 0,
	"Cash": 0,
}

document.getElementById("setBalance").addEventListener("click", function () {
	balanceInfo.Account = Number(document.getElementById("accBalance").value) || 0
	balanceInfo.Cash = Number(document.getElementById("cashBalance").value) || 0
	const dateTime = new Date().toLocaleString()

	logs.value += `>> [${dateTime}] Current account balance: ${balanceInfo.Account}, Current cash balance: ${balanceInfo.Cash}\n`
	document.getElementById("accBalance").value = ''
	document.getElementById("cashBalance").value = ''
});

document.getElementById("bankOp").addEventListener("click", function () {
	const amount = Number(document.getElementById("moneyAmount").value) || 0
	const type = document.getElementById("operate")
	const selectedType = type.options[type.selectedIndex].text.toLowerCase()
	const dateTime = new Date().toLocaleString()

	if (amount >= 1) {
		if (selectedType === "deposit" && amount <= balanceInfo.Cash) {
			balanceInfo.Cash -= amount
			balanceInfo.Account += amount
			logs.value += `>> [${dateTime}] Current account balance: ${balanceInfo.Account}, Current cash balance: ${balanceInfo.Cash}\n`
		} else if (selectedType === "withdraw" && amount <= balanceInfo.Account) {
			balanceInfo.Account -= amount
			balanceInfo.Cash += amount
			logs.value += `>> [${dateTime}] Current account balance: ${balanceInfo.Account}, Current cash balance: ${balanceInfo.Cash}\n`
		} else {
			alert("You got no moneh!")
			logs.value += `>> [${dateTime}] Trying to ${selectedType} but failed!\n`
		}
	}

	logs.scrollTop = logs.scrollHeight
	document.getElementById("moneyAmount").value = ''
});
