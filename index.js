const phoneTextBox = document.getElementById("phoneText");
const pagerTextBox = document.getElementById("pagerRecieverText");
const pagerBeeps = new Audio('/assets/527944-Pager_Alarm_06.wav');
let currentNumber = '';

//generates buttons
const buttonsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
buttonsArr.forEach((button) => {
    document.getElementById("dialButtons").innerHTML += `
            <button class="dial-btn" id="${button}Btn">${button}</button>
        `;
        pagerTextBox.textContent = '';
});

//when dial button is clicked the number is added to the currentNumber list and displayed in the phone box
document.getElementById("dialButtons").addEventListener("click", (event) => {
    if (event.target.classList.contains('dial-btn')) {
        if (phoneTextBox.textContent === "SENT" || phoneTextBox.textContent === "SENDING") {
            addInfoText("Wait for message to send.");
            disableButtons();
        } else {
            if (currentNumber.length < 10) {
                enableButtons();
                changeSelectedNumber(event);
            } else {
                addInfoText("Max 10 Char.");
                disableButtons();
            }
        }
    }
});

//When selected the pager and phone boxes are cleared
document.getElementById("resetBtn").addEventListener("click", () => {
    resetFields();
})

//When selected the phone number box is cleared "sending" the number to the page box after three seconds, a sound is played, the page disapears
document.getElementById("sendBtn").addEventListener("click", () => {
    sendSelectedNumber();
});

//resets all fields
function resetFields() {
    phoneTextBox.textContent = '';
    pagerTextBox.textContent = '';
    currentNumber = '';
}

//sends selected number to pager
function sendSelectedNumber() {
    phoneTextBox.textContent = 'SENDING';
    setTimeout(() => {
        pagerTextBox.textContent = currentNumber;
        pagerBeeps.play();
        currentNumber = '';
        phoneTextBox.textContent = 'SENT';
        setTimeout(() => {
            phoneTextBox.textContent = '';
        }, 1000);
    }, 3000);

    setTimeout(() => {
        setTimeout(() => {
            phoneTextBox.textContent = '';
        }, 1000)
        pagerTextBox.textContent = '';
    }, 8000);
}

//adds the selected number to the selected number fields
function changeSelectedNumber(event) {
    const selectedNumber = event.target.innerHTML;
    currentNumber += selectedNumber;
    phoneTextBox.textContent += selectedNumber;
}

//disables buttons
function disableButtons() {
    for (let i = 0; i < document.getElementsByClassName("dial-btn").length; i++) {
        document.getElementsByClassName("dial-btn")[i].style.cursor = "not-allowed";
    }
}

//enables buttons
function enableButtons() {
    for (let i = 0; i < document.getElementsByClassName("dial-btn").length; i++) {
        document.getElementsByClassName("dial-btn")[i].style.cursor = "pointer";
    }
}

//adds a little info bubble
function addInfoText(message) {
    document.getElementById("info").textContent = message;
    document.getElementById("info").style.display = "flex";

    setTimeout(() => {
        document.getElementById("info").style.display = "none";
    }, 3000);
}