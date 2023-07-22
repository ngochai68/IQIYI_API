// src/controllers/actorControllers.ts
import { Request, Response } from 'express';
import Actor, { IActor } from '../models/actorModels';

// Xem danh sách tất cả diễn viên
export const getAllActors = async (req: Request, res: Response): Promise<void> => {
  try {
    const actors: IActor[] = await Actor.find({});
    res.status(200).json(actors);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách diễn viên.' });
  }
};

// Xem thông tin chi tiết của một diễn viên dựa trên id
export const getActorById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const actor: IActor | null = await Actor.findOne({ id: Number(id) });
    if (actor) {
      res.status(200).json(actor);
    } else {
      res.status(404).json({ error: 'Không tìm thấy diễn viên.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy thông tin diễn viên.' });
  }
};

// Thêm một diễn viên mới
export const addActor = async (req: Request, res: Response): Promise<void> => {
  try {
    const newActor: IActor = req.body; // Dữ liệu của diễn viên mới được gửi qua body request
    const actor: IActor = await Actor.create(newActor);
    res.status(201).json(actor);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm diễn viên mới.' });
  }
};

// Cập nhật thông tin của một diễn viên dựa trên id
export const updateActorById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const updatedActorData: IActor = req.body; // Dữ liệu cập nhật được gửi qua body request
    const actor: IActor | null = await Actor.findOneAndUpdate({ id: Number(id) }, updatedActorData, { new: true });
    if (actor) {
      res.status(200).json(actor);
    } else {
      res.status(404).json({ error: 'Không tìm thấy diễn viên.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật thông tin diễn viên.' });
  }
};

// Xóa một diễn viên dựa trên id
export const deleteActorById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const actor: IActor | null = await Actor.findOneAndDelete({ id: Number(id) });
      if (actor) {
        res.status(200).json({ message: 'Xóa diễn viên thành công.' });
      } else {
        res.status(404).json({ error: 'Không tìm thấy diễn viên.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Lỗi khi xóa diễn viên.' });
    }
  };
  