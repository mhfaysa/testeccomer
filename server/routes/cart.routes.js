import { Router } from 'express';
import { requireAuth } from '../middleware/auth.middleware.js';
import { addToCart, removeFromCart, getMyCart } from '../controllers/cart.controller.js';

const router = Router();

router.use(requireAuth);
router.get('/', getMyCart);
router.post('/add', addToCart);
router.post('/remove', removeFromCart);

export default router;

