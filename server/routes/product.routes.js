import { Router } from 'express';
import {
  listProducts,
  getProduct,
  createProduct,
} from '../controllers/product.controller.js';
import { requireAuth, requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', listProducts);
router.get('/:id', getProduct);

// Basic admin create (so admin dashboard has something)
router.post('/', requireAuth, requireAdmin, createProduct);

export default router;

