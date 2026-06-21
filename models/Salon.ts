import mongoose from "mongoose";

const SalonSchema = new mongoose.Schema({
  name: String,
  city: String,
  address: String,
  rating: Number,
});

export default mongoose.models.Salon ||
  mongoose.model("Salon", SalonSchema);