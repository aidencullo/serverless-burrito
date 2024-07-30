import { Router } from 'express';
import { getBurritos } from '../controllers/burritoController';

const router = Router();

router.get('/burrito', getBurritos);

export default router;
