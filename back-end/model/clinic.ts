import { Doctor } from "./doctor";

export class Clinic {
    private id?: number
    private name: string
    private address: string
    private phone: string
    private email: string
    private description?: string
    private openingHours: string
    private doctors: Doctor [] = [];

    constructor(clinic: { id?: number; name: string; address: string; phone: string; email: string; description?: string; openingHours: string; }) {
        this.id = clinic.id;
        this.name = clinic.name;
        this.address = clinic.address;
        this.phone = clinic.phone;
        this.email = clinic.email;
        this.description = clinic.description;
        this.openingHours = clinic.openingHours;
    }
    getId(): number | undefined {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getAddress(): string {
        return this.address;
    }
    getPhone(): string {
        return this.phone;
    }
    getEmail(): string {
        return this.email;
    }
    getDescription(): string | undefined {
        return this.description;
    }
    getOpeningHours(): string {
        return this.openingHours;
    }

    equals(clinic: Clinic): boolean {
        return this.name === clinic.name
            && this.address === clinic.address
            && this.phone === clinic.phone
            && this.email === clinic.email
            && this.description === clinic.description
            && this.openingHours === clinic.openingHours
    }
}