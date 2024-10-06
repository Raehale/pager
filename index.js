//generates buttons
const buttonsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
buttonsArr.forEach((button) => {
    document.getElementById("dialButtons").innerHTML += `
            <button class="btn" id="${button}Btn">
                ${button}
            </button>
        `;
});