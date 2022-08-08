import mongoose from "mongoose";

const levelSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    primaryKey: true,
  },
  level: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Level", levelSchema);
