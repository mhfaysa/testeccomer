import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    items: { type: [orderItemSchema], required: true },
    total: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['cod', 'card'], default: 'cod' },
    status: { type: String, enum: ['placed', 'processing', 'delivered', 'cancelled'], default: 'placed' },
    shipping: {
      name: { type: String, required: true },
      email: { type: String, default: '' },
      phone: { type: String, default: '' },
      address: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);

