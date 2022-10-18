import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import pokedexRoute from "./routes/pokedex.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const PORT = process.env.PORT;

app.use("/pokedex", pokedexRoute);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log("DB connected and listining on port: ", PORT),
    );
  })
  .catch((error) => {
    console.log(error);
  });
