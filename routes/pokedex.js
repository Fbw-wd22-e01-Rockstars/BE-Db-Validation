import express from "express";
import Pokedex from "../models/Pokedex.js";

const router = express.Router();

router.get("/all", async (request, response) => {
  try {
    const pokemon = await Pokedex.find();

    response.send(pokemon);
  } catch (error) {
    console.log(error);
    response.status(500).send("Error performing request");
  }
});

router.get("/name/:name", async (request, response) => {
  const { name } = request.params;
  let { language } = request.query;

  if (!language) {
    language = "english";
  }

  try {
    const pokemon = await Pokedex.find({ [`name.${language}`]: name });

    if (!pokemon.length) {
      return response.status(404).send("No pokemon found");
    }

    response.send(pokemon);
  } catch (error) {
    console.log(error);
    response.status(500).send("Error performing request");
  }
});

router.get("/type/:type", async (request, response) => {
  const { type } = request.params;

  try {
    const pokemon = await Pokedex.find({ type: type.toLowerCase() });

    if (!pokemon.length) {
      return response.status(404).send("No pokemon found");
    }

    response.send(pokemon);
  } catch (error) {
    console.log(error);
    response.status(500).send("Error performing request");
  }
});

export default router;
