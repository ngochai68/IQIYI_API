import express from 'express';
import { getUser } from '../controllers/UserController';

const router = express.Router();

router.get('/user', getUser);

export default router;
