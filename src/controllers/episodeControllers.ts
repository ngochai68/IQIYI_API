// src/controllers/episodeControllers.ts
import { Request, Response } from 'express';
import Episode, { IEpisode } from '../models/episodeModels';

// Xem danh sách tất cả các tập phim
export const getAllEpisodes = async (req: Request, res: Response): Promise<void> => {
  try {
    const episodes: IEpisode[] = await Episode.find({});
    res.status(200).json(episodes);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách tập phim.' });
  }
};

// Xem thông tin chi tiết của một tập phim dựa trên id
export const getEpisodeById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const episode: IEpisode | null = await Episode.findById(id);
    if (episode) {
      res.status(200).json(episode);
    } else {
      res.status(404).json({ error: 'Không tìm thấy tập phim.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy thông tin tập phim.' });
  }
};

// Thêm một tập phim mới
export const addEpisode = async (req: Request, res: Response): Promise<void> => {
  try {
    const newEpisode: IEpisode = req.body; // Dữ liệu của tập phim mới được gửi qua body request

    // Lấy đường dẫn đã được multer lưu trữ trong req.file
    const file: any = req.file;

    if (file) {
      const imgPath = file.path;

      // Loại bỏ phần 'public/' khỏi đường dẫn và thay thế bằng '/'
      const imgUrl = imgPath.replace("public\\", "/");

      // Thêm http://localhost:3000 vào đường dẫn ảnh
      newEpisode.img = `http://localhost:3000${imgUrl}`;
    }

    const episode: IEpisode = await Episode.create(newEpisode);
    res.status(201).json(episode);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm tập phim mới.' });
  }
};

// Cập nhật thông tin của một tập phim dựa trên id
export const updateEpisodeById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedEpisodeData: IEpisode = req.body; // Dữ liệu cập nhật được gửi qua body request
    const episode: IEpisode | null = await Episode.findByIdAndUpdate(id, updatedEpisodeData, { new: true });
    if (episode) {
      res.status(200).json(episode);
    } else {
      res.status(404).json({ error: 'Không tìm thấy tập phim.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật thông tin tập phim.' });
  }
};

// Xóa một tập phim dựa trên id
export const deleteEpisodeById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const episode: IEpisode | null = await Episode.findByIdAndDelete(id);
    if (episode) {
      res.status(200).json({ message: 'Xóa tập phim thành công.' });
    } else {
      res.status(404).json({ error: 'Không tìm thấy tập phim.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi xóa tập phim.' });
  }
};
