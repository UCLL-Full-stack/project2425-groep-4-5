import { Role } from "../types";
import { Appointment } from "./appointment";
import { MedicalInfo } from "./medicalInfo";
import { User } from "./user";

export class Patient {
    private id: number;
    private user: User;
    private birthDate: Date;
    private patientAppointments: Appointment[];
    private medicalInfo?: MedicalInfo;

    constructor(patient: { birthDate: Date; }) {
        this.id = patient.birthDate;
        this.birthDate = patient.birthDate;
        this.patientAppointments = patient.patientAppointments;
        this.medicalInfo = patient.medicalInfo;
    }

    getUserId(): number | undefined {
        return this.userId;
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

    getRole(): Role {
        return this.role;
    }

    getBirthDate(): Date {
        return this.birthDate;
    }

    /*getPatientAppointments(): Appointment[] {
        return this.patientAppointments;
    }

    getMedicalInfo(): MedicalInfo | undefined {
        return this.medicalInfo;
    }*/

    equals(patient: Patient): boolean {
        return this.name === patient.name
            && this.email === patient.email
            && this.birthDate === patient.birthDate
        //&& this.patientAppointments === patient.patientAppointments
        //&& this.medicalInfo === patient.medicalInfo
    }
}