const mongoose = require('mongoose'); // Importation du module Mongoose

// Définition du schéma pour le modèle Task
const taskSchema = mongoose.Schema({
    label: { type: String, required: true },
    description: { type: String, required: true },
    dateTask: { type: Date, required: true},
    status: { type: Boolean, required: true },
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});
module.exports = mongoose.model('Task', taskSchema); // Création du modèle Task à partir du schéma