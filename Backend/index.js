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

// Get All Users
app.get("/users", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});

// Get Specific User
app.get("/:username", (req, res) => {
  var username = req.params.username;
  const q = `SELECT * FROM users WHERE username = "${username}"`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Edit User
app.put("/edit/:username", (req, res) => {
  var username = req.params.username;
  var email = req.body.email;
  var phone = req.body.phone;
  var company = req.body.company;
  var role = req.body.role;
  var picurl = req.body.picurl;

  const q = `UPDATE users SET email="${email}",phone="${phone}",company="${company}",role="${role}",picurl="${picurl}" WHERE username = "${username}"`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Create New User
app.post("/create", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var phone = req.body.phone;
  var company = req.body.company;
  var role = req.body.role;
  var picurl = req.body.picurl;

  console.log(username);
  const q = `INSERT INTO users(username,password,email,phone,company,role,picurl) VALUES ("${username}","${password}","${email}","${phone}","${company}","${role}","${picurl}")`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data.insertId);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
