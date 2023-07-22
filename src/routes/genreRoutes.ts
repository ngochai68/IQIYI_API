// src/routes/genreRoutes.ts
import express from 'express';
import { getAllGenres, getGenreById, addGenre, updateGenreById, deleteGenreById } from '../controllers/genreControllers';

const router = express.Router();

// Route để lấy danh sách tất cả thể loại phim
router.get('/', getAllGenres);

// Route để lấy thông tin chi tiết của một thể loại phim dựa trên id
router.get('/:id', getGenreById);

// Route để thêm một thể loại phim mới
router.post('/', addGenre);

// Route để cập nhật thông tin của một thể loại phim dựa trên id
router.put('/:id', updateGenreById);

// Route để xóa một thể loại phim dựa trên id
router.delete('/:id', deleteGenreById);

export default router;
