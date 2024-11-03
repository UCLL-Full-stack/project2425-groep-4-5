import { Clinic } from "./clinic";
import { User } from "./user";

export class Doctor {
    private id?: number
    private name: string
    private email: string
    private specialisation: string
    private description?: string
    private clinic: Clinic
    private user: User

    constructor(doctor: { id?: number; name: string; email: string; specialisation: string; description?: string; clinic: Clinic; user: User; }) {
        this.id = doctor.id;
        this.name = doctor.name;
        this.email = doctor.email;
        this.specialisation = doctor.specialisation;
        this.description = doctor.description;
        this.clinic = doctor.clinic;
        this.user = doctor.user;
    }

    getId(): number | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
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

    getUser(): User {
        return this.user;
    }

    equals(doctor: Doctor): boolean {
        return this.name === doctor.name
            && this.email === doctor.email
            && this.specialisation === doctor.specialisation
            && this.description === doctor.description
            && this.clinic.equals(doctor.clinic)
            && this.user.equals(doctor.getUser());
    }
}