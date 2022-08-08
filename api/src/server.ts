import express from "express";

import cors from "cors";

import * as dotenv from "dotenv";

import connectToDatabase from "./database/database";

import { router } from "./routes";

dotenv.config();

connectToDatabase({ useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const port = 3333;

app.listen(port, () => {
  console.log(`⚡ backend started at http://localhost:3333/developers 🚀`);
});
