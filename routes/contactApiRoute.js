const express = require("express");
const router = express.Router();
const contactApiControlleur = require("../controllers/contactApiController");

router.get("/", contactApiControlleur.getContacts);
router.get("/:id", contactApiControlleur.getContacts);
router.post("/", contactApiControlleur.createContact);
router.put("/:id", contactApiControlleur.updateContact);
router.delete("/:id", contactApiControlleur.deleteContact);

// export des routes contenu dans le router
module.exports = router;