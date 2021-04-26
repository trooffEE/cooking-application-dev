import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import key from "./config/key.js";
import passport from "passport";
import users from "./routes/api/users.js";
import recipe from "./routes/recipe.js";
import pas from "./config/passport.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const db = key.mongoURI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(db, {
    useNewUrlParser: "true",
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  })
  .catch((error) => console.log(error.message));

// Passport middleware
app.use(passport.initialize()); // Passport config
pas(passport);
// Routes
app.use("/api/users", users);
app.use("/your-recipes", recipe);

mongoose.set("useFindAndModify", false);