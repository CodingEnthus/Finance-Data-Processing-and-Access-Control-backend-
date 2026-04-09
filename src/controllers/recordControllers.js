const Record = require('../models/Record');

// ✅ CREATE RECORD (with user)
exports.createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      user: req.user.id, // 🔥 THIS LINE IS EVERYTHING
    });

    res.status(201).json(record);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET RECORDS (only user's records)
exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find({
      user: req.user.id, // 🔥 FILTERING LOGIC
    });

    res.json(records);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ✅ UPDATE RECORD (only own record)
exports.updateRecord = async (req, res) => {
    try {
        const record = await Record.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id }, // ✅ SECURITY
            req.body,
            { new: true }
        );

        if (!record) {
            return res.status(404).json({ error: 'Record not found or unauthorized' });
        }

        res.json(record);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// ✅ DELETE RECORD (only own record)
exports.deleteRecord = async (req, res) => {
    try {
        const record = await Record.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id // ✅ SECURITY
        });

        if (!record) {
            return res.status(404).json({ error: 'Record not found or unauthorized' });
        }

        res.json({ message: 'Record deleted' });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};