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
              "titreMag": "Passion Voitures Sportives",
              "slogan": "Toute l'actualité des voitures sportives : performances, nouveautés et comparatifs",
              "invitationAbonnement": "Abonnez-vous pour rester informé des dernières innovations et modèles des plus grandes marques",
              "articleVedette": {
                "titrePrincipal": "BMW vs Audi : Duel des nouvelles générations sportives",
                "resume": "Analyse des dernières sorties sportives des deux géants allemands : design, puissance et technologie.",
                "datePublication": "1er Décembre 2024",
                "categorie": "Comparatifs de modèles",
                "illustration": "images/bmw_audi_duel.png"
              },
              "articlesPerformance": [
                {
                  "titreArticle": "Les modèles les plus rapides de 2024 : Audi R8 et BMW M8 en tête",
                  "datePublication": "28 Novembre 2024",
                  "categorie": "Performances extrêmes",
                  "illustration": "https://i.ytimg.com/vi/_hzC1YgqLT8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGmqGEjqFDt3qMZ-VYNiJ1Q1GVfA"
                },
                {
                  "titreArticle": "Les technologies embarquées des nouvelles BMW et Audi",
                  "datePublication": "20 Novembre 2024",
                  "categorie": "Technologie et innovations",
                  "illustration": "https://images.caradisiac.com/logos/6/7/7/3/196773/S8-nouvelles-technologies-embarquees-plus-de-connectivite-et-de-securite-114250.jpg"
                },
                {
                  "titreArticle": "L'évolution des moteurs : Vers une nouvelle ère hybride et électrique",
                  "datePublication": "15 Novembre 2024",
                  "categorie": "Motorisation",
                  "illustration": "https://cdn.automobile-propre.com/cdn-cgi/image/width=3840/https://cdn.automobile-propre.com/uploads/2020/05/BMW-X2-xDrive25e-010.jpg"
                },
                {
                  "titreArticle": "Histoire des séries M de BMW et RS d'Audi : Une légende en constante évolution",
                  "datePublication": "10 Novembre 2024",
                  "categorie": "Histoire des modèles",
                  "illustration": "https://f2.hespress.com/wp-content/uploads/2018/09/635743044340250894-intro-e1535906379744-scaled.jpg"
                },
                {
                  "titreArticle": "Comparatif des intérieurs : Luxe et sportivité chez Audi et BMW",
                  "datePublication": "5 Novembre 2024",
                  "categorie": "Design intérieur",
                  "illustration": "https://www.automobile-magazine.fr/asset/cms/1600x1000/183580/config/132092/sans-titre-1.jpg"
                }
              ],
              "categoriesSportAuto": [
                {
                  "nomCategorie": "Comparatifs de modèles",
                  "descriptionCategorie": "Analyses détaillées des modèles sportifs BMW, Audi et autres marques prestigieuses."
                },
                {
                  "nomCategorie": "Performances extrêmes",
                  "descriptionCategorie": "Découvrez les voitures sportives les plus rapides et puissantes de l'année."
                },
                {
                  "nomCategorie": "Technologie et innovations",
                  "descriptionCategorie": "Explorez les dernières avancées technologiques dans les véhicules sportifs."
                },
                {
                  "nomCategorie": "Motorisation",
                  "descriptionCategorie": "Plongée dans l'évolution des moteurs thermiques, hybrides et électriques."
                },
                {
                  "nomCategorie": "Histoire des modèles",
                  "descriptionCategorie": "Retour sur l'évolution des gammes sportives emblématiques des grandes marques."
                }
              ],
              "expertsSportAuto": [
                {
                  "prenomExpert": "Maxime",
                  "expertise": "Journaliste automobile",
                  "bio": "Spécialiste des voitures sportives, je teste et analyse les performances des modèles les plus prisés.",
                  "image": "https://www.sophiebourgeixphotographe.com/wp-content/uploads/2016/10/01portraits-professionnel-sophie-bourgeix-2-e1481494048320.jpg"
                },
                {
                  "prenomExpert": "Camille",
                  "expertise": "Ingénieur en mécanique automobile",
                  "bio": "Je décrypte les innovations techniques et les moteurs des dernières voitures sportives.",
                  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qSnCKollns1-bPIeQBFPWTYK2My3KKfwfKGFfRTkL8YzAG9aQpdnEpn6gwsiRv3HF5Q&usqp=CAU"
                },
                {
                  "prenomExpert": "Lucas",
                  "expertise": "Historien automobile",
                  "bio": "Passionné par l'histoire des grandes marques, je retrace l'évolution des gammes BMW et Audi.",
                  "image": "https://www.lafabriquedelacite.com/wp-content/uploads/2022/03/flonneau.jpg"
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
                <img class="avatar" src=${expert.image}">
                <p class="expertise">${expert.expertise}</p>
                <p class="bio">${expert.bio}</p>
            `;
            listeExperts.appendChild(expertDiv);
        });

        document.addEventListener("DOMContentLoaded", () => {
            const car = document.querySelector('.animated-car');
            car.addEventListener('animationiteration', () => {
                console.log('Voiture réinitialisée !');
            });
        });
        
/// FIN DU CODE
      })
      .catch((erreur) => console.error('Erreur lors de la lecture des données :', erreur));
}

obtenirDonnees();
