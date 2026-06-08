// Cart is stored in user document for simplicity in this scaffold.
// Next iterations can refactor to a dedicated Cart model.
import User from '../models/User.js';
import Product from '../models/Product.js';

export async function getMyCart(req, res, next) {
  try {
    const user = await User.findById(req.user.userId);
    res.json({ data: user.cart || [] });
  } catch (e) {
    next(e);
  }
}

export async function addToCart(req, res, next) {
  try {
    const { productId, quantity } = req.body;
    const qty = Math.max(1, Number(quantity || 1));

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.stock < qty) return res.status(400).json({ message: 'Insufficient stock' });

    const user = await User.findById(req.user.userId);
    user.cart = user.cart || [];

    const idx = user.cart.findIndex((i) => String(i.productId) === String(productId));
    if (idx >= 0) {
      user.cart[idx].quantity += qty;
    } else {
      user.cart.push({ productId, quantity: qty, price: product.price, title: product.title });
    }

    await user.save();
    res.status(201).json({ data: user.cart });
  } catch (e) {
    next(e);
  }
}

export async function removeFromCart(req, res, next) {
  try {
    const { productId } = req.body;

    const user = await User.findById(req.user.userId);
    user.cart = user.cart || [];
    user.cart = user.cart.filter((i) => String(i.productId) !== String(productId));
    await user.save();

    res.json({ data: user.cart });
  } catch (e) {
    next(e);
  }
}

