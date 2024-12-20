import express, { Request, Response, NextFunction } from "express";
import userService from "../service/user.service";

const userRouter = express.Router();

userRouter.get('/all', (req: Request, res: Response, next: NextFunction) => {
    userService.getAllUsers();
});

userRouter.post('/register', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    userService.addUser(newUser);
});

userRouter.post('/login', (req: Request, res: Response, next: NextFunction) => {
    const attemptedUser = req.body;
    userService.loginUser(attemptedUser);
});

export default userRouter;