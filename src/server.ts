import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan'; // Import morgan
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Sử dụng tuyến userRoutes tại "/user"
app.use(userRoutes);

app.use(bodyParser.json());
app.use(cors());

// Sử dụng morgan với các tùy chọn morgan('format') hoặc morgan('dev')
app.use(morgan('combined')); // Chọn một định dạng ghi log theo ý muốn

// Đăng ký tuyến và các middleware khác ở đây...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
