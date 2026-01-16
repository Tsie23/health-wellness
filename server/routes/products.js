const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

//Get all products with filtering
router.get('/', async (req, res) => {
    try {
        const { category, search, featured } = req.query;
        let query = {};

        if (category) query.category = category;
        if (featured) query.featured = true;
        if (search) {
            query.$text = { $search: search };
        }

        const products = await Product.find(query).sort({ createdAt: -1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

//Get single product by slug
reouter.get('/:slug', async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug });
        if(!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

//Get categories
router.get('/categories/list', async (req, res) =>{
    try {
        const categories = await Product.distinct('category');
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;