const contactApiService = require("../services/contactApiService"); // Importation du service contactApiService

// Affiche la page listant les contacts de l’utilisateur connecté
module.exports.home = async (req, res) => {
  try {
    const userId = req.session.user._id; // récupérer l'id utilisateur connecté
    const contacts = await contactApiService.getContactsByUserId(userId);
    res.render("home", { user: req.session.user, contacts });
  } catch (e) {
    res.status(500).send("Erreur serveur");
  }
};

// Affiche le formulaire pour ajouter un contact
module.exports.newContactForm = (req, res) => {
  res.render("add-item");  // ou add-contact.ejs selon ton nom de fichier
};

// Traite le formulaire de création d’un contact
module.exports.createContact = async (req, res) => {
  try {
    req.body.user = req.session.user._id; // associer user connecté
    await contactApiService.createContact(req.body);
    res.redirect("/home"); // redirige vers la liste après création
  } catch (e) {
    res.status(400).send("Erreur lors de la création du contact");
  }
};

// Affiche le formulaire d'édition
module.exports.editContactForm = async (req, res) => {
  try {
    const contact = await contactApiService.getContactById(req.params.id);
    if (!contact) {
      return res.status(404).send("Contact non trouvé");
    }
    res.render("edit-item", { contact });
  } catch (e) {
    console.error(e);
    res.status(500).send("Erreur serveur");
  }
};


// Traite la modification d’un contact
module.exports.updateContact = async (req, res) => {
  try {
    if (!('active' in req.body)) {
    req.body.active = false;
    }
    await contactApiService.updateContact(req.params.id, req.body);
    res.redirect("/home");
  } catch (e) {
    res.status(400).send("Erreur lors de la mise à jour du contact");
  }
};

// Supprime un contact
module.exports.deleteContact = async (req, res) => {
  try {
    await contactApiService.deleteContact(req.params.id);
    res.redirect("/home");
  } catch (e) {
    res.status(400).send("Erreur lors de la suppression du contact");
  }
};

// Affiche un contact individuel (vue item.ejs)
module.exports.showContact = async (req, res) => {
  try {
    const contact = await contactApiService.getContactById(req.params.id);
    if (!contact) {
      return res.status(404).send("Contact introuvable");
    }
    res.render("item", { contact });
  } catch (e) {
    res.status(500).send("Erreur lors de la récupération du contact");
  }
};