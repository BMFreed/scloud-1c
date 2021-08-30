
    //Служебный скрипт для позиционирования макета

        console.log(
            "Чтобы правильно наложить макет, сдвиньте его на " +
                Math.ceil((window.innerWidth - document.documentElement.clientWidth) / 2) +
                " пикселей влево"
        );



    //Обработка форм отправки

        const requestForms = document.querySelectorAll(".request-form");
        const handleSubmit = (event) => {
            event.preventDefault();
            alert("Спасибо за проявленный интерес! Мы с Вами свяжемся!");
        };
        requestForms.forEach(function (item) {
            item.addEventListener("submit", handleSubmit);
        });

        // Обработка смены региона для указания номера телефона

        const region = document.querySelectorAll(".region-list-item");
        const activeRegionFields = document.querySelectorAll(".active-region");
        const phoneInput = document.querySelectorAll(".phone-input");

        const changeRegion = (event) => {
            activeRegionFields.forEach(function (item) {
                activeRegion = event.target.innerText;
                item.innerText = activeRegion + "*";

                switch (activeRegion) {
                    case "RU":
                        phoneInput.forEach(function (item) {
                            item.value = "+7";
                        });
                        break;

                    case "BY":
                        phoneInput.forEach(function (item) {
                            item.value = "+375";
                        });
                        break;

                    case "KZ":
                        phoneInput.forEach(function (item) {
                            item.value = "7";
                        });
                        break;
                }
            });
        };
        region.forEach(function (item) {
            item.addEventListener("click", changeRegion);
        });

