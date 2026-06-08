import { Router } from 'express';
import { requireAuth, requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();
router.use(requireAuth, requireAdmin);

router.get('/stats', (_req, res) => {
  res.json({ users: 0, products: 0, orders: 0 });
});

export default router;

