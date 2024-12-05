function obtenirDonnees() {
    fetch('data.json')
      .then((reponse) => {
        if (!reponse.ok) {
          throw new Error('La réponse réseau n\'était pas correcte');
        }
        return reponse.json();
      })
      .then((donnees) => {
// Traitez les données comme vous le souhaitez
        console.log('Données récupérées du fichier JSON :', donnees);

/// ON ÉCRIT LE CODE ICI ! 
        let donneesLocales = {
            "magSportAuto": {
                "articlesPerformance": [
                    {
                        "titreArticle": "Les modèles les plus rapides de 2024 : Audi R8 et BMW M8 en tête",
                        "datePublication": "28 Novembre 2024",
                        "categorie": "Performances extrêmes",
                        "illustration": "https://quatrorodas.abril.com.br/wp-content/uploads/2021/06/FLP4422.jpg?quality=70&strip=info"
                    },
                    {
                        "titreArticle": "Les technologies embarquées des nouvelles BMW et Audi",
                        "datePublication": "20 Novembre 2024",
                        "categorie": "Technologie et innovations",
                        "illustration": "https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2024/08/bmw-gesture-control-1536x864.jpg?resize=1200,675&key=7343b645"
                    },
                    {
                        "titreArticle": "L'évolution des moteurs : Vers une nouvelle ère hybride et électrique",
                        "datePublication": "15 Novembre 2024",
                        "categorie": "Motorisation",
                        "illustration": "https://images.caradisiac.com/logos/5/4/6/1/285461/S7-nouvelle-saignee-dans-les-aides-aux-vehicules-electriques-211930.jpg"
                    }
                ],
                "expertsSportAuto": [
                    {
                        "prenomExpert": "Maxime",
                        "expertise": "Journaliste automobile",
                        "bio": "Spécialiste des voitures sportives, je teste et analyse les performances des modèles les plus prisés."
                    },
                    {
                        "prenomExpert": "Camille",
                        "expertise": "Ingénieur en mécanique automobile",
                        "bio": "Je décrypte les innovations techniques et les moteurs des dernières voitures sportives."
                    },
                    {
                        "prenomExpert": "Lucas",
                        "expertise": "Historien automobile",
                        "bio": "Passionné par l'histoire des grandes marques, je retrace l'évolution des gammes BMW et Audi."
                    }
                ]
            }
        };

//articles
        let listeArticles = document.getElementById('liste-articles');
        donneesLocales.magSportAuto.articlesPerformance.forEach(article => {
            let articleDiv = document.createElement('div');
            articleDiv.className = 'article';
            articleDiv.innerHTML = `
                <img src="${article.illustration}" alt="${article.titreArticle}">
                <div class="info-article">
                    <h3>${article.titreArticle}</h3>
                    <p class="date">Publié le ${article.datePublication}</p>
                    <p class="categorie">${article.categorie}</p>
                </div>
            `;
            listeArticles.appendChild(articleDiv);
        });

//experts
        let listeExperts = document.getElementById('liste-experts');
        donneesLocales.magSportAuto.expertsSportAuto.forEach(expert => {
            let expertDiv = document.createElement('div');
            expertDiv.className = 'expert';
            expertDiv.innerHTML = `
                <div class="avatar-expert"></div>
                <h3>${expert.prenomExpert}</h3>
                <p class="expertise">${expert.expertise}</p>
                <p class="bio">${expert.bio}</p>
            `;
            listeExperts.appendChild(expertDiv);
        });

        document.addEventListener("DOMContentLoaded", () => {
            const car = document.querySelector('.animated-car');
            car.addEventListener('animationiteration', () => {
                console.log('Voiture réinitialisée !');
                // Optionnel : modifier l'animation dynamiquement
                // car.style.animationDuration = `${Math.random() * 5 + 5}s`;
            });
        });
        
/// FIN DU CODE
      })
      .catch((erreur) => console.error('Erreur lors de la lecture des données :', erreur));
}

obtenirDonnees();
