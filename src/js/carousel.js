/**
 * Carrousel pour la galerie photo de l'artiste Laylow
 * URL où l'interaction est visible : /artiste-laylow.html
 * Permet de naviguer entre les photos de l'artiste avec des boutons précédent/suivant
 */

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel__image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function showImage(index) {
        // Masquer toutes les images
        images.forEach(img => {
            img.classList.remove('active');
        });

        // Afficher l'image actuelle
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Event listeners pour les boutons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }

    // Navigation au clavier (optionnel)
    document.addEventListener('keydown', function (e) {
        if (document.querySelector('.artist-detail__gallery')) {
            if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        }
    });
});
