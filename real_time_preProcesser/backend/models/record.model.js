import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true
    },
    value: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now,
      index: true
    }
  },
  { versionKey: false }
);

export default mongoose.model("Record", recordSchema);
