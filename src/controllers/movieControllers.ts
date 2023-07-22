// src/controllers/movieControllers.ts
import { Request, Response } from 'express';
import Movie, { IMovie } from '../models/movieModels';

// Xem danh sách tất cả các phim
export const getAllMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const movies: IMovie[] = await Movie.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách phim.' });
  }
};

// Xem thông tin chi tiết của một bộ phim dựa trên id
export const getMovieById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const movie: IMovie | null = await Movie.findOne({ id: Number(id) });
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ error: 'Không tìm thấy bộ phim.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy thông tin phim.' });
  }
};

// Thêm một bộ phim mới
export const addMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const newMovie: IMovie = req.body; // Dữ liệu của bộ phim mới được gửi qua body request
    const movie: IMovie = await Movie.create(newMovie);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm bộ phim mới.' });
  }
};

// Cập nhật thông tin của một bộ phim dựa trên id
export const updateMovieById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedMovieData: IMovie = req.body; // Dữ liệu cập nhật được gửi qua body request
    const movie: IMovie | null = await Movie.findOneAndUpdate({ id: Number(id) }, updatedMovieData, { new: true });
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ error: 'Không tìm thấy bộ phim.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật thông tin phim.' });
  }
};

// Xóa một bộ phim dựa trên id
export const deleteMovieById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const movie: IMovie | null = await Movie.findOneAndDelete({ id: Number(id) });
    if (movie) {
      res.status(200).json({ message: 'Xóa bộ phim thành công.' });
    } else {
      res.status(404).json({ error: 'Không tìm thấy bộ phim.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi xóa bộ phim.' });
  }
};
