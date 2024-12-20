import { Clinic } from "./clinic";
import { User } from "./user";
import { Prisma, PrismaClient, Doctor as DoctorPrisma, User as UserPrisma, Clinic as ClinicPrisma } from "@prisma/client";

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

    static from({
        id,
        user,
        specialisation,

        clinic,
    }: DoctorPrisma & { user: UserPrisma; clinic: ClinicPrisma; }) {
        return new Doctor({
            id,
            user: User.from(user),
            specialisation,
            description: undefined,
            clinic: Clinic.from(clinic as any),
        }
        );

    }

}
