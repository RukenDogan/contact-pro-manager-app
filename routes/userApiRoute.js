const express = require("express"); // Importation du framework Express
const router = express.Router(); // Création d'un routeur Express
const userApiController = require("../controllers/userApiController"); // Importation du contrôleur d'API utilisateur
const user = require("../models/user") // Modèle de user pour interagir avec la base de données

router.get("/", userApiController.getUsers);
router.get("/:id", userApiController.getUser);
router.post("/", userApiController.createUser);
router.put("/:id", userApiController.updateUser);
router.delete("/:id", userApiController.deleteUser);

// export des routes contenu dans le router
module.exports = router;