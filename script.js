let accountBalance = 0;
let cashBalance = 0;
let historyT = document.getElementById("history");
let currentMode = 'deposit';
let AccountInput = document.getElementById('accountInput')
let CashInput = document.getElementById('cashInput')
let mode = document.getElementById('toggleBtn')

function updateBalanceInputs(){
    accountBalance = parseFloat(AccountInput.value) || 0;
    cashBalance = parseFloat(CashInput.value) || 0;
    let logMessage = `Set balances: Account ${accountBalance.toFixed(2)}, Cash ${cashBalance.toFixed(2)}`;
    historyT.value += logMessage + "\n";
    console.log(historyT)
}
function updateDepoWithd(){
    let amount = document.getElementById('opAmount');
    let amountmoney = parseFloat(amount.value)|| 0;
    let currentmode = mode.value
    if (currentmode === "deposit"){
        if (amountmoney <= cashBalance){
            cashBalance -= amountmoney
            accountBalance += amountmoney
            let logMessage = `Set balances: Account ${accountBalance.toFixed(2)}, Cash ${cashBalance.toFixed(2)}`;
            historyT.value += logMessage + "\n";
        } else if (amountmoney > cashBalance){
            let logMessage = "Deposit failed: insufficient cash"
            historyT.value += logMessage + "\n";
        }
    }else if(currentmode === "withdraw"){
        if (amountmoney <= accountBalance){
            cashBalance += amountmoney
            accountBalance -= amountmoney
            let logMessage = `Set balances: Account ${accountBalance.toFixed(2)}, Cash ${cashBalance.toFixed(2)}`;
            historyT.value += logMessage + "\n"
        } else if (amountmoney > accountBalance){
            let logMessage = "withdraw failed: insufficient cash"
            historyT.value += logMessage + "\n";
        }
    }
}
