// src/controllers/movieControllers.ts
import { Request, Response } from "express";
import Movie, { IMovie } from "../models/movieModels";

// Xem danh sách tất cả các phim
export const getAllMovies = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movies: IMovie[] = await Movie.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách phim." });
  }
};

// Xem thông tin chi tiết của một bộ phim dựa trên id
export const getMovieById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const movie: IMovie | null = await Movie.findById(id);
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ error: "Không tìm thấy bộ phim." });
    }
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy thông tin phim." });
  }
};

export const addMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const newMovie: IMovie = req.body;

    // Lấy đường dẫn đã được multer lưu trữ trong req.files
    const files: any = req.files;

    if (files && "img1File" in files && "img2File" in files) {
      const img1Path = files["img1File"][0].path;
      const img2Path = files["img2File"][0].path;

      // Loại bỏ phần 'public/' khỏi đường dẫn và thay thế bằng '/'
      const img1Url = img1Path.replace("public\\", "/");
      const img2Url = img2Path.replace("public\\", "/");

      // Thêm http://localhost:3000 vào đường dẫn ảnh
      newMovie.img1 = `http://localhost:3000${img1Url}`;
      newMovie.img2 = `http://localhost:3000${img2Url}`;
    }

    const movie: IMovie = await Movie.create(newMovie);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi thêm bộ phim mới." });
  }
};

// Cập nhật thông tin của một bộ phim dựa trên id
export const updateMovieById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedMovieData: IMovie = req.body; // Dữ liệu cập nhật được gửi qua body request
    const movie: IMovie | null = await Movie.findById(id);

    if (movie) {
      // Cập nhật thông tin phim
      Object.assign(movie, updatedMovieData);

      // Cập nhật ảnh nếu có
      const files: any = req.files;
      if (files && "img1File" in files) {
        const img1Path = files["img1File"][0].path;
        // Loại bỏ phần 'public/' khỏi đường dẫn và thay thế bằng '/'
        const img1Url = img1Path.replace("public\\", "/");
        // Thêm http://localhost:3000 vào đường dẫn ảnh
        movie.img1 = `http://localhost:3000${img1Url}`;
      }
      if (files && "img2File" in files) {
        const img2Path = files["img2File"][0].path;
        // Loại bỏ phần 'public/' khỏi đường dẫn và thay thế bằng '/'
        const img2Url = img2Path.replace("public\\", "/");
        // Thêm http://localhost:3000 vào đường dẫn ảnh
        movie.img2 = `http://localhost:3000${img2Url}`;
      }

      // Lưu cập nhật vào cơ sở dữ liệu
      const updatedMovieResult: IMovie | null = await movie.save();
      if (updatedMovieResult) {
        res.status(200).json(updatedMovieResult);
      } else {
        res.status(404).json({ error: "Không tìm thấy bộ phim." });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật thông tin phim." });
  }
};

// Xóa một bộ phim dựa trên id
export const deleteMovieById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const movie: IMovie | null = await Movie.findByIdAndDelete(id);
    if (movie) {
      res.status(200).json({ message: "Xóa bộ phim thành công." });
    } else {
      res.status(404).json({ error: "Không tìm thấy bộ phim." });
    }
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa bộ phim." });
  }
};
