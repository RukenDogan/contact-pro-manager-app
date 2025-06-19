const express = require('express'); // Importation du framework Express
const router = express.Router(); // Création d'un routeur Express pour gérer les routes liées à l'authentification

const authController = require('../controllers/authController'); // Importation du contrôleur d'authentification
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware pour vérifier si l'utilisateur est authentifié

const Contact = require('../models/contact'); // Modèle de contact pour interagir avec la base de données

// Affiche la page de connexion
router.get('/connection', authController.showLoginPage);

// Traite la soumission du formulaire de connexion
router.post('/connection', authController.login);

// Affiche la page d'accueil après connexion (protégée par session)
router.get('/home', authMiddleware, authController.showHomePage);

// Déconnexion
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

// Route pour afficher un contact par ID
router.get('/contact/:id', authMiddleware, async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.render('item', { contact });
    } catch (e) {
        res.status(500).send("Erreur lors de la récupération du contact");
    }
});

module.exports = router; // Exportation du routeur