import mongoose from "mongoose";

let Schema = mongoose.schema;

let NotificationSchema = new Schema({
  sender: {
    id: String,
    username: String,
    avatar: String,
  },
  receiver: {
    id: String,
    username: String,
    avatar: String,
  },
  type: String,
  content: String,
  inRead: { type: Boolean, default: false },
  createAt: { type: Number, default: Date.now },
});

module.exports = mongoose.model("notification", NotificationSchema);
