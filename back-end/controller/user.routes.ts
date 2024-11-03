import { Router, Request, Response, NextFunction } from 'express';
import UserService from '../service/user.service';
import { UserInput } from '../types';

const userRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     UserInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The user's email
 *         password:
 *           type: string
 *           description: The user's password
 *       example:
 *         email: user@example.com
 *         password: password123
 */

/**
 * @swagger
 * /users/add:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID
 *                 email:
 *                   type: string
 *                   description: The user's email
 *       500:
 *         description: Account already exists.
 */

userRouter.post('/add', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = <UserInput>req.body;
        const result = await UserService.registerUser(newUser);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error)
    }
});

export default userRouter;