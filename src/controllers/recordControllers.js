const Record = require('../models/Record');
exports.createRecord = async (req, res) => {
    try {
        const { amount, type, category } = req.body;

        // validation
        if (!amount || !type || !category) {
            return res.status(400).json({
                error: 'Amount, type, and category are required'
            });
        }

        if (!['income', 'expense'].includes(type)) {
            return res.status(400).json({
                error: 'Type must be income or expense'
            });
        }

        const record = await Record.create(req.body);

        res.status(201).json(record);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.getRecords = async (req, res) => {
    try {
        let { page = 1, limit = 5, type, category } = req.query;

        page = parseInt(page);
        limit = parseInt(limit);

        const skip = (page - 1) * limit;
        let filter = {};

        if (type) {
            filter.type = type;
        }

        if (category) {
            filter.category = category;
        }

        const records = await Record.find(filter)
            .skip(skip)
            .limit(limit);

        const total = await Record.countDocuments(filter);

        res.json({
            totalRecords: total,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            data: records
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.updateRecord = async (req, res) => {
    try {
        const record = await Record.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(record);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
exports.deleteRecord = async (req, res) => {
    try {
        await Record.findByIdAndDelete(req.params.id);
        res.json({ message: 'Record deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};