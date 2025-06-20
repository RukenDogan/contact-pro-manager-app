const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Liste des contacts (page d’accueil)
router.get("/home", contactController.home);

// Formulaire ajout contact
router.get("/contact/new", contactController.newContactForm);

// Traitement ajout contact
router.post("/contact/new", contactController.createContact);

// Voir un contact
router.get("/contact/:id", contactController.showContact);

// Formulaire de modification
router.get("/contact/edit/:id", contactController.editContactForm);

// Traitement de modification
router.post("/contact/edit/:id", contactController.updateContact);

// Suppression
router.get("/contact/delete/:id", contactController.deleteContact);

module.exports = router;
