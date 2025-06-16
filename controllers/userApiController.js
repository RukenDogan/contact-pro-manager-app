const userApiService = require("../services/userApiService"); // Importation du service userApiService
const bcrypt = require("bcrypt"); // Importation de bcrypt pour le hachage des mots de passe

// Contrôleur pour gérer les requêtes liées aux utilisateurs
module.exports.getUsers = async (req, res) => {
    try {
        let users = await userApiService.getUsers({});
        return res.status(200).json({ status: 200, data: users, message: "Users retrieved successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

// Récupère un utilisateur
module.exports.getUser = async (req, res) => {
    try {
        let user = await userApiService.getUser({ _id: req.params.id });
        return res.status(200).json({ status: 200, data: user, message: "User retrieved successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

// Crée un nouvel utilisateur
module.exports.createUser = async (req, res) => {
    try {
        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        let user = await userApiService.createUser(req.body); // Corrigé ici aussi
        return res.status(201).json({ status: 201, data: user, message: "User successfully created" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

// Met à jour un utilisateur
module.exports.updateUser = async (req, res) => {
    try {
        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        let result = await userApiService.updateUser({ _id: req.params.id }, req.body);
        return res.status(200).json({ status: 200, data: result, message: "User successfully updated" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

// Supprime un utilisateur
module.exports.deleteUser = async (req, res) => {
    try {
        let result = await userApiService.deleteUser({ _id: req.params.id });
        return res.status(200).json({ status: 200, data: result, message: "User successfully deleted" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
