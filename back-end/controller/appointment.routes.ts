import express, { Request, Response, NextFunction } from 'express'

const appointmentRouter = express.Router()

appointmentRouter.get('/', (req: Request, res: Response, next: NextFunction) => {

})

export default appointmentRouter;