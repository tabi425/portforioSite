const nav = document.querySelector("#menu");
const btn = document.querySelector(".toggleBtn");
const mask = document.querySelector("#mask");
const mode = document.getElementById("modeToggle");
const navSection = document.querySelector(".navSection")


// ライト／ダークモード切替
// if (localStorage.getItem('isDark') === 'true') {
//     document.body.classList.add('isDark');
// }
if (localStorage.getItem('isDark') === 'true') {
    document.getElementById('modeToggle').checked = true;
}

if (mode) {
    mode.addEventListener("click", () => {
        document.body.classList.toggle("isDark");
        if (navSection) {
            navSection.classList.toggle("isDark");
        }
        localStorage.setItem('isDark', document.body.classList.contains('isDark'));
    });
}


// ハンバーガーメニュー
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


// ページのスクロールを検知したら「TOPへ戻る」ボタンを表示させる
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        const topBtn = document.querySelector('.contactBox');

        if (window.scrollY > 200) {
            topBtn.classList.add('is-visible');
        } else {
            topBtn.classList.remove('is-visible');
        }
    });
});