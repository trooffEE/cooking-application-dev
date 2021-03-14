import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import recipeRoute from './routes/recipe.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const CONNECTION_STRING = `mongodb+srv://${process.env.ADMIN_NAME}:${process.env.ADMIN_PASSWORD}@cluster0.gb3vb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: "true",
  useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
}).catch(error => console.log(error.message));

mongoose.set("useFindAndModify", false);

//routing 
app.use('/recipes', recipeRoute);
