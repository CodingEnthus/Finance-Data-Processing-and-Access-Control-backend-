const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected');

    app.listen(5000, () => {
        console.log('Server running on port 5000');
    });
})
.catch(err => console.log(err));
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
const recordRoutes=require('./routes/recordRoutes.js');
app.use('/api/records',recordRoutes);
const dashboardRoutes = require('./routes/dashboardRoutes');
app.use('/api/dashboard', dashboardRoutes);