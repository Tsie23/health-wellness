const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String },
    slug: { type: String, unique: true, required: true },
    metaTitle: String,
    metaDescription: String,
    tags: [String],
    published: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now}
});

blogSchema.index({ title: 'text', content: 'text', tags: 'text' });

module.exports = mongoose.model('Blog', blogSchema);