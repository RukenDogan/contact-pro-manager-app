const mongoose = require('mongoose'); // Importation du module Mongoose

// Définition du schéma pour le modèle Contact
const contactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  company: String,
  adress: String,
  phone: String,
  email: String,
  sector: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Contact', contactSchema); // Création du modèle Contact à partir du schéma