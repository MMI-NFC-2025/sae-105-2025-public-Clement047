// Menu interaction
// Visible on: index.html, festival.html, programme.html, artistes.html, artiste.html, scenes.html, scene.html, infos.html, contact.html

// Accessible burger menu: toggles nav visibility, updates aria-expanded and disables body scroll.

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.header__burger');
    const nav = document.getElementById('main-nav');
    if (!burger || !nav) return;

    function openMenu() {
        burger.setAttribute('aria-expanded', 'true');
        nav.hidden = false;
        document.body.classList.add('no-scroll');
    }
    function closeMenu() {
        burger.setAttribute('aria-expanded', 'false');
        nav.hidden = true;
        document.body.classList.remove('no-scroll');
    }

    burger.addEventListener('click', function () {
        const expanded = burger.getAttribute('aria-expanded') === 'true';
        if (expanded) closeMenu(); else openMenu();
    });

    // Close menu when clicking outside or pressing Escape
    document.addEventListener('click', function (e) {
        if (nav.contains(e.target) || burger.contains(e.target)) return;
        if (!nav.hidden) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });
});