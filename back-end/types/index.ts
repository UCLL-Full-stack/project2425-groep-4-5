import { Appointment } from "../model/appointment";
import { Profile } from "../model/profile";

type Role = 'admin' | 'patient' | 'doctor';

type PatientInput = {
    name: string;
    email: string,
    password: string,
    role?: Role,
    birthDate: Date
}

type DoctorInput = {}

type AdminInput = {}

export { Role };
export { PatientInput };