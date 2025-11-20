document.addEventListener('DOMContentLoaded', () => {
    
    // ------------------------------
    // Gestion du Menu Mobile
    // ------------------------------
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // ------------------------------
    // Effet Machine à écrire
    // ------------------------------
    const textElement = document.getElementById('typing-text');
    
    // Si l'élément n'existe pas, on arrête là pour éviter les erreurs
    if (!textElement) return;

    const phrases = ["Symfony & PHP", "Fullstack", "Passionné"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Effacer
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            // Écrire
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        // Logique de bascule (écrire <-> effacer)
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause à la fin du mot
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause avant le nouveau mot
        }

        setTimeout(type, typeSpeed);
    }

    // Lancer l'animation
    type();
});