import { Router } from 'express';
import FirebaseAuth from '../../utils/firebase';
import AuthServices from './auth.services';

export default class AuthController {
  public path = '/auth';

  public router: Router = Router();

  private firebaseAuth = new FirebaseAuth();

  private authServices: AuthServices = new AuthServices();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(`${this.path}/firebase-signin`, this.firebaseAuth.middlewareAuth, this.authServices.firebaseSignin);
  }
}
