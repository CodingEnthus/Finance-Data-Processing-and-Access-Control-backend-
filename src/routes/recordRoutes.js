const express = require('express');
const router = express.Router();

const {
    createRecord,
    getRecords,
    updateRecord,
    deleteRecord
} = require('../controllers/recordControllers');

const { checkRole } = require('../middleware/authMiddleware');

// 🔐 Apply RBAC
router.post('/', checkRole(['admin']), createRecord);
router.get('/', checkRole(['admin', 'analyst', 'viewer']), getRecords);
router.put('/:id', checkRole(['admin']), updateRecord);
router.delete('/:id', checkRole(['admin']), deleteRecord);

module.exports = router;