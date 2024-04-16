var express = require('express');
var router = express.Router();

const Book = require("../models/book");

/* GET home page. */
router.get('/home.hbs', (req, res) => {
  res.render('home.hbs');
});
// get know me page
router.get('/signup.hbs', async(req, res,next) => {
  let book = await Book.find()
  res.render('signup.hbs', {dataset: book});
});
//get projects page
router.get('/signin.hbs', (req, res) => {
  res.render('signin.hbs');
});
//get contact me page
router.get('/recommend.hbs', (req, res) => {
  res.render('recommend.hbs');
});

router.post("/signup", async(req, res, next)=>{
  let newBook = new Book({
    username: req.body.username,
    password: req.body.password,
  });
  await newBook.save();
  res.redirect("/signup");
});
module.exports = router;
