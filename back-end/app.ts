import * as dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { doctorRouter } from './controller/doctor.routes';
import patientRouter from './controller/patients.routes';
import appointmentRouter from './controller/appointment.routes';

const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;


app.use(cors({ origin: 'http://localhost:8080' }));


app.use(bodyParser.json());


app.use('/patients', patientRouter);
app.use('/appointments', appointmentRouter);
app.use('/doctors', doctorRouter);


app.get('/status', (req, res) => {
    res.json({ message: 'Back-end is running...' });
});

const swaggerOpts = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Healthcare API',
            version: '1.0.0',
            description: 'API documentation for the Healthcare management system',
            contact: {
                name: 'Your Name',
                email: 'your-email@example.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./controller/*.routes.ts'],
};


const swaggerDocs = swaggerJSDoc(swaggerOpts);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ status: 'unauthorized', message: err.message });
    } else if (err.name === 'CoursesError') {
        res.status(400).json({ status: 'domain error', message: err.message });
    } else {
        res.status(400).json({ status: 'application error', message: err.message });
    }
});


app.listen(port, () => {
    console.log(`Back-end is running on port ${port}.`);
});
