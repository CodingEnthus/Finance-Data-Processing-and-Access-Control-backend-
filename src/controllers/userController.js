const User = require('../models/User');
exports.createUser = async (req, res) => {
    try {
        const { name, email, role } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                error: 'Name and email are required'
            });
        }

        if (role && !['admin', 'analyst', 'viewer'].includes(role)) {
            return res.status(400).json({
                error: 'Invalid role'
            });
        }

        const user = await User.create(req.body);

        res.status(201).json(user);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({
            error: 'Failed to delete user',
            message: err.message
        });
    }
};