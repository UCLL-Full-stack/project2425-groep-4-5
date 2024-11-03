import { Appointment } from "../model/appointment";
import { Profile } from "../model/profile";

type Role = 'admin' | 'patient' | 'doctor';

type UserInput = {
    email: string,
    password: string,
    role: Role
}

export { Role };
export { UserInput };