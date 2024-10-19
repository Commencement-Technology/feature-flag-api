const {
  getFeatureFlags,
  addNewFeatureFlag,
  toggleFeatureFlag,
  deleteFeatureFlag,
} = require("../controllers/featureFlagsController");
const express = require("express");
const firebaseAuthMiddleware = require("../middlewares/firebaseAuthMiddleware");

// routes/featureFlags.js
const featureFlagRouter = express.Router();

// Get all feature flags
featureFlagRouter.get("/", firebaseAuthMiddleware, getFeatureFlags);

// Add a new feature flag
featureFlagRouter.post("/", firebaseAuthMiddleware, addNewFeatureFlag);

// Toggle a feature flag
featureFlagRouter.put("/:id", firebaseAuthMiddleware, toggleFeatureFlag);

// Delete a feature flag
featureFlagRouter.delete("/:id", firebaseAuthMiddleware, deleteFeatureFlag);

module.exports = featureFlagRouter;
