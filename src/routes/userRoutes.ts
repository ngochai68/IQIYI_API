import express from 'express';
import { getAllUsers } from '../controllers/UserController';

const router = express.Router();

router.get('/user', getAllUsers);

export default router;
