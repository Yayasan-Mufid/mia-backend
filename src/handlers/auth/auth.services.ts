import { Request, Response } from 'express';

export default class AuthServices {
  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const results = [];
      res.send(results);
    } catch (error) {
      res.status(500).send(error);
    }
  };
}
