import Record from "../models/record.model.js";

export const createRecord = async (req, res) => {
  try {
    const record = await Record.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRecords = async (req, res) => {
  try {
    const records = await Record.find()
      .sort({ timestamp: -1 })
      .limit(5000);

    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
