var express = require('express');
var router = express.Router();

const Book = require("../models/book");

/* GET home page. */
router.get('/home', (req, res) => {
  res.render('home');
});
// get know me page
router.get('/signup', async(req, res,next) => {
  let book = await Book.find()
  res.render('signup', {dataset: book});
});
//get projects page
router.get('/signin', (req, res) => {
  res.render('signin');
});
//get contact me page
router.get('/recommend', (req, res) => {
  res.render('recommend');
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
