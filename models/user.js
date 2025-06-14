const mongoose = require('mongoose'); // Importation du module Mongoose

// Définition du schéma pour le modèle User
const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }], // Référence au modèle Contact
});

// Création du modèle User à partir du schéma
module.exports = mongoose.model('User', userSchema);