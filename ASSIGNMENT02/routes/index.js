var express = require('express');
var router = express.Router();

const Book = require("../models/book");

/* GET home page. */
router.get('/home', (req, res) => {
  res.render('home');
});
// get signup page
router.get('/signup', async(req, res,next) => {
  let book = await Book.find()
  res.render('signup', {dataset: book});
});
//get signin  page
router.get('/signin', (req, res) => {
  res.render('signin');
});
//get recommend page
router.get('/recommend', (req, res) => {
  res.render('recommend');
});

router.post("/signup", async(req, res, next)=>{
  let newBook = new Book({
    username: req.body.username,
    password: req.body.password,
  });
  await newBook.save();
  res.redirect("/signin");
});
module.exports = router;
