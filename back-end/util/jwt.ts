import { Role } from "../types";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_HOURS = process.env.JWT_EXPIRES_HOURS;

const generateJWTtoken = ({ email, role }: { email: string, role: Role }): string => {
    const payload = { email, role };
    const options = { issuer: 'planarts', expiresIn: `${JWT_EXPIRES_HOURS}h` }
    try {
        return jwt.sign(payload, process.env.JWT_SECRET!, options);
    } catch (error) {
        console.log(error);
        throw new Error('Error generating JWT token, see server log for details.');
    }
}
export default generateJWTtoken;