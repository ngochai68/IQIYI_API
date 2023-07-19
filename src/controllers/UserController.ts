import { Request, Response } from 'express';
import { User } from '../models/User';

export const getUser = (req: Request, res: Response) => {
  // Code to fetch user data from the database
  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  };
  res.json(user);
};
