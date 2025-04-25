import { Schema, model } from 'mongoose';
const productSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    imageUrl: String,
    description: String
  },
  { timestamps:true }
);
export default model('Product', productSchema);
