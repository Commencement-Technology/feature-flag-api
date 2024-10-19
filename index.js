const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");
const featureFlagRoutes = require("./routes/featureFlagsRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5002;

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend's URL
    methods: "GET,POST,PUT,DELETE", // Allowed methods
    allowedHeaders: "Content-Type,Authorization", // Allowed headers
  })
);

app.use(express.json());

app.use("/api/recipes", recipeRoutes);
app.use("/api/feature-flags", featureFlagRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
