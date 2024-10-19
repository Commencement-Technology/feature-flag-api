const admin = require("firebase-admin");

const firebaseAuthMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    // Verify the token using Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Attach decoded token to request for use in later routes
    req.user = decodedToken;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Firebase Token Verification Error:", error); // Log the error for debugging

    let errorMessage = "Unauthorized";
    if (error.code === "auth/id-token-expired") {
      errorMessage = "Token has expired";
    } else if (error.code === "auth/invalid-id-token") {
      errorMessage = "Invalid token";
    }

    return res
      .status(401)
      .json({ message: errorMessage, error: error.message });
  }
};

module.exports = firebaseAuthMiddleware;
