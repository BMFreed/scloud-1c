const buttons = document.querySelectorAll(".client-types__buttons > li > button");
const clientType = document.querySelectorAll(".client-types__type");
let selectedType = buttons[0].id;
window.onload = function () {
    buttons[0].focus();
};

const handleClientType = (event) => {
    selectedType = event.target.id;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("button_hollow_clicked");
        clientType[i].classList.add("visually-hidden");

        if (clientType[i].id === selectedType) {
            clientType[i].classList.remove("visually-hidden");
        }
    }
    event.target.classList.add("button_hollow_clicked");
};

buttons.forEach(function (item) {
    item.addEventListener("click", handleClientType);
});
