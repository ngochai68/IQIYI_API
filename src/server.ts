// Import các module cần thiết
import express from 'express'; 
import bodyParser from 'body-parser'; 
import cors from 'cors'; 
import morgan from 'morgan'; 
import connectToDatabase from './config/database/connect'; 
 
// Import các tuyến (routes) định nghĩa cho ứng dụng
import userRoutes from './routes/userRoutes'; 

// Tạo một ứng dụng Express
const app = express(); 

// Định nghĩa cổng cho ứng dụng, sử dụng cổng môi trường nếu đã được đặt hoặc mặc định là cổng 3000
const port = process.env.PORT || 3000;

// Sử dụng tuyến userRoutes khi URL bắt đầu bằng "/user"
app.use(userRoutes); 

// Sử dụng bodyParser để phân tích các yêu cầu có phần thân là dữ liệu JSON
app.use(bodyParser.json()); 

// Sử dụng cors để xử lý CORS (Cross-Origin Resource Sharing) trong các yêu cầu
app.use(cors()); 

// Sử dụng morgan để ghi log các yêu cầu nhận được, chọn định dạng 'combined' hoặc 'dev'
app.use(morgan('combined'));

// Kết nối đến MongoDB
connectToDatabase();

// Lắng nghe kết nối tới cổng đã định nghĩa và thông báo khi máy chủ đã khởi chạy thành công
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
