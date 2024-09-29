// app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://harshitsaini61:test123@workoutbuddy.ekysi1q.mongodb.net/?retryWrites=true&w=majority&appName=WorkoutBuddy')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Start the server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
