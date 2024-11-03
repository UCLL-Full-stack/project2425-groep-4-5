import express from "express";
import doctorService from "../service/doctor.service";
import { NextFunction, Request, Response } from "express";

const doctorRouter = express.Router();

doctorRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(400).json({status: "error", message: "Oeps..."});
    }
});

export { doctorRouter };