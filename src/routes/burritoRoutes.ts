import { Router } from 'express';
import { getBurritos, getBurritoById, createBurrito, updateBurrito, deleteBurrito } from '../controllers/burritoController';

const router = Router();

router.get('/burrito', getBurritos);
router.get('/burrito/:id', getBurritoById);
router.post('/burrito', createBurrito);
router.put('/burrito/:id', updateBurrito);
router.delete('/burrito/:id', deleteBurrito);

export default router;
