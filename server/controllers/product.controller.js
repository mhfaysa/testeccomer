import Product from '../models/Product.js';

export async function listProducts(req, res, next) {
  try {
    const { q, category } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (q) filter.title = { $regex: q, $options: 'i' };

    const products = await Product.find(filter).sort({ createdAt: -1 }).limit(50);
    res.json({ data: products });
  } catch (e) {
    next(e);
  }
}

export async function getProduct(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ data: product });
  } catch (e) {
    next(e);
  }
}

export async function createProduct(req, res, next) {
  try {
    const { title, description, price, category, imageUrl, rating, stock } = req.body;

    const product = await Product.create({
      title,
      description,
      price,
      category,
      imageUrl,
      rating,
      stock,
    });

    res.status(201).json({ data: product });
  } catch (e) {
    next(e);
  }
}

