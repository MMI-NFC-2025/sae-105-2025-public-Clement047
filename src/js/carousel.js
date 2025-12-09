// Carousel interaction
// Visible on: index.html (slider), artiste.html (gallery)

// Simple vanilla JS carousel without dependencies. Usage:
// <div class="carousel" data-carousel>
//   <button data-carousel-prev>Prev</button>
//   <div class="carousel__track"> ... slides ... </div>
//   <button data-carousel-next>Next</button>
// </div>

class SimpleCarousel {
    constructor(root) {
        this.root = root;
        this.track = root.querySelector('.carousel__track');
        this.slides = Array.from(this.track.children);
        this.prev = root.querySelector('[data-carousel-prev]');
        this.next = root.querySelector('[data-carousel-next]');
        this.index = 0;
        this.update();
        this.prev && this.prev.addEventListener('click', () => this.go(this.index - 1));
        this.next && this.next.addEventListener('click', () => this.go(this.index + 1));
    }
    go(i) {
        if (i < 0) i = this.slides.length - 1;
        if (i >= this.slides.length) i = 0;
        this.index = i;
        this.update();
    }
    update() {
        this.slides.forEach((s, idx) => {
            s.style.display = idx === this.index ? 'block' : 'none';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-carousel]').forEach(el => new SimpleCarousel(el));
});