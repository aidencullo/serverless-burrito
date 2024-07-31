import { Router } from 'express';
import { getOrders, submitOrder, getOrderById, updateOrder, deleteOrder } from '../controllers/orderController';

const router = Router();

router.get('/orders', getOrders);
router.post('/orders', submitOrder);
router.get('/orders/:id', getOrderById);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;
