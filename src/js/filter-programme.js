// Données des artistes
const artists = [
    {
        name: 'LAYLOW',
        scene: 'Oxygène',
        day: 'Vendredi 12 juin',
        genre: ['Rap'],
        time: '21h30',
        image: '/assets/img/Artistes/Laylow2.avif'
    },
    {
        name: 'ATEYABA',
        scene: 'Oxygène',
        day: 'Vendredi 12 juin',
        genre: ['Rap'],
        time: '19h',
        image: '/assets/img/Artistes/Ateyaba.avif'
    },
    {
        name: 'KAVINSKY',
        scene: 'Fosse aux lions',
        day: 'Vendredi 12 juin',
        genre: ['Electro'],
        time: '20h',
        image: '/assets/img/Artistes/Kavinsky.avif'
    },
    {
        name: 'ADÈLE CASTILLON',
        scene: 'Fosse aux lions',
        day: 'Vendredi 12 juin',
        genre: ['Pop'],
        time: '20h30',
        image: '/assets/img/Artistes/adèlecastillon.avif'
    },
    {
        name: 'YVNNIS',
        scene: 'Petite nature',
        day: 'Vendredi 12 juin',
        genre: ['Rap'],
        time: '21h30',
        image: '/assets/img/Artistes/Yvnnis.avif'
    },
    {
        name: 'MAYLIS',
        scene: 'Petite nature',
        day: 'Vendredi 12 juin',
        genre: ['Pop'],
        time: '18h',
        image: '/assets/img/Artistes/Maylis.avif'
    },
    {
        name: 'THEODORA',
        scene: 'Oxygène',
        day: 'Samedi 13 juin',
        genre: ['Rap', 'Pop'],
        time: '21h30',
        image: '/assets/img/Artistes/Theodora.avif'
    },
    {
        name: 'DISIZ',
        scene: 'Fosse aux lions',
        day: 'Samedi 13 juin',
        genre: ['Pop'],
        time: '18h30',
        image: '/assets/img/Artistes/Disiz.avif'
    },
    {
        name: 'JUSTICE',
        scene: 'Oxygène',
        day: 'Samedi 13 juin',
        genre: ['Electro'],
        time: '19h',
        image: '/assets/img/Artistes/Justice.avif'
    },
    {
        name: 'THE LAST TRAIN',
        scene: 'Fosse aux lions',
        day: 'Samedi 13 juin',
        genre: ['Rock'],
        time: '19h30',
        image: '/assets/img/Artistes/The last train.avif'
    },
    {
        name: 'FLORA FISHBACH',
        scene: 'Petite nature',
        day: 'Samedi 13 juin',
        genre: ['Rock'],
        time: '20h',
        image: '/assets/img/Artistes/Flora Fishbach.avif'
    },
    {
        name: 'STYLETO',
        scene: 'Petite nature',
        day: 'Samedi 13 juin',
        genre: ['Electro'],
        time: '18h',
        image: '/assets/img/Artistes/Styleto.avif'
    }
];

// État des filtres
let activeFilters = {
    genre: [],
    time: [],
    scene: []
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
    displayArtists(artists);
});

// Configuration des boutons de filtre
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter__btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            updateFilters();
            filterArtists();
        });
    });
}

// Mise à jour de l'état des filtres
function updateFilters() {
    // Réinitialiser les filtres
    activeFilters = {
        genre: [],
        time: [],
        scene: []
    };

    // Genre - premier groupe
    const genreGroup = document.querySelectorAll('.filter__group')[0];
    genreGroup.querySelectorAll('.filter__btn.active').forEach(btn => {
        activeFilters.genre.push(btn.textContent.trim());
    });

    // Horaire - deuxième groupe
    const timeGroup = document.querySelectorAll('.filter__group')[1];
    timeGroup.querySelectorAll('.filter__btn.active').forEach(btn => {
        activeFilters.time.push(btn.textContent.trim());
    });

    // Scène - troisième groupe
    const sceneGroup = document.querySelectorAll('.filter__group')[2];
    sceneGroup.querySelectorAll('.filter__btn.active').forEach(btn => {
        activeFilters.scene.push(btn.textContent.trim());
    });
}

// Filtrage des artistes
function filterArtists() {
    let filtered = artists;

    console.log('Filtres actifs:', activeFilters);

    // Filtrer par genre
    if (activeFilters.genre.length > 0) {
        filtered = filtered.filter(artist =>
            artist.genre.some(g => activeFilters.genre.includes(g))
        );
    }

    // Filtrer par horaire
    if (activeFilters.time.length > 0) {
        filtered = filtered.filter(artist =>
            activeFilters.time.includes(artist.time)
        );
    }

    // Filtrer par scène
    if (activeFilters.scene.length > 0) {
        filtered = filtered.filter(artist =>
            activeFilters.scene.includes(artist.scene)
        );
    }

    console.log('Artistes filtrés:', filtered);
    displayArtists(filtered);
}

// Affichage des cartes d'artistes
function displayArtists(artistsToDisplay) {
    const container = document.querySelector('.artist-cards');

    if (artistsToDisplay.length === 0) {
        container.innerHTML = '<p class="artist-cards__empty">Aucun artiste ne correspond aux filtres sélectionnés</p>';
        return;
    }

    container.innerHTML = artistsToDisplay.map(artist => `
        <div class="programme-card">
            <div class="programme-card__image-wrapper">
                <img src="${artist.image}" alt="${artist.name}" class="programme-card__image">
            </div>
            <h3 class="programme-card__name">${artist.name}</h3>
        </div>
    `).join('');
}
