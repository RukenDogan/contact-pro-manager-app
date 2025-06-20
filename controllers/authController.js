const authService = require('../services/authService.js'); // Service d'authentification
const contactApiService = require('../services/contactApiService.js'); // Service pour les contacts

// Affiche la page de connexion
exports.showLoginPage = (req, res) => {
    res.render('connection', { message : '' }); // ou { error: '' }
};

// Traite la soumission du formulaire de connexion
exports.login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user= await authService.authenticate(email, password);
        if(!user) {
            return res.render('connection', { message: 'Incorrect Email or password' });
        }
        req.session.user = {
            id: user._id,
            email: user.email,
            lastName: user.lastName,
            firstName: user.firstName
        };
        res.redirect('/home');
    }catch(error){ // gère les erreurs de login
        res.status(400).json({ status: 400, message: error.message }); 
    }
};

// Affiche la page d'accueil après connexion
exports.showHomePage = async (req, res) => {
  try {
    const contacts = await contactApiService.getContactsByUserId(req.session.user.id);
    res.render('home', { user: req.session.user, contacts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
};
