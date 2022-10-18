import mongoose from "mongoose";

/*
In the following line, the 3rd argument with the string "pokedex"
forces MongoDB to use the name "pokedex" for the collection
 */

const pokedexSchema = new mongoose.Schema({
  name: {
    english: { type: String, required: true, minLength: 3, maxLength: 24 },
    japanese: { type: String, minLength: 3, maxLength: 24 },
    chinese: { type: String, minLength: 3, maxLength: 24 },
    french: { type: String, minLength: 3, maxLength: 24 },
  },
  type: [
    {
      type: String,
      required: true,
      enum: [
        "grass",
        "poison",
        "fire",
        "flying",
        "water",
        "bug",
        "normal",
        "electric",
        "ground",
        "fairy",
        "fighting",
        "psychic",
        "rock",
        "steel",
        "ice",
        "ghost",
        "dragon",
        "dark",
      ],
    },
  ],
  base: {
    HP: { type: Number, default: 20, min: 10 },
    Attack: { type: Number, default: 5, min: 1 },
    Defense: { type: Number, default: 1, min: 0 },
    Speed: { type: Number, default: 5, min: 20 },
  },
});

const Pokedex = mongoose.model("pokedex", pokedexSchema, "pokedex");

export default Pokedex;
