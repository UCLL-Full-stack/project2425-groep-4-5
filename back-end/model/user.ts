import { Role } from "../types/index";
import { User as UserPrisma, PrismaClient, Prisma } from "@prisma/client";
import database from "../repository/database";

export class User {
    private id: number;
    private name: string;
    private email: string;
    private password: string;
    private role!: Role;

    constructor(user: { id: number; name: string; email: string; password: string; role: Role }) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
    }

    getUserId(): number | undefined {
        return this.id;
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

    equals(user: User): boolean {
        return (
            this.email === user.email
            && this.password === user.password
            && this.role === user.role
        );
    }

    static from({
        id,
        name,
        email,
        password,
        role
    }: UserPrisma) {
        return new User({
            id,
            name,
            email,
            password,
            role: role as Role
        })
    }
}
