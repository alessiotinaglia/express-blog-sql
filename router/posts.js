const express = require("express");
const router = express.Router();


// mi collego con il postController.js
const { index, show, store, update, modify, destroy } = require('../controllers/postController');

// fa una copia e filtra 
router.get("/", index);

// fa una copia e filtra 
router.get("/:id", show);

// Create - Store
router.post("/", store);

// Update totale - Update
router.put("/:id", update);

// Update parziale - Modify
router.patch("/:id", modify);

// Delete (cancellazione) - Destroy
router.delete("/:id", destroy);


module.exports = router;