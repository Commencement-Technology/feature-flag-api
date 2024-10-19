const express = require("express");
const {
  getRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const firebaseAuthMiddleware = require("../middlewares/firebaseAuthMiddleware");

const router = express.Router();

router.get("/", firebaseAuthMiddleware, getRecipes);
router.post("/", firebaseAuthMiddleware, addRecipe);
router.put("/:id", firebaseAuthMiddleware, updateRecipe);
router.delete("/:id", firebaseAuthMiddleware, deleteRecipe);

module.exports = router;
