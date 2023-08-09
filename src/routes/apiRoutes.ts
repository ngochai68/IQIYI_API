// Import Express và các module cần thiết
import express from "express";
import movieRoutes from "./movieRoutes";
import genreRoutes from "./genreRoutes";
import regionRoutes from "./regionRoutes";
import episodeRoutes from "./episodeRoutes";

// Tạo một router mới
const router = express.Router();

// Sử dụng các route liên quan đến phim
router.use("/movies", movieRoutes);

// Sử dụng các route liên quan đến thể loại phim
router.use("/genres", genreRoutes);

// Sử dụng các route liên quan đến vùng/địa điểm
router.use("/regions", regionRoutes);

// Sử dụng các route liên quan đến tập phim (episode)
router.use("/episodes", episodeRoutes);

// Xuất router đã cấu hình
export default router;
