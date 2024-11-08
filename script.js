// Liste des symboles à remplacer les chiffres
const symbols = ['⏳', '⌛', '✦', '⏰', '⚡', '⚙', '♒', '⛓', '❖', '⟁'];

// Date cible - 15 Décembre 2024
const targetDate = new Date('2024-12-15T00:00:00Z');

// Fonction pour afficher le compte à rebours
function startCountdown() {
    const countdownElement = document.getElementById('time');
    
    // Mettre à jour le compte à rebours toutes les secondes
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

        // Parfois, remplace des chiffres par des symboles
        if (Math.random() < 0.1) {  // 10% de chance de remplacer
            timeString = timeString.split('').map(char => {
                if (char >= '0' && char <= '9') {
                    return symbols[Math.floor(Math.random() * symbols.length)];
                } else {
                    return char;
                }
            }).join('');
        }

        // Afficher le temps restant
        countdownElement.textContent = timeString;
    }, 1000);
}

// Démarrer le compte à rebours lorsque la page est chargée
window.onload = startCountdown;