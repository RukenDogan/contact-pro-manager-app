const contact = require("../models/contact");
const User = require("../models/user");


// récupère les contacts liés à un utilisateur
module.exports.getContactsByUserId = async (userId) => {
  try {
    return await Contact.find({ user: userId }).exec();
  } catch (e) {
    throw Error(`Error while querying contacts: ${e.message}`);
  }
};


// récupère une contact par son id
module.exports.getContactById = async (contactId) => {

    try { 
        return await Contact.findById(contactId).populate('user').exec();   
    } catch(e) {
        // Log Errors
        throw Error(`Error while query one Contact : ${e.message}`)
    }
}

// Crée un contact
module.exports.createContact = async (contactData) => {
  try {
    const newContact = new Contact(contactData);
    return await newContact.save();
  } catch (e) {
    throw Error(`Erreur lors de la création du contact : ${e.message}`);
  }
};

// Met à jour un contact
module.exports.updateContact = async (contactId, updatedData) => {
  try {
    return await Contact.findByIdAndUpdate(contactId, updatedData, { new: true });
  } catch (e) {
    throw Error(`Erreur lors de la mise à jour du contact : ${e.message}`);
  }
};

// Supprime un contact
module.exports.deleteContact = async (contactId) => {
  try {
    return await Contact.findByIdAndDelete(contactId);
  } catch (e) {
    throw Error(`Erreur lors de la suppression du contact : ${e.message}`);
  }
};