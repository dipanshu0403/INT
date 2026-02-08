const validateRecord = (req, res, next) => {
  const { name, value } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ message: "Invalid name" });
  }

  if (value === undefined || typeof value !== "number") {
    return res.status(400).json({ message: "Invalid value" });
  }

  next();
};

export default validateRecord;
