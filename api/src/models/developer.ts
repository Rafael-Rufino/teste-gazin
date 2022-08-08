import mongoose from "mongoose";

const developerSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    primaryKey: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  hobby: {
    type: String,
    required: true,
  },

  level: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Developer", developerSchema);
