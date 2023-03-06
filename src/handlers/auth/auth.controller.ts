import { Router } from 'express';
import AuthServices from './auth.services';

export default class AuthController {
  public path = '/auth';

  public router: Router = Router();

  private authServices: AuthServices = new AuthServices();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, this.authServices.getAll);
  }
}
