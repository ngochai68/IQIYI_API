// src/controllers/directorControllers.ts
import { Request, Response } from 'express';
import Director, { IDirector } from '../models/directorModels';

// Xem danh sách tất cả đạo diễn
export const getAllDirectors = async (req: Request, res: Response): Promise<void> => {
  try {
    const directors: IDirector[] = await Director.find({});
    res.status(200).json(directors);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách đạo diễn.' });
  }
};

// Xem thông tin chi tiết của một đạo diễn dựa trên id
export const getDirectorById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const director: IDirector | null = await Director.findOne({ id: Number(id) });
    if (director) {
      res.status(200).json(director);
    } else {
      res.status(404).json({ error: 'Không tìm thấy đạo diễn.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy thông tin đạo diễn.' });
  }
};

// Thêm một đạo diễn mới
export const addDirector = async (req: Request, res: Response): Promise<void> => {
  try {
    const newDirector: IDirector = req.body; // Dữ liệu của đạo diễn mới được gửi qua body request
    const director: IDirector = await Director.create(newDirector);
    res.status(201).json(director);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm đạo diễn mới.' });
  }
};

// Cập nhật thông tin của một đạo diễn dựa trên id
export const updateDirectorById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedDirectorData: IDirector = req.body; // Dữ liệu cập nhật được gửi qua body request
    const director: IDirector | null = await Director.findOneAndUpdate({ id: Number(id) }, updatedDirectorData, { new: true });
    if (director) {
      res.status(200).json(director);
    } else {
      res.status(404).json({ error: 'Không tìm thấy đạo diễn.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật thông tin đạo diễn.' });
  }
};

// Xóa một đạo diễn dựa trên id
export const deleteDirectorById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const director: IDirector | null = await Director.findOneAndDelete({ id: Number(id) });
    if (director) {
      res.status(200).json({ message: 'Xóa đạo diễn thành công.' });
    } else {
      res.status(404).json({ error: 'Không tìm thấy đạo diễn.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi xóa đạo diễn.' });
  }
};
