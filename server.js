import dotenv from "dotenv";
import express from "express";

dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();
const port = 3001;

app.use(express.json());

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});
