// Import các module cần thiết
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import connectToDatabase from "./config/database/connect";

// Import apiRoutes
import apiRoutes from "./routes/apiRoutes";

// Tạo một ứng dụng Express
const app = express();

// Cho phép truy cập từ tất cả các nguồn (không nên sử dụng trong môi trường sản xuất)
app.use(cors());

// Sử dụng express.static để phục vụ các tệp tĩnh từ thư mục 'public'
app.use(express.static("public"));

// Định nghĩa cổng cho ứng dụng, sử dụng cổng môi trường nếu đã được đặt hoặc mặc định là cổng 3000
const port = process.env.PORT || 3000;

// Sử dụng apiRoutes
app.use("/api", apiRoutes);

// Sử dụng bodyParser để phân tích các yêu cầu có phần thân là dữ liệu JSON
app.use(bodyParser.json());

// Sử dụng cors để xử lý CORS (Cross-Origin Resource Sharing) trong các yêu cầu
app.use(cors());

// Sử dụng morgan để ghi log các yêu cầu nhận được, chọn định dạng 'combined' hoặc 'dev'
app.use(morgan("combined"));

// Kết nối đến MongoDB
connectToDatabase();

// Lắng nghe kết nối tới cổng đã định nghĩa và thông báo khi máy chủ đã khởi chạy thành công
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
