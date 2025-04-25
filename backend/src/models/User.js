import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email:{ type: String, required: true, unique: true },
    password:{ type: String, required: true },
    role:{ type: String, enum:['admin','client'], default:'client' }
  },
  { timestamps:true }
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.compare = function (pwd) {
  return bcrypt.compare(pwd, this.password);
};

export default model('User', userSchema);
