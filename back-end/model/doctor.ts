import { Role } from "../types";
import { Clinic } from "./clinic";
import { User } from "./user";

export class Doctor {
    private id: number;
    private user: User;
    private specialisation: string;
    private description?: string;
    private clinic: Clinic;

    constructor(doctor: { id: number; user: User; specialisation: string; description?: string; clinic: Clinic; }) {
        this.id = doctor.id;
        this.user = doctor.user;
        this.specialisation = doctor.specialisation;
        this.description = doctor.description;
        this.clinic = doctor.clinic;
    }

    getId(): number {
        return this.id;
    }

    getUser(): User {
        return this.user;
    }

    getSpecialisation(): string {
        return this.specialisation;
    }

    getDescription(): string | undefined {
        return this.description;
    }

    getClinic(): Clinic {
        return this.clinic;
    }

    equals(doctor: Doctor): boolean {
        return (this.id === doctor.id
            && this.user.equals(doctor.user)
            && this.specialisation === doctor.specialisation
            && this.description === doctor.description
            && this.clinic.equals(doctor.clinic)
        );
    }
}
