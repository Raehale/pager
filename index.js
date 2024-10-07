const phoneTextBox = document.getElementById("phoneText");
const pagerTextBox = document.getElementById("pagerRecieverText");
const pagerBeeps = new Audio('/assets/527944-Pager_Alarm_06.wav');
let currentNumber = '';

//generates buttons
const buttonsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
buttonsArr.forEach((button) => {
    document.getElementById("dialButtons").innerHTML += `
            <button class="btn" id="${button}Btn">${button}</button>
        `;
        pagerTextBox.textContent = '';
});

document.getElementById("dialButtons").addEventListener("click", (event) => {
    if (event.target.classList.contains('btn')) {
        const selectedNumber = event.target.innerHTML;
        currentNumber += selectedNumber;
        phoneTextBox.textContent += selectedNumber;
    }
});

document.getElementById("resetBtn").addEventListener("click", () => {
    phoneTextBox.textContent = '';
    pagerTextBox.textContent = '';
    currentNumber = '';
})

document.getElementById("sendBtn").addEventListener("click", () => {
    phoneTextBox.textContent = '';
    setTimeout(() => {
        pagerTextBox.textContent = currentNumber;
        pagerBeeps.play();
        currentNumber = '';
    }, 3000);

    setTimeout(() => {
        pagerTextBox.textContent = '';
    }, 8000)
})