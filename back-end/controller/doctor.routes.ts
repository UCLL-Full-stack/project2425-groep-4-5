import express from "express";
import doctorService from "../service/doctor.service";
import { NextFunction, Request, Response } from "express";

const doctorRouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Doctor:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           format: int64
 *         name:
 *           type: string
 *           description: The doctor's full name.
 *         email:
 *           type: string
 *           description: The doctor's email address.
 *         specialisation:
 *           type: string
 *           description: The doctor's area of specialisation.
 *         description:
 *           type: string
 *           description: Additional description about the doctor.
 *         clinic:
 *           $ref: '#/components/schemas/Clinic' 
 *         user:
 *           $ref: '#/components/schemas/User'
 *       required:
 *         - id
 *         - name
 *         - email
 *         - specialisation
 *         - clinic
 *     User:
 *       type: object
 *       properties:
 *         userId:
 *           type: number
 *           description: The user's ID.
 *         name:
 *           type: string
 *           description: The user's full name.
 *         email:
 *           type: string
 *           description: The user's email address.
 *         password:
 *           type: string
 *           description: The user's password.
 *         role:
 *           type: string
 *           description: The user's role (admin, doctor, patient).
 *       required:
 *         - userId
 *         - email
 *         - password
 *         - role
 *     Clinic:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         name:
 *           type: string
 *         address:
 *           type: string
 *         phone:
 *           type: string
 *         email:
 *           type: string
 *         description:
 *           type: string
 *         openingHours:
 *           type: string
 *       required:
 *         - id
 *         - name
 *         - address
 *         - phone
 *         - email
 *         - description
 *         - openingHours
 */

/**
 * @swagger
 * /doctors:
 *   get:
 *     summary: Get a list of all doctors.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of doctors.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Doctor'
 *       500:
 *         description: Internal server error.
 *       401:
 *         description: Unauthorized access.
 */

doctorRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ status: "error", message: "Oops... something went wrong." });
    }
});

export default doctorRouter;
