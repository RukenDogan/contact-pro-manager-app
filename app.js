const express = require('express'); // Importation du framework Express
const bodyParser = require('body-parser'); // Pour parser le corps des requêtes
const mongoose = require('mongoose'); // Pour interagir avec MongoDB
const dotenv = require('dotenv'); // Pour charger les variables d'environnement
const path = require('path'); // Pour gérer les chemins de fichiers
const session = require('express-session'); // Pour gérer les sessions

// Importation des routes de l'API utilisateur et des tâches
const userApiRoute = require('./routes/userApiRoute'); // Importation des routes de l'API utilisateur
const contactApiRoute = require('./routes/contactApiRoute'); // Importation des routes de l'API des tâches
const authController = require('./controllers/authController'); // Importation du contrôleur d'authentification

// crée l'app express
const app = express();

// charge le fichier de configuration
dotenv.config();

// Configuration des vues
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// pour les api
app.use(bodyParser.json());

// Configuration de la page d'accueil
app.get('/', (req, res) => {
    res.redirect('/connection'); // affiche home.ejs
});

// Configuration du dossier public pour les fichiers statiques (CSS, JS, images)
mongoose.connect(process.env.MONGO_CONNECTION)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((e) => console.log('Connexion à MongoDB échouée ! ' + e));

// indique l'url de départ des routes de l'api
app.use("/models/user", userApiRoute);
app.use("/models/contact", contactApiRoute);

// Middleware sessions
app.use(session({
    secret: 'contactpro-secret',
    resave: false,
    saveUninitialized: false
}));

// Corps des requêtes (formulaires)
app.use(express.urlencoded({ extended: true })); // pour POST login

// Routes HTML
const webRoutes = require('./routes/homeRoute');
app.use('/', webRoutes);

// Route pour afficher la page de connexion
app.post('/connection', authController.login); // Traite la connexion

// lance le serveur sur le port
app.listen(process.env.PORT, () => {
    console.log(`Le serveur est démarré sur le port ${process.env.PORT} !`);
});