import { Role } from "../types";
import { Appointment } from "./appointment";
import { MedicalInfo } from "./medicalInfo";
import { User } from "./user";
import { User as UserPrisma, Appointment as AppointmentPrisma, MedicalInfo as MedicalInfoPrisma, PrismaClient, Prisma } from "@prisma/client"
import database from "../repository/database";


export class Patient {
    private id: number;
    private user: User;
    private birthDate: Date;
    private patientAppointments: Appointment[];
    private medicalInfo?: MedicalInfo;

    constructor(patient: { id: number; user: User; birthDate: Date; patientAppointments: Appointment[]; medicalInfo?: MedicalInfo }) {
        this.id = patient.id;
        this.user = patient.user;
        this.birthDate = patient.birthDate;
        this.patientAppointments = patient.patientAppointments;
        this.medicalInfo = patient.medicalInfo;
    }

    getUserId(): number | undefined {
        return this.id;
    }

    getUser(): User {
        return this.user
    }

    getBirthDate(): Date {
        return this.birthDate;
    }

    getPatientAppointments(): Appointment[] {
        return this.patientAppointments;

    }

    getMedicalInfo(): MedicalInfo | undefined {
        return this.medicalInfo;
    }

    equals(patient: Patient): boolean {
        return (this.id === patient.id
            && this.user === patient.user
            && this.birthDate === patient.birthDate
            && this.patientAppointments === patient.patientAppointments
            && this.medicalInfo === patient.medicalInfo
        );
    }

    static from({
        id,
        user,
        birthDate,
        patientAppointments,
        medicalInfo
    }: Patient & { user: UserPrisma; patientAppointments: AppointmentPrisma[]; medicalInfo: MedicalInfoPrisma | null; }) {
        return new Patient({
            id,
            user: User.from(user),
            birthDate,
            patientAppointments,
            medicalInfo
        })
    }
}