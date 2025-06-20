const contactApiService = require("../services/contactApiService"); // Importation du service contactApiService
const Contact = require("../models/contact");


module.exports.home = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user._id }); // ← important
    res.render("home", { contacts });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

// récupére la liste des contacts
module.exports.getContacts = async (req, res) => {
    try {
        const contacts = await contactApiService.getContactsByUserId(req.query.userId); // filtrer par userId
        return res.status(200).json({
            status: 200,
            data: contacts,
            message: "Contacts successfully retrieved"
        });
    } catch (e) {
        return res.status(500).json({
            status: 500,
            message: e.message
        });
    }
};


// récupère un contact suivant son id
module.exports.getContact = async (req, res) => {
    try {
        const contact = await contactApiService.getContactById(req.params.id);
        return res.status(200).json({ status: 200, data: contact, message: "Contact retrieved successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

// crée un contact
module.exports.createContact = async (req, res) => {
    try {
        const contact = await contactApiService.createContact(req.body);
        return res.status(201).json({ status: 201, data: contact, message: "Contact successfully created" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

// update un contact
module.exports.updateContact = async (req, res) => {
    try {
        const result = await contactApiService.updateContact(req.params.id, req.body);
        return res.status(200).json({ status: 200, data: result, message: "Contact successfully updated" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

// supprime un contact
module.exports.deleteContact = async (req, res) => {
    try {
        const result = await contactApiService.deleteContact(req.params.id);
        return res.status(200).json({ status: 200, data: result, message: "Contact successfully deleted" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};