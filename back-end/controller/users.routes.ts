import express, { Request, Response, NextFunction } from "express";
import userService from "../service/user.service";

const userRouter = express.Router();

userRouter.get('/all', (req: Request, res: Response, next: NextFunction) => {
    userService.getAllUsers();
});

userRouter.post('/register', (req: Request, res: Response, next: NextFunction) => {
    userService.addUser();
});

userRouter.post('/login', (req: Request, res: Response, next: NextFunction) => {
    userService.loginUser();
});

export default userRouter;