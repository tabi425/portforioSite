const nav = document.querySelector("#menu");
const btn = document.querySelector(".toggleBtn");
const mask = document.querySelector("#mask");

const openNav = () => {
    nav.classList.add("open");
    nav.classList.remove("close");
};

const closeNav = () => {
    nav.classList.remove("open");
    nav.classList.add("close");
};

btn.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
        closeNav();
    } else {
        openNav();
    }
});

mask.addEventListener("click", closeNav);


document.addEventListener('DOMContentLoaded', function () {
    // ページのスクロールを検知したら「TOPへ戻る」ボタンを表示させる
    document.addEventListener('scroll', () => {
        const topBtn = document.querySelector('.contactBox');

        if (window.scrollY > 200) {
            topBtn.classList.add('is-visible');
        } else {
            topBtn.classList.remove('is-visible');
        }
    });
});