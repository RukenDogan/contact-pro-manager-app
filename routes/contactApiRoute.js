const express = require("express");
const router = express.Router();
const taskApiControlleur = require("../controllers/contactApiController");

router.get("/task", taskApiControlleur.getContacts);
router.get("/:id", taskApiControlleur.getContacts);
router.post("/", taskApiControlleur.createContact);
router.put("/:id", taskApiControlleur.updateContact);
router.delete("/:id", taskApiControlleur.deleteContact);

// export des routes contenu dans le router
module.exports = router;