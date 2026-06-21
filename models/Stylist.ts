import mongoose from "mongoose";

const StylistSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  city: String,
  price: Number,
  rating: Number,
});

const Stylist =
  mongoose.models.Stylist ||
  mongoose.model("Stylist", StylistSchema);

export default Stylist;