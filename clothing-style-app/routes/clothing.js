const express = require('express');
const router = express.Router();
const Clothing = require('../models/clothing');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

// Get all clothing items (Read)
router.get('/', async (req, res) => {
    try {
        const clothes = await Clothing.find().exec();
        res.render('clothing/index', { title: 'Clothing Items', clothes });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get form to create new clothing item
router.get('/new', (req, res) => {
    res.render('clothing/new', { title: 'Add New Clothing Item' });
});

// Create new clothing item (Create)
router.post('/', async (req, res) => {
    const { name, category, price, description, imageUrl } = req.body;
    const clothing = new Clothing({ name, category, price, description, imageUrl });

    try {
        await clothing.save();
        res.redirect('/clothing');
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get form to edit a clothing item
router.get('/:id/edit', async (req, res) => {
    try {
        const clothing = await Clothing.findById(req.params.id).exec();
        res.render('clothing/edit', { title: 'Edit Clothing Item', clothing });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a clothing item (Update)
router.post('/:id', async (req, res) => {
    const { name, category, price, description, imageUrl } = req.body;

    try {
        await Clothing.findByIdAndUpdate(req.params.id, { name, category, price, description, imageUrl }).exec();
        res.redirect('/clothing');
    } catch (err) {
        res.status(500).send(err);
    }
});

// Delete a clothing item (Delete)
router.post('/:id/delete', async (req, res) => {
    try {
        await Clothing.findByIdAndDelete(req.params.id).exec();
        res.redirect('/clothing');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
