import multer from 'multer';
import path from 'path';

// Thiết lập lưu trữ cho tệp ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join('public', 'img')); // Thư mục lưu trữ ảnh (public/img)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    const newFilename = uniqueSuffix + fileExtension;
    cb(null, newFilename); // Đặt tên tệp ảnh
  },
});

const upload = multer({ storage: storage });

export default upload; // Xuất middleware Multer
