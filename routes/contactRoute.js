const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const authMiddleware = require("../middlewares/authMiddleware");

// Liste des contacts (page d’accueil)
router.get("/home", authMiddleware, contactController.home);

// Formulaire ajout contact
router.get("/contact/new", authMiddleware, contactController.newContactForm);

// Traitement ajout contact
router.post("/contact/new", authMiddleware, contactController.createContact);

// Voir un contact
router.get("/contact/:id", authMiddleware, contactController.showContact);

// Formulaire de modification
router.get("/contact/edit/:id", authMiddleware, contactController.editContactForm);

// Traitement de modification
router.post("/contact/edit/:id", authMiddleware, contactController.updateContact);

// Suppression
router.get("/contact/delete/:id", authMiddleware, contactController.deleteContact);

module.exports = router;
