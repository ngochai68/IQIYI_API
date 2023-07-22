// src/routes/directorRoutes.ts
import express from 'express';
import { getAllDirectors, getDirectorById, addDirector, updateDirectorById, deleteDirectorById } from '../controllers/directorControllers';

const router = express.Router();

// Route để lấy danh sách tất cả đạo diễn
router.get('/', getAllDirectors);

// Route để lấy thông tin chi tiết của một đạo diễn dựa trên id
router.get('/:id', getDirectorById);

// Route để thêm một đạo diễn mới
router.post('/', addDirector);

// Route để cập nhật thông tin của một đạo diễn dựa trên id
router.put('/:id', updateDirectorById);

// Route để xóa một đạo diễn dựa trên id
router.delete('/:id', deleteDirectorById);

export default router;
