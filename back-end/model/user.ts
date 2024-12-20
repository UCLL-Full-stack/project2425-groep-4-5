import { Role } from "../types/index";
import { User as UserPrisma, PrismaClient, Prisma } from "@prisma/client";
import database from "../repository/database";

export class User {
    protected id: number;
    protected firstName: string;
    private lastName: string;
    protected email: string;
    protected password: string;
    protected role!: Role;

    constructor(user: { id: number; firstName: string; lastName: string; email: string; password: string; role: Role }) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
    }

    getUserId(): number | undefined {
        return this.id;
    }

    getFirstName(): string {
        return this.firstName;
    }
    getLastName(): string {
        return this.lastName;
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

    equals(user: User): boolean {
        return (
            this.email === user.email
            && this.password === user.password
            && this.role === user.role
        );
    }

    static from({
        id,
        firstName,
        lastName,
        email,
        password,
        role
    }: UserPrisma) {
        return new User({
            id,
            firstName,
            lastName,
            email,
            password,
            role: role as Role
        })
    }
}
