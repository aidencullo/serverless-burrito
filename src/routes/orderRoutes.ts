import { Router } from 'express';
import { getOrders, submitOrder, getOrderById } from '../controllers/orderController';

const router = Router();

router.get('/orders', getOrders);
router.post('/orders', submitOrder);
router.get('/orders/:id', getOrderById);

export default router;
