// src/routes/episodeRoutes.ts
import express from 'express';
import { getAllEpisodes, getEpisodeById, addEpisode, updateEpisodeById, deleteEpisodeById } from '../controllers/episodeControllers';

const router = express.Router();

// Route để lấy danh sách tất cả các tập phim
router.get('/', getAllEpisodes);

// Route để lấy thông tin chi tiết của một tập phim dựa trên id
router.get('/:id', getEpisodeById);

// Route để thêm một tập phim mới
router.post('/', addEpisode);

// Route để cập nhật thông tin của một tập phim dựa trên id
router.put('/:id', updateEpisodeById);

// Route để xóa một tập phim dựa trên id
router.delete('/:id', deleteEpisodeById);

export default router;
