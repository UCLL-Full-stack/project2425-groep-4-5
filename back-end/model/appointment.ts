import { User } from './user';

export class Appointment {

    private appointmentID?: number;
    private doctor: User;
    private appointmentDate: Date;
    private time: string;
    private notice: string;

    constructor(appointment: { appointmentID?: number; doctor: User; appointmentDate: Date; time: string; notice: string; }) {
        this.appointmentID = appointment.appointmentID;
        this.doctor = appointment.doctor;
        this.appointmentDate = appointment.appointmentDate;
        this.time = appointment.time;
        this.notice = appointment.notice;
    }

    getDoctor(): User {
        return this.doctor;
    }

    getAppointmentDate(): Date {
        return this.appointmentDate;
    }

    getTime(): string {
        return this.time;
    }

    getAppointmentID(): number | undefined {
        return this.appointmentID;
    }

    getNotice(): string {
        return this.notice;
    }
}