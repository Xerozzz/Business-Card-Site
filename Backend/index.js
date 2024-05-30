import express from "express";
import * as mysql from "mysql2";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// to send from html body
app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});

app.get("/:username", (req, res) => {
  var username = req.params.username;
  const q = `SELECT * FROM users WHERE username = "${username}"`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
