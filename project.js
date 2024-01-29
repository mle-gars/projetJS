document.addEventListener("DOMContentLoaded", function() {
    
    function trouverIntersection() {
        const liste1 = [1, 2, 3, 4, 5];
        const liste2 = [3, 4, 5, 6, 7];
        const intersection = [];

        for (const element of liste1) {
            if (liste2.includes(element)) {
                intersection.push(element);
            }
        }

        console.log("Intersection:", intersection);
    }

    // Récupérer le bouton
    const bouton = document.getElementById("boutonIntersection" );

    // Ajouter un gestionnaire d'événement de clic au bouton
    bouton.onclick = function() {
        trouverIntersection();
    };

});