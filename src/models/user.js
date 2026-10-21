import { Schema } from 'mongoose';
import { model } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,

      required: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model('User', userSchema);
