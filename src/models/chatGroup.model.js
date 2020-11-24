import mongoose from "mongoose";

let Schema = mongoose.schema;

let ChatGroupSchema = new Schema({
  name: String,
  userAmount: { type: Number, min: 3, max: 177 },
  messageAmount: { type: Number, default: 0 },
  userId: String,
  members: [{ usersId: String }],

  createAt: { type: Number, default: Date.now },
  updateAt: { type: Number, default: null },
  deleteAt: { type: Number, default: null },
});

module.exports = mongoose.model("chat-group", ChatGroupSchema);
