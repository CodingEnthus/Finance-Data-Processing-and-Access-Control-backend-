const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// ✅ CORS configuration (IMPORTANT for frontend)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'role']
}));

// ✅ Middleware
app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// ✅ Routes
const userRoutes = require('./routes/userRoutes');
const recordRoutes = require('./routes/recordRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/api/users', userRoutes);
app.use('/api/records', recordRoutes);
app.use('/api/dashboard', dashboardRoutes);

// ✅ MongoDB connection + server start
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected');

    const PORT = process.env.PORT || 5000; // ✅ important for Render

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => console.log(err));