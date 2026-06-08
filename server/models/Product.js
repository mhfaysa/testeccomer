import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, default: 'General', index: true },
    imageUrl: { type: String, default: '' },
    rating: { type: Number, default: 4.5 },
    stock: { type: Number, default: 100 },
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);

