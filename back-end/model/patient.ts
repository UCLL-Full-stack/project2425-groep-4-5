import { Appointment } from "./appointment";
import { User } from "./user";
import { Patient as PatientPrisma, User as UserPrisma, Appointment as AppointmentPrisma } from "@prisma/client";
export class Patient {
    private id?: number;
    private user: User;
    private appointments: Appointment[] = [];

    constructor(patient: { user: User, appointments: Appointment[], id?: number }) {
        this.validate(patient);

        this.user = patient.user;
        this.appointments = patient.appointments;
        this.id = patient.id;
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

    validate = (patient: { user: User }) => {
        if (!patient.user) {
            throw new Error("User is required!");
        }
    }

    static from({
        id,
        user,
        appointments
    }: PatientPrisma & { user: UserPrisma, appointments: AppointmentPrisma }) {
        return new Patient({
            id,
            user: User.from(user),
            appointments: appointments.map((appointment) => Appointment.from(appointment))
        });
    }
}