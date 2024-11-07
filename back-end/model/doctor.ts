import { Role } from "../types";
import { Clinic } from "./clinic";
import { User } from "./user";

export class Doctor extends User {
    private specialisation: string;
    private description?: string;
    private clinic: Clinic;

    constructor(doctor: { id?: number; name: string; email: string; password: string; specialisation: string; description?: string; clinic: Clinic; }) {
        super({
            userId: doctor.id,
            name: doctor.name,
            email: doctor.email,
            password: doctor.password
        });
        this.role = "doctor"
        this.specialisation = doctor.specialisation;
        this.description = doctor.description;
        this.clinic = doctor.clinic;
    }

    getId(): number | undefined {
        return this.userId;
    }

    getName(): string {
        return this.name;  // Directly accessing the inherited name from User
    }

    getEmail(): string {
        return this.email;  // Directly accessing the inherited email from User
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

    equals(user: User): boolean {
        if (!(user instanceof Doctor)) {
            return false;
        }
        const doctor = user as Doctor;
        return this.name === doctor.name
            && this.email === doctor.email
            && this.specialisation === doctor.specialisation
            && this.description === doctor.description
            && this.clinic.equals(doctor.clinic);
    }
}
