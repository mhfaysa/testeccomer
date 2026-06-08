import { Router } from 'express';
import { requireAuth } from '../middleware/auth.middleware.js';
import { placeOrder, getMyOrders } from '../controllers/order.controller.js';

const router = Router();

router.use(requireAuth);
router.post('/', placeOrder);
router.get('/', getMyOrders);

export default router;

