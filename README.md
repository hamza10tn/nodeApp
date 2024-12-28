##creation manuelle d'un projet

1. Initialiser le projet Node.js
`npm init -y`

Cette commande crée un fichier package.json avec des valeurs par défaut. Ce fichier contient toutes les informations sur ton projet.

3. Installer les dépendances
Express est un framework minimaliste pour Node.js qui va nous permettre de créer des routes facilement.
`npm install express`

Mongoose est une bibliothèque qui permet d'interagir facilement avec MongoDB.
`npm install mongoose`

##creation avec Express Generator

1.
`npm install express-generator -g`
`express myapp`

2.Génère une application Express avec Twig comme moteur de rendu. Remplace <app name> par le nom de ton projet :
`express --view=twig <app name>`

3.Installe toutes les dépendances nécessaires :
`npm install`

4.lancer le serveur:
`npm start`

structure:
![Capture d'écran 2024-12-28 210346](https://github.com/user-attachments/assets/55bc3594-de48-48ee-b6e7-52ca7ea9a52b)

