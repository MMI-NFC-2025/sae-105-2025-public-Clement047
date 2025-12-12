// Recherche d'artiste sur la page
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-form__input');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const searchTerm = searchInput.value.trim().toLowerCase();

            if (searchTerm === '') {
                return;
            }

            // Liste des artistes avec leurs noms
            const artistCards = document.querySelectorAll('.artist-card');
            let found = false;

            artistCards.forEach(card => {
                const artistName = card.querySelector('.artist-card__name');
                if (artistName) {
                    const name = artistName.textContent.trim().toLowerCase();

                    // Vérifier si le nom correspond à la recherche
                    if (name.includes(searchTerm)) {
                        // Faire défiler vers la carte
                        card.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });

                        // Ajouter un effet de highlight
                        card.style.transform = 'scale(1.05)';
                        card.style.transition = 'transform 0.3s ease';

                        setTimeout(() => {
                            card.style.transform = 'scale(1)';
                        }, 1000);

                        found = true;
                    }
                }
            });

            // Si aucun artiste trouvé, afficher un message
            if (!found) {
                // Créer un message temporaire
                const message = document.createElement('div');
                message.className = 'search-message';
                message.textContent = `Aucun artiste trouvé pour "${searchInput.value}"`;
                document.body.appendChild(message);

                setTimeout(() => {
                    message.remove();
                }, 3000);
            }

            // Vider le champ de recherche
            searchInput.value = '';
        });
    }
});
