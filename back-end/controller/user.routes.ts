import express, { Request, Response, NextFunction } from "express";
import userService from "../service/user.service";
import { UserInput } from "../types";

const userRouter = express.Router();

userRouter.get('/all', async (req: Request, res: Response, next: NextFunction) => {
    try {
        userService.getAllUsers();
    }
    catch (error) {
        next(error);
    }
});

userRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = <UserInput>req.body;
        userService.addUser(newUser);
        res.status(200).json(newUser);
    } catch (error) {
        next(error);
    }
});

userRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const attemptedUser = <UserInput>req.body;
        const response = await userService.loginUser(attemptedUser);
        res.status(200).json({ message: 'Authentication succesful', ...response });
    } catch (error) {
        next(error);
    }
});

export default userRouter;