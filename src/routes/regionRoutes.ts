// src/routes/regionRoutes.ts
import express from 'express';
import { getAllRegions, getRegionById, addRegion, updateRegionById, deleteRegionById } from '../controllers/regionControllers';

const router = express.Router();

// Route để lấy danh sách tất cả các khu vực
router.get('/', getAllRegions);

// Route để lấy thông tin chi tiết của một khu vực dựa trên id
router.get('/:id', getRegionById);

// Route để thêm một khu vực mới
router.post('/', addRegion);

// Route để cập nhật thông tin của một khu vực dựa trên id
router.put('/:id', updateRegionById);

// Route để xóa một khu vực dựa trên id
router.delete('/:id', deleteRegionById);

export default router;
