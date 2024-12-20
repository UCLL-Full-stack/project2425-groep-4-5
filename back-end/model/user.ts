import { Role } from "../types/index";
import { User as UserPrisma, Role as RolePrisma, PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class User {
    protected id: number;
    protected name: string;
    protected email: string;
    protected password: string;
    protected role!: Role;
    constructor(user: { id: number; name: string; email: string; password: string }) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
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

    static from ({
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
            role
        })
    }
}
