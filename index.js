require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const connectDB = require('./config/dbConnection');
const mongoose = require('mongoose');

connectDB();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/users", userRouter);

app.all('*', (req, res) => {
    res.status(404).json({ message: '404 Not Found' });
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});