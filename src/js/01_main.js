//Служебный скрипт для позиционирования макета

// console.log(
//     "Чтобы правильно наложить макет, сдвиньте его на " +
//         Math.ceil((window.innerWidth - document.documentElement.clientWidth) / 2) +
//         " пикселей влево"
// );

//Обработчик закрытия выпадающего окна при клике по пункту меню или во вне

const flyouts = document.querySelectorAll("details");
const flyoutContents = document.querySelectorAll("details >ul");

document.addEventListener("click", function (event) {
    let isClickInside = false;
    for (let i = 0; i < flyouts.length; i++) {
        if (flyouts[i].contains(event.target)) {
            isClickInside = true;
        }
    }

    flyouts.forEach(function (item) {
        if (!isClickInside) {
            item.open = false;
        }
    });
});

flyoutContents.forEach(function (item) {
    item.addEventListener("click", function () {
        item.parentElement.open = false;
    });
});
