import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  stylistId: String,
  beforeImage: String,
  afterImage: String,
  styleName: String,
});

export default mongoose.models.Portfolio ||
  mongoose.model("Portfolio", PortfolioSchema);