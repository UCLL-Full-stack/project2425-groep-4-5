import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import * as bodyparser from 'body-parser';
import { expressjwt } from 'express-jwt';
import * as dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();

dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyparser.json());

app.use(
    expressjwt({
        secret: process.env.JWT_SECRET || 'default_secret',
        algorithms: ['HS256']
    }).unless({
        path: ['/api-docs', /^\/api-docs\/.*/]
    })
);

app.get('/status', (req, res) => {
    res.json({ message: "PlanArts API is running..." })
})

const swaggerOpts = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'PlanArts',
            version: '1.0.0'
        }
    },
    apis: ['./controller/*.routes.ts']
}

const swaggerSpec = swaggerJSDoc(swaggerOpts);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ status: 'Unauthorized', message: err.message })
    }
});

app.listen(port || 3000, () => {
    console.log('PlanArts API is running...');
});