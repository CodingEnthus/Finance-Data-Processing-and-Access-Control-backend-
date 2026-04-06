const express = require('express');
const router = express.Router();

const { createUser, getUsers, deleteUser} = require('../controllers/userController');
const { checkRole } = require('../middleware/authMiddleware');
router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:id',checkRole(['admin']),deleteUser);

module.exports = router;