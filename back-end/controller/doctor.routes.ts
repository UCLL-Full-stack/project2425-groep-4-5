/**
 * @swagger
 *   components:
 *    securitySchemes:
 *     bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      Doctor:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              format: int64
 *            name:
 *              type: string
 *              description: Lecturer name.
 *            empail:
 *              type: string
 *              description: Email.
 *            specialisation:
 *              type: string
 *              description: Specialisation.
 *            description:
 *              type: string
 *              description: Description.
 *            clinic:
 *              $ref: '#/components/schemas/Clinic' 
 *            user:
 *              $ref: '#/components/schemas/User'
 */

import express from "express";
import doctorService from "../service/doctor.service";
import { NextFunction, Request, Response } from "express";

const doctorRouter = express.Router();

/**
 * @swagger
 * /doctors:
 *   get:
 *     summary: Get a list of all doctors.
 *     responses:
 *       200:
 *         description: A list of doctors.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Doctors'
 */

doctorRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(400).json({status: "error", message: "Oeps..."});
    }
});

export { doctorRouter };