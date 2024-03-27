import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, default:"None" },
  lastName: {type: String, default:"None" },
  photo: { type: String, default:"None" },
  })

const User = models.User || model('User', UserSchema);

export default User;