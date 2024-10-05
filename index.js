import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/AboutUs", (req, res) => {
  res.render("AboutUs.ejs");
});

app.get("/Home", (req, res) => {
    res.render("Home.ejs");
  });
  
app.get("/Institutes", (req, res) => {
    res.render("Institutes.ejs");
  });

app.get("/Programs", (req, res) => {
    res.render("Programs.ejs");
});  

app.get("/Video", (req, res) => {
  res.render("Video.ejs");
});

app.get("/AboutUs1", (req, res) => {
  res.render("AboutUs1.ejs");
});

app.get("/AboutUs2", (req, res) => {
  res.render("AboutUs2.ejs");
});

app.get("/AboutUs3", (req, res) => {
  res.render("AboutUs3.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});