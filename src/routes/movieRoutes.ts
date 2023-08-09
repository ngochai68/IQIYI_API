import express from "express";
import {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovieById,
  deleteMovieById,
} from "../controllers/movieControllers";
import upload from "../middlewares/multerMiddleware"; // Import middleware Multer

const router = express.Router();

// Route để lấy danh sách tất cả các phim
router.get("/", getAllMovies);

// Route để lấy thông tin chi tiết của một bộ phim dựa trên id
router.get("/:id", getMovieById);

// Route để thêm một bộ phim mới
router.post(
  "/",
  upload.fields([
    { name: "img1File", maxCount: 1 },
    { name: "img2File", maxCount: 1 },
  ]),
  addMovie
); // Sử dụng middleware Multer

// Route để cập nhật thông tin của một bộ phim dựa trên id
router.put(
  "/:id",
  upload.fields([
    { name: "img1File", maxCount: 1 },
    { name: "img2File", maxCount: 1 },
  ]),
  updateMovieById
);

// Route để xóa một bộ phim dựa trên id
router.delete("/:id", deleteMovieById);

export default router;
