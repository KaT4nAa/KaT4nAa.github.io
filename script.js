// Liste des symboles à remplacer les chiffres
const symbols = ['⏳', '⌛', '✦', '⏰', '⚡', '⚙', '♒', '⛓', '❖', '⟁'];

// Liste des couleurs pour les glitchs
const colors = ['#ff0033', '#ffcc00', '#00ccff', '#ff33cc', '#00ff99', '#ff6600'];

// Date cible - 15 Décembre 2024
const targetDate = new Date('2024-12-15T00:00:00Z');

// Fonction pour afficher le compte à rebours
function startCountdown() {
    const countdownElement = document.getElementById('time');
    
    // Mettre à jour le compte à rebours toutes les 100ms pour un effet plus fluide
    const countdownInterval = setInterval(() => {
        // Date actuelle
        const currentDate = new Date();
        
        // Calculer la différence entre la date cible et la date actuelle
        const remainingTime = targetDate - currentDate;

        // Si le temps est écoulé, afficher "Temps écoulé" et arrêter le compte à rebours
        if (remainingTime <= 0) {
            countdownElement.textContent = "Temps écoulé !";
            clearInterval(countdownInterval);
            return;
        }

        // Calculer les jours, heures, minutes et secondes restants
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Formater le temps en Jours:Heures:Minutes:Secondes
        let timeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Ajouter un effet de glitch aléatoire : couleurs, changement de caractère et clignotement
        timeString = timeString.split('').map(char => {
            // Ajouter des couleurs aléatoires aux caractères
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            // Remplacer parfois un chiffre par un symbole
            if (char >= '0' && char <= '9' && Math.random() < 0.1) {  // 10% de chance de remplacement
                return `<span style="color:${randomColor};">${symbols[Math.floor(Math.random() * symbols.length)]}</span>`;
            }
            // Effet de clignotement aléatoire sur certains caractères
            if (Math.random() < 0.05) { // 5% de chance de clignotement
                return `<span style="color:${randomColor}; text-shadow: 0 0 5px #fff, 0 0 10px ${randomColor};">${char}</span>`;
            }

            return `<span style="color:${randomColor};">${char}</span>`;
        }).join('');

        // Mettre à jour le contenu du compte à rebours
        countdownElement.innerHTML = timeString;
    }, 100); // Mettre à jour toutes les 100ms pour un effet plus fluide
}

// Démarrer le compte à rebours lorsque la page est chargée
window.onload = startCountdown;