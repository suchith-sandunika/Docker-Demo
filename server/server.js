const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./model/User');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

// Connecting to MongoDB Server DB .. Had to use ip insead of localhost ...
mongoose.connect(process.env.MONGODB_URI, { 
    // useNewUrlParser: true, 
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    autoIndex: false,
    // poolSize: 5,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 20000, 
}).then(() => {
        console.log('Connected to MongoDB');
    }
    ).catch((error) => {
        console.log('Error connecting to MongoDB', error);
    }); 

// API route for create user ...
app.post('/api/users', async (req, res) => {
    try {
        const { name, email } = req.body;
        // const newUser = req.body;
        // const result = await User.save(newUser);
        const user = new User({ name, email });
        const result = await user.save();
        res.status(201).json({message: 'User created successfully', user: result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); 

// API route for get all users ...
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({message: 'Users fetched successfully', data: users});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log('Server is running on port 8000');
    console.log('http://localhost:8000');
});