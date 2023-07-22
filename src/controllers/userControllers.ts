// src/controllers/userControllers.ts
import { Request, Response } from 'express';
import User, { IUser } from '../models/userModels';

// Xem danh sách tất cả người dùng
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách người dùng.' });
  }
};

// Xem thông tin chi tiết của một người dùng dựa trên id
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user: IUser | null = await User.findOne({ id: Number(id) });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Không tìm thấy người dùng.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy thông tin người dùng.' });
  }
};

// Thêm một người dùng mới
export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser: IUser = req.body; // Dữ liệu của người dùng mới được gửi qua body request
    const user: IUser = await User.create(newUser);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm người dùng mới.' });
  }
};

// Cập nhật thông tin của một người dùng dựa trên id
export const updateUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedUserData: IUser = req.body; // Dữ liệu cập nhật được gửi qua body request
    const user: IUser | null = await User.findOneAndUpdate({ id: Number(id) }, updatedUserData, { new: true });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Không tìm thấy người dùng.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật thông tin người dùng.' });
  }
};

// Xóa một người dùng dựa trên id
export const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user: IUser | null = await User.findOneAndDelete({ id: Number(id) });
    if (user) {
      res.status(200).json({ message: 'Xóa người dùng thành công.' });
    } else {
      res.status(404).json({ error: 'Không tìm thấy người dùng.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi xóa người dùng.' });
  }
};
