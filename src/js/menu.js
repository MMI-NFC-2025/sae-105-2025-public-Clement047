// Gestion du menu overlay
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuClose = document.getElementById('menuClose');
    const menuLinks = document.querySelectorAll('.menu-overlay__link');

    // Ouvrir le menu
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Bloquer le scroll
    });

    // Fermer le menu avec le bouton
    menuClose.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Réactiver le scroll
    });

    // Fermer le menu en cliquant sur un lien
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fermer le menu avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
