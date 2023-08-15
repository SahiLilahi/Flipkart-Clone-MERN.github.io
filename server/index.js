import express from "express";
import dotenv from "dotenv";
import Connection from "./Database/Db.js";
import DefaultData from "./Default.js";

const app = express();

dotenv.config();

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting server:", error);
  } else {
    console.log(`Server listening on http://localhost:${PORT}`);
  }
});

DefaultData();
