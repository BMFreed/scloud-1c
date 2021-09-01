const footerLists = document.querySelectorAll(".footer__list");

footerLists.forEach(function (item) {
    item.addEventListener("click", function () {
        const list = item.children[0].children[1];
        const title = item.children[0].children[0];
        list.classList.toggle("laptop-only");
        title.classList.toggle("footer__list-title_opened");
    });
});
