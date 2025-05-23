// Global Scripts
document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate-plan-button');
    const planOutputDiv = document.getElementById('plan-output');
    const challengeDescriptionTextarea = document.getElementById('challenge-description');

    if (generateButton && planOutputDiv && challengeDescriptionTextarea) { // Ensure all elements exist
        generateButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent potential form submission

            const userChallenge = challengeDescriptionTextarea.value;
            let generatedPlanHTML;

            if (!userChallenge.trim()) {
                generatedPlanHTML = `<p style="color: red;">Veuillez décrire votre défi d'automatisation dans la zone de texte ci-dessus pour générer un plan.</p>`;
            } else {
                generatedPlanHTML = `
                    <h4>Votre Plan d'Action Personnalisé :</h4>
                    <p>Basé sur la description de votre défi (<em>"${userChallenge}"</em>), voici une proposition initiale :</p>
                    <ul>
                        <li><strong>Étape 1: Analyse approfondie :</strong> Nous allons examiner de plus près vos processus actuels.</li>
                        <li><strong>Étape 2: Identification des points d'automatisation clés :</strong> Cibler les tâches les plus impactantes pour l'automatisation.</li>
                        <li><strong>Étape 3: Développement de la solution IA :</strong> Création des outils et algorithmes sur mesure.</li>
                        <li><strong>Étape 4: Intégration et tests :</strong> Mise en place de la solution dans votre environnement et vérification.</li>
                        <li><strong>Étape 5: Formation et suivi :</strong> Accompagnement pour une prise en main optimale et ajustements continus.</li>
                    </ul>
                    <p><strong>Note :</strong> Ceci est un exemple de plan. Une analyse plus détaillée par notre IA fournira des étapes spécifiques à votre situation.</p>
                `;
            }

            planOutputDiv.innerHTML = generatedPlanHTML;
            // Optional: Scroll to the plan output
            if (userChallenge.trim()){ // Only scroll if a plan was generated
                planOutputDiv.scrollIntoView({ behavior: 'smooth' });
            }
        });
    } else {
        // Log an error if any of the required elements are not found
        if (!generateButton) console.error('Button with id "generate-plan-button" not found.');
        if (!planOutputDiv) console.error('Div with id "plan-output" not found.');
        if (!challengeDescriptionTextarea) console.error('Textarea with id "challenge-description" not found.');
    }
});
