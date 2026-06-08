import Order from '../models/Order.js';
import User from '../models/User.js';

export async function placeOrder(req, res, next) {
  try {
    const { items, total, paymentMethod, shipping } = req.body;

    if (!items?.length) return res.status(400).json({ message: 'items required' });

    const order = await Order.create({
      userId: req.user.userId,
      items,
      total,
      paymentMethod: paymentMethod || 'cod',
      shipping,
    });

    const user = await User.findById(req.user.userId);
    user.cart = [];
    await user.save();

    res.status(201).json({ data: order });
  } catch (e) {
    next(e);
  }
}

export async function getMyOrders(req, res, next) {
  try {
    const orders = await Order.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.json({ data: orders });
  } catch (e) {
    next(e);
  }
}

