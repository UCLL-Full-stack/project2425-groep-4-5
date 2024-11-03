import { Patient } from "./patient";
import { Clinic } from "./clinic";
import { Doctor } from "./doctor";

export class Appointment {
    private id?: number;
    private date: Date;
    private time: string;
    private patient: Patient;
    private doctor: Doctor;
    private clinic: Clinic;

    constructor(appointment: { id?: number; date: Date; time: string; patient: Patient; doctor: Doctor; clinic: Clinic; }) {
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
}