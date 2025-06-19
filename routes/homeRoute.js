const express = require('express'); // Importation du framework Express
const router = express.Router(); // Création d'un routeur Express pour gérer les routes liées à l'authentification
const authController = require('../controllers/authController'); // Importation du contrôleur d'authentification
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware pour vérifier si l'utilisateur est authentifié

// Affiche la page de connexion
router.get('/', authController.showLoginPage);

// Traite la soumission du formulaire de connexion
router.post('/login', authController.login);

// Affiche la page d'accueil après connexion (protégée par session)
router.get('/home', authMiddleware, authController.showHomePage);

// Déconnexion
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

module.exports = router;