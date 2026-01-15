require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

//Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Test route
app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error: ', err));

//Start server
const PORT = process.nextTick.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http:localhost:${PORT}`);
});