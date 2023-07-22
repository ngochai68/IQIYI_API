// src/controllers/genreControllers.ts
import { Request, Response } from 'express';
import Genre, { IGenre } from '../models/genreModels';

// Xem danh sách tất cả thể loại phim
export const getAllGenres = async (req: Request, res: Response): Promise<void> => {
  try {
    const genres: IGenre[] = await Genre.find({});
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách thể loại phim.' });
  }
};

// Xem thông tin chi tiết của một thể loại phim dựa trên id
export const getGenreById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const genre: IGenre | null = await Genre.findOne({ id: Number(id) });
    if (genre) {
      res.status(200).json(genre);
    } else {
      res.status(404).json({ error: 'Không tìm thấy thể loại phim.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy thông tin thể loại phim.' });
  }
};

// Thêm một thể loại phim mới
export const addGenre = async (req: Request, res: Response): Promise<void> => {
  try {
    const newGenre: IGenre = req.body; // Dữ liệu của thể loại phim mới được gửi qua body request
    const genre: IGenre = await Genre.create(newGenre);
    res.status(201).json(genre);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm thể loại phim mới.' });
  }
};

// Cập nhật thông tin của một thể loại phim dựa trên id
export const updateGenreById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedGenreData: IGenre = req.body; // Dữ liệu cập nhật được gửi qua body request
    const genre: IGenre | null = await Genre.findOneAndUpdate({ id: Number(id) }, updatedGenreData, { new: true });
    if (genre) {
      res.status(200).json(genre);
    } else {
      res.status(404).json({ error: 'Không tìm thấy thể loại phim.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật thông tin thể loại phim.' });
  }
};

// Xóa một thể loại phim dựa trên id
export const deleteGenreById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const genre: IGenre | null = await Genre.findOneAndDelete({ id: Number(id) });
    if (genre) {
      res.status(200).json({ message: 'Xóa thể loại phim thành công.' });
    } else {
      res.status(404).json({ error: 'Không tìm thấy thể loại phim.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi xóa thể loại phim.' });
  }
};
