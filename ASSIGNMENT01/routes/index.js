// index.js file contains all the funtionalities of the website
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home.hbs', (req, res) => {
  res.render('home.hbs');
});
// get know me page
router.get('/knowme.hbs', (req, res) => {
  res.render('knowme.hbs');
});
//get projects page
router.get('/projects.hbs', (req, res) => {
  res.render('projects.hbs');
});
//get contact me page
router.get('/contact.hbs', (req, res) => {
  res.render('contact.hbs');
});

module.exports = router;
