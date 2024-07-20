var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

// Home page
router.get('/', function (req, res, next) {
    res.render('home', { title: 'Clothing Style App' });
});

// Registration page
router.get('/register', function (req, res) {
    res.render('register', { title: 'Register' });
});

router.post('/register', async function (req, res) {
    try {
        const existingUser = await User.findOne({ username: req.body.username }).exec();
        if (existingUser) {
            req.flash('error', 'Username already exists.');
            return res.redirect('/register');
        }

        const newUser = new User({ username: req.body.username, password: req.body.password });
        await newUser.save();
        req.flash('success', 'Registration successful.');
        res.redirect('/login');
    } catch (err) {
        req.flash('error', 'Registration failed.');
        res.redirect('/register');
    }
});

// Login page
router.get('/login', (req, res) => {
    res.render('login', { error: req.flash('error'), success: req.flash('success') });
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
    successFlash: 'Welcome!'
}));

// GitHub authentication
router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });

router.get('/logout', function (req, res) {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.flash('success', 'You have been logged out.');
        res.redirect('/login');
    });
});

module.exports = router;
