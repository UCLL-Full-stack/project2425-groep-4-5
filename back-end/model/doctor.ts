import { Appointment } from "./appointment";
import { User } from "./user";
import { Doctor as DoctorPrisma, User as UserPrisma, Appointment as AppointmentPrisma } from "@prisma/client";
export class Doctor {
    private id?: number;
    private user: User;
    private appointments: Appointment[] = [];

    constructor(doctor: { user: User, appointments: Appointment[], id?: number }) {
        this.validate(doctor);

        this.user = doctor.user;
        this.appointments = doctor.appointments;
        this.id = doctor.id;
    }

    getId(): number | undefined {
        return this.id;
    }

    getUser(): User {
        return this.user;
    }

    getAppointments(): Appointment[] {
        return this.appointments;
    }

    validate(doctor: { user: User, appointments: Appointment[], id?: number }) {
        if (!doctor.user) {
            throw new Error('User is required!');
        }
    }

    static from({
        id,
        user,
        appointments
    }: DoctorPrisma & { user: UserPrisma; appointments: AppointmentPrisma[] }) {
        return new Doctor({
            id,
            user: User.from(user),
            appointments: appointments.map((appointment) => Appointment.from(appointment))
        });
    }
}