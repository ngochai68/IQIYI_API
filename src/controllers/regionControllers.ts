// src/controllers/regionControllers.ts
import { Request, Response } from 'express';
import Region, { IRegion } from '../models/regionModels';

// Xem danh sách tất cả các khu vực
export const getAllRegions = async (req: Request, res: Response): Promise<void> => {
  try {
    const regions: IRegion[] = await Region.find({});
    res.status(200).json(regions);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách khu vực.' });
  }
};

// Xem thông tin chi tiết của một khu vực dựa trên id
export const getRegionById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const region: IRegion | null = await Region.findById(id);
    if (region) {
      res.status(200).json(region);
    } else {
      res.status(404).json({ error: 'Không tìm thấy khu vực.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy thông tin khu vực.' });
  }
};

// Thêm một khu vực mới
export const addRegion = async (req: Request, res: Response): Promise<void> => {
  try {
    const newRegion: IRegion = req.body; // Dữ liệu của khu vực mới được gửi qua body request
    const region: IRegion = await Region.create(newRegion);
    res.status(201).json(region);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm khu vực mới.' });
  }
};

// Cập nhật thông tin của một khu vực dựa trên id
export const updateRegionById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedRegionData: IRegion = req.body; // Dữ liệu cập nhật được gửi qua body request
    const region: IRegion | null = await Region.findByIdAndUpdate(id, updatedRegionData, { new: true });
    if (region) {
      res.status(200).json(region);
    } else {
      res.status(404).json({ error: 'Không tìm thấy khu vực.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật thông tin khu vực.' });
  }
};

// Xóa một khu vực dựa trên id
export const deleteRegionById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const region: IRegion | null = await Region.findByIdAndDelete(id);
    if (region) {
      res.status(200).json({ message: 'Xóa khu vực thành công.' });
    } else {
      res.status(404).json({ error: 'Không tìm thấy khu vực.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi xóa khu vực.' });
  }
};
