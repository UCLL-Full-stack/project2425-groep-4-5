import { Patient } from "./patient";
import { Clinic } from "./clinic";
import { Doctor } from "./doctor";
import { Patient as PatientPrisma, PrismaClient } from "@prisma/client";
import { Doctor as DoctorPrisma } from "@prisma/client";
import { Clinic as ClinicPrisma } from "@prisma/client";
import { Appointment as AppointmentPrisma } from "@prisma/client";

export class Appointment {
    private id: number;
    private date: Date;
    private time: string;
    private patient: Patient;
    private doctor: Doctor;
    private clinic: Clinic;

    constructor(appointment: { id: number; date: Date; time: string; patient: Patient; doctor: Doctor; clinic: Clinic; }) {
        this.validate(appointment);

        this.id = appointment.id;
        this.date = appointment.date;
        this.time = appointment.time;
        this.patient = appointment.patient;
        this.doctor = appointment.doctor;
        this.clinic = appointment.clinic;
    }

    getId(): number | undefined {
        return this.id;
    }

    getDate(): Date {
        return this.date;
    }

    getTime(): string {
        return this.time;
    }

    getPatient(): Patient {
        return this.patient;
    }

    getDoctor(): Doctor {
        return this.doctor;
    }

    getClinic(): Clinic {
        return this.clinic;
    }

    equals(appointment: Appointment): boolean {
        return this.date === appointment.date
            && this.time === appointment.time
            && this.patient.equals(appointment.patient)
            && this.doctor.equals(appointment.doctor)
            && this.clinic.equals(appointment.clinic)
    }

    validate(appointment: { id?: number; date: Date; time: string; patient: Patient; doctor: Doctor; clinic: Clinic; }) {
        if (appointment.date == null) {
            throw new Error("Date is required!");
        }
        if (appointment.time.trim() == null) {
            throw new Error("Time is required!");
        }
        if (appointment.patient == null) {
            throw new Error("Patient is required!");
        }
        if (appointment.doctor == null) {
            throw new Error("Doctor is required!");
        }
        if (appointment.clinic == null) {
            throw new Error("Clinic is required!");
        }
    }

    static from({
        id,
        date,
        time,
        patient,
        doctor,
        clinic,
    }: AppointmentPrisma & { doctor: DoctorPrisma; clinic: ClinicPrisma; }) {
        return new Appointment({
            id,
            date,
            time,
            patient,
            doctor: Doctor.from(doctor),
            clinic: Clinic.from(clinic),
        });
    }
}