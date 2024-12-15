import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { User as UserPrisma, Appointment as AppointmentPrisma, Doctor as DoctorPrisma, Patient as PatientPrisma } from "@prisma/client";

export class Appointment {
    private id: number;
    private doctor: Doctor;
    private patient: Patient;

    constructor(appointment: { id: number, doctor: Doctor, patient: Patient }) {
        this.validate(appointment);

        this.id = appointment.id;
        this.doctor = appointment.doctor;
        this.patient = appointment.patient;
    }

    getId(): number {
        return this.id;
    }

    getDoctor(): Doctor {
        return this.doctor;
    }

    getPatient(): Patient {
        return this.patient;
    }

    validate = (appointment: { id: number, doctor: Doctor, patient: Patient }) => {
        if (!appointment.doctor) {
            throw new Error("Doctor is required!");
        }
        if (!appointment.patient) {
            throw new Error("Patient is required!");
        }
    }

    static from({
        id,
        doctor,
        patient
    }: AppointmentPrisma & { doctor: DoctorPrisma & { user: UserPrisma }; patient: PatientPrisma & { user: UserPrisma } }) {
        return new Appointment({
            id,
            doctor: Doctor.from(doctor),
            patient: Patient.from(patient)
        });
    }
}