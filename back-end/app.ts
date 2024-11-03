import express from 'express';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import userRouter from './controller/user.routes';
import appointmentRouter from './controller/appointment.routes';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/appointments', appointmentRouter);


app.get('/status', (req, res) => {
    res.json({ message: 'Back-end is running...' });
});

app.listen(port, () => {
    console.log(`Back-end is running on port ${port}.`);
});