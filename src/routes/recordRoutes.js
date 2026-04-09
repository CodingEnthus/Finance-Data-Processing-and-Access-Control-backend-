const express = require('express');
const router = express.Router();

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require('../controllers/recordControllers');

const { protect, checkRole } = require('../middleware/authMiddleware');

// ✅ CREATE
router.post('/', protect, checkRole(['admin']), createRecord);

// ✅ READ
router.get('/', protect, checkRole(['admin', 'analyst']), getRecords);

// ✅ UPDATE
router.put('/:id', protect, checkRole(['admin']), updateRecord);

// ✅ DELETE
router.delete('/:id', protect, checkRole(['admin']), deleteRecord);

module.exports = router;