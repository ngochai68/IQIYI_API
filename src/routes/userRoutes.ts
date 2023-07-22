// src/routes/userRoutes.ts
import express from 'express';
import { getAllUsers, getUserById, addUser, updateUserById, deleteUserById } from '../controllers/userControllers';

const router = express.Router();

// Route để lấy danh sách tất cả người dùng
router.get('/', getAllUsers);

// Route để lấy thông tin chi tiết của một người dùng dựa trên id
router.get('/:id', getUserById);

// Route để thêm một người dùng mới
router.post('/', addUser);

// Route để cập nhật thông tin của một người dùng dựa trên id
router.put('/:id', updateUserById);

// Route để xóa một người dùng dựa trên id
router.delete('/:id', deleteUserById);

export default router;
