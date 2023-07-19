import { Request, Response } from 'express';
import Users, { IUsers } from '../models/Users'; // Sử dụng import IUser interface

// Hàm xử lý yêu cầu lấy tất cả người dùng
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // Tìm tất cả người dùng trong cơ sở dữ liệu
    const users: IUsers[] = await Users.find();

    res.status(200).json(users);
  } catch (error: any) {
    // Xử lý lỗi nếu có
    res.status(500).json({ message: 'Error getting users', error: error.message });
  }
};
