const userApiService = require("../services/userApiService");
const Contact = require("../models/contact");
const bcrypt = require("bcrypt");


module.exports.getContacts = async (req, res) => {
    try {
        let contacts = await userApiService.getContacts({});
        return res.status(200).json({ status: 200, data: users, message: "Contacts retrieved successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message});
    }
};

module.exports.getContact = async (req, res) => {
    try {
        let contact = await userApiService.getContact({ _id: req.params.id });
        return res.status(200).json({ status: 200, data: user, message: "Contact retrieved successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message});
    }
};


// récupére la liste des users
module.exports.getContacts = async (req, res) => {
    try {
        const contacts = await userApiService.getAllContacts();
        return res.status(200).json({
            status: 200,
            data: users,
            message: "Contacts successfully retrieved"
        });
    } catch (e) {
        return res.status(500).json({
            status: 500,
            message: e.message
        });
    }
};


// crée une user
module.exports.createContact = async (req, res) => {
    // hash le mdp avec bcrypt
    let salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
        try {
        // hash le mdp avec bcrypt
        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        let contact = await userApiService.updateUser(contact);
        contact = await userApiService.getUser(contact);
        return res.status(201).json({ status: 201, data: user, message: "Contact successfully created" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message});
    }
}

// update un user
module.exports.updateContact = async (req, res) => {

    try {
        // hash le mdp avec bcrypt
        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        let result = await userApiService.updateContact({ _id: req.params.id }, req.body);
        return res.status(200).json({ status: 200, data: result, message: "Contact successfully updated" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message});
    }
}

// supprime un user
module.exports.deleteContact = async (req, res) => {
    try {
        // hash le mdp avec bcrypt
        let result = await userApiService.deleteContact({ _id: req.params.id }, req.body);
        return res.status(200).json({ status: 200, data: result, message: "Contact successfully delteted" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message});
    }
}