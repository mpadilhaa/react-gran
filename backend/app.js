require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;
const app = express();

//config json and form data response

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//solve cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//db connection
require("./config/db.js");

//upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//routes

const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`);
});
