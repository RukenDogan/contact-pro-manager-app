# Contact Pro Manager

## Description

**Contact Pro Manager** est une application web en **Node.js** utilisant **MongoDB** pour stocker et gérer vos contacts professionnels. L'application permet à un utilisateur authentifié de **consulter, ajouter, modifier et supprimer** ses contacts via une interface web et une API REST.

---

## Fonctionnalités

* **Authentification utilisateur**

  * Connexion avec email et mot de passe
* **Gestion des contacts**

  * Affichage de la liste des contacts
  * Consultation d'un contact détaillé
  * Ajout d'un nouveau contact
  * Modification d'un contact existant
  * Suppression d'un contact avec confirmation
* **API REST**

  * Manipulation des contacts et utilisateurs sans passer par l'interface web
* **Architecture MVC**

  * **Views** : Pages de l'application
  * **Routes** : Déclaration des routes
  * **Controllers** : Traitement des données pour construire les pages
  * **Services** : Gestion et manipulation des données
* **Middleware**

  * Vérification de la session utilisateur avant l'accès aux pages protégées

---

## Structure de la base de données

### Users

* Nom
* Prénom
* Adresse mail
* Mot de passe
* Contacts (référence aux contacts de l'utilisateur)

### Contacts

* Nom
* Prénom
* Société
* Adresse
* Téléphone
* Adresse mail
* Secteur (Industrie, Informatique, Santé, Éducation, …)
* User (référence à l'utilisateur propriétaire du contact)

---

## Technologies utilisées

* **Node.js**
* **Express.js**
* **MongoDB**
* **EJS** pour les templates
* **Postman** pour tester l’API

---

## Routes principales

* `/login` : Connexion utilisateur
* `/contacts` : Liste des contacts
* `/contacts/:id` : Détails d'un contact
* `/contacts/add` : Ajouter un contact
* `/contacts/edit/:id` : Modifier un contact
* `/contacts/delete/:id` : Supprimer un contact

---

## Utilisation avec Postman

L'application fournit une API REST. Voici quelques endpoints principaux :

* `POST /login` → Authentification utilisateur
* `GET /contacts` → Récupérer tous les contacts
* `POST /contacts` → Ajouter un nouveau contact
* `GET /contacts/:id` → Voir un contact spécifique
* `PUT /contacts/:id` → Modifier un contact
* `DELETE /contacts/:id` → Supprimer un contact

Vous pouvez tester ces endpoints via **Postman** en utilisant un utilisateur créé dans l'application.

---

## Utilisation de l'application

1. Accéder à la page de connexion
2. S'authentifier avec email et mot de passe
3. Consulter, ajouter, modifier ou supprimer des contacts via l'interface web
4. Tester les routes de l'API via Postman

---

## Captures d'écran

![Page Login](images/login.png)

![Page Home](images/contacts.png)

![Page Contact](images/info_contact.png)

![Page Contact Edit](images/ajout_contact.png)
