import { Role } from "../types/index";
import { Appointment } from "./appointment";

export class User {
    protected userId?: number;
    protected name: string;
    protected email: string;
    protected password: string;
    protected role!: Role;
    private userAppointments: Appointment[];

    constructor(user: { userId?: number; name: string; email: string; password: string }) {
        this.userId = user.userId;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.userAppointments = [];
    }

    getUserId(): number | undefined {
        return this.userId;
    }

    getName(): string {
        return this.name;
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

    getAppointments(): Appointment[] {
        return this.userAppointments;
    }

    // Equals method to compare two User objects
    equals(user: User): boolean {
        // You can also compare the appointments if needed.
        const appointmentsEqual = this.userAppointments.length === user.userAppointments.length &&
            this.userAppointments.every((appointment, index) => appointment.equals(user.userAppointments[index]));

        return this.email === user.email
            && this.password === user.password
            && this.role === user.role
            && appointmentsEqual;
    }
}
