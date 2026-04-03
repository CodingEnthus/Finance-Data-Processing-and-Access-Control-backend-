const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');
// ROUTES
router.get('/summary', authMiddleware.checkRole(['admin','analyst']), dashboardController.getSummary);
router.get('/category', authMiddleware.checkRole(['admin','analyst']), dashboardController.getCategorySummary);

module.exports = router;