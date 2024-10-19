const { db } = require("../config/firebase");

const getRecipes = async (req, res) => {
  try {
    const recipeCollection = await db.collection("recipes").get();
    const recipes = recipeCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes", error });
  }
};

const addRecipe = async (req, res) => {
  const { title, description, imageUrl } = req.body;
  try {
    const newRecipe = { title, description, imageUrl };
    await db.collection("recipes").add(newRecipe);
    const recipeCollection = await db.collection("recipes").get();
    const recipes = recipeCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error adding recipe", error });
  }
};

const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { title, description, imageUrl } = req.body;
  try {
    await db
      .collection("recipes")
      .doc(id)
      .update({ title, description, imageUrl });
    const recipeCollection = await db.collection("recipes").get();
    const recipes = recipeCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error updating recipe", error });
  }
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    await db.collection("recipes").doc(id).delete();
    const recipeCollection = await db.collection("recipes").get();
    const recipes = recipeCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error deleting recipe", error });
  }
};

module.exports = { getRecipes, addRecipe, updateRecipe, deleteRecipe };
