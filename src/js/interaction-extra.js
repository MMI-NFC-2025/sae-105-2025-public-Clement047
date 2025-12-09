// Extra interaction: Accordéon FAQ
// Visible on: infos.html

// Simple accessible accordion. Markup example:
// <button class="accordion__button" aria-expanded="false" aria-controls="faq1">Question</button>
// <div id="faq1" class="accordion__panel" hidden>Réponse</div>

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.accordion__button').forEach(btn => {
        const id = btn.getAttribute('aria-controls');
        const panel = id ? document.getElementById(id) : null;
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            if (panel) panel.hidden = expanded;
        });
    });
});