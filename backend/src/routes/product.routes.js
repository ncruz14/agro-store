import { Router } from 'express';
import { list, create, update, remove } from '../controllers/product.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';
const router = Router();
router.get('/', list);
router.post('/', verifyToken, create);
router.put('/:id', verifyToken, update);
router.delete('/:id', verifyToken, remove);
export default router;
