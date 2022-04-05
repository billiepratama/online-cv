//jshint esversion:6

const express = require("express");


const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function(req, res){
  res.render("home");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
