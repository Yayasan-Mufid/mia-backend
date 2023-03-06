import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
   }

export default class MiddlewareAuth {
    checkToken = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
          throw new Error();
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        (req as CustomRequest).token = decoded;
        req.user = decoded;

        next();
      } catch (error) {
        res.status(401).send({
          status: 401,
          message: 'this endpoint is prohibited!',
          error,
        });
      }
    }
}
