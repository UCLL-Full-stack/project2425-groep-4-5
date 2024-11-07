import { Router, Request, Response, NextFunction } from 'express';
import PatientService from '../service/patient.service';
import { PatientInput } from '../types';

const patientRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     PatientInput:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - role
 *         - birthDate
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the patient
 *         email:
 *           type: string
 *           description: The email address of the patient
 *         password:
 *           type: string
 *           description: The password for the patient's account
 *         role:
 *           type: string
 *           enum:
 *             - patient
 *           description: The role of the user (defaults to "patient")
 *         birthDate:
 *           type: string
 *           format: date
 *           description: The birthdate of the patient
 *       example:
 *         name: John Doe
 *         email: john.doe@example.com
 *         password: patientpassword123
 *         role: patient
 *         birthDate: "1990-01-01"
 */

/**
 * @swagger
 * /patients/add:
 *   post:
 *     summary: Register a new patient
 *     tags: [Patients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PatientInput'
 *     responses:
 *       200:
 *         description: The patient was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user ID
 *                 name:
 *                   type: string
 *                   description: The patient's name
 *                 email:
 *                   type: string
 *                   description: The patient's email
 *                 birthDate:
 *                   type: string
 *                   format: date
 *                   description: The patient's birthdate
 *                 role:
 *                   type: string
 *                   description: The patient's role (should be 'patient')
 *       500:
 *         description: Account already exists or an internal error occurred.
 *       400:
 *         description: Invalid input, missing required fields.
 */

patientRouter.post('/add', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newPatient = <PatientInput>req.body;
        const result = await PatientService.registerPatient(newPatient);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error)
    }
});

export default patientRouter;