const Record = require('../models/Record');

const getSummary = async (req, res) => {
    try {
        const records = await Record.find();

        let totalIncome = 0;
        let totalExpense = 0;

        records.forEach(record => {
            if (record.type === 'income') {
                totalIncome += record.amount;
            } else if (record.type === 'expense') {
                totalExpense += record.amount;
            }
        });

        res.json({
            totalIncome,
            totalExpense,
            netBalance: totalIncome - totalExpense
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCategorySummary = async (req, res) => {
    try {
        const result = await Record.aggregate([
            {
                $group: {
                    _id: "$category",
                    totalAmount: { $sum: "$amount" }
                }
            }
        ]);

        res.json(result);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getSummary,
    getCategorySummary
};