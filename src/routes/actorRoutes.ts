// src/routes/actorRoutes.ts
import express from 'express';
import { getAllActors, getActorById, addActor, updateActorById, deleteActorById } from '../controllers/actorControllers';

const router = express.Router();

// Route để lấy danh sách tất cả diễn viên
router.get('/', getAllActors);

// Route để lấy thông tin chi tiết của một diễn viên dựa trên id
router.get('/:id', getActorById);

// Route để thêm một diễn viên mới
router.post('/', addActor);

// Route để cập nhật thông tin của một diễn viên dựa trên id
router.put('/:id', updateActorById);

// Route để xóa một diễn viên dựa trên id
router.delete('/:id', deleteActorById);

export default router;
