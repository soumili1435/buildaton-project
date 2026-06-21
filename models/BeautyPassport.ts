import mongoose from "mongoose";

const BeautyPassportSchema = new mongoose.Schema({
  userId: String,
  hairType: String,
  hairHistory: String,
  skinTone: String,
  allergies: [String],
});

const BeautyPassport =
  mongoose.models.BeautyPassport ||
  mongoose.model("BeautyPassport", BeautyPassportSchema);

export default BeautyPassport;