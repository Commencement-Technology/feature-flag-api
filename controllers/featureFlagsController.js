const { db } = require("../config/firebase");

// Fetch all feature flags
const getFeatureFlags = async (req, res) => {
  try {
    const featureFlagCollection = await db.collection("featureFlags").get();
    const featureFlags = featureFlagCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(featureFlags);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feature flags", error });
  }
};

// Add a new feature flag
const addNewFeatureFlag = async (req, res) => {
  const { featureName, enabled } = req.body;
  try {
    const newFeature = { featureName, enabled };
    await db.collection("featureFlags").add(newFeature);

    // Fetch updated list of feature flags
    const featureFlagCollection = await db.collection("featureFlags").get();
    const featureFlags = featureFlagCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(featureFlags);
  } catch (error) {
    res.status(500).json({ message: "Error adding new feature flag", error });
  }
};

// Toggle a feature flag
const toggleFeatureFlag = async (req, res) => {
  const { id } = req.body; // Expecting 'id' to be passed in the body
  try {
    const flagDoc = await db.collection("featureFlags").doc(id).get();

    if (!flagDoc.exists) {
      return res.status(404).json({ message: "Feature flag not found" });
    }

    // Toggling 'enabled' field
    const currentStatus = flagDoc.data().enabled;
    await db
      .collection("featureFlags")
      .doc(id)
      .update({ enabled: !currentStatus });

    // Fetch updated list of feature flags
    const featureFlagCollection = await db.collection("featureFlags").get();
    const featureFlags = featureFlagCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(featureFlags);
  } catch (error) {
    res.status(500).json({ message: "Error toggling feature flag", error });
  }
};

// Delete a feature flag
const deleteFeatureFlag = async (req, res) => {
  const { id } = req.params;
  try {
    const flagDoc = await db.collection("featureFlags").doc(id).get();

    if (!flagDoc.exists) {
      return res.status(404).json({ message: "Feature flag not found" });
    }

    await db.collection("featureFlags").doc(id).delete();

    // Fetch updated list of feature flags
    const featureFlagCollection = await db.collection("featureFlags").get();
    const featureFlags = featureFlagCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(featureFlags);
  } catch (error) {
    res.status(500).json({ message: "Error deleting feature flag", error });
  }
};

module.exports = {
  getFeatureFlags,
  addNewFeatureFlag,
  toggleFeatureFlag,
  deleteFeatureFlag,
};
