/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      Lecturer:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            name:
 *              type: string
 *              description: Lecturer name.
 *            expertise:
 *              type: string
 *              description: Lecturer expertise.
 */
import express, { NextFunction, Request, response, Response } from 'express'
import { UserInput } from '../types';
import userService from "../service/user.service"
const userRouter = express.Router();

/**
 * @swagger
 * /users/add:
 *   post:
 *      summary: Create a new schedule for an existing lecturer and course.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ScheduleInput'
 *      responses:
 *         200:
 *            description: The created schedule.
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Schedule'
 */

userRouter.post('/add', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = <UserInput>req.body;
        const result = await userService.registerUser(newUser);
        res.status(200).json(result);
    }
    catch (error) {
        next(error)
    }
})

export default userRouter