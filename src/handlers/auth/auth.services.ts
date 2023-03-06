import { Request, Response } from 'express';

export default class AuthServices {
  firebaseSignin = async (req: Request, res: Response): Promise<void> => {
    try {
      res.send(req.user);
    } catch (error) {
      res.status(500).send(error);
    }
  };
}
