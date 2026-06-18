import mongoose from "mongoose";

const BookingSchema =
new mongoose.Schema({

  salon:String,

  name:String,

  service:String,

  date:String

},
{
  timestamps:true
});

export default
mongoose.models.Booking ||
mongoose.model(
  "Booking",
  BookingSchema
);