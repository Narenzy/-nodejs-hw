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

userSchema.pre('save', function () {
  if (this.isNew && !this.username) {
    this.username = this.email;
  }
});

userSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret.password;
    return ret;
  },
});

export const User = model('User', userSchema);
