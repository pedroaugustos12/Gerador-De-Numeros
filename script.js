const numberDisplay = document.getElementById('number');
const historyList = document.getElementById('history');

let numbersGenerated = [];

function generateNumber() {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    numbersGenerated.push(newNumber);
    updateDisplay();
}

function clearHistory() {
    numbersGenerated = [];
    updateDisplay();
}

function updateDisplay() {
    numberDisplay.textContent = numbersGenerated[numbersGenerated.length - 1] || 0;
    historyList.innerHTML = numbersGenerated.map(number => `<li>${number}</li>`).join('');
}

document.getElementById('generate-btn').addEventListener('click', generateNumber);
document.getElementById('clear-btn').addEventListener('click', clearHistory);
