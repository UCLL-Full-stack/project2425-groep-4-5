import { User } from "./user";
import { Prisma, PrismaClient, Admin as AdminPrisma, User as UserPrisma } from "@prisma/client";

export class Admin {
    private id: number;
    private user: User;

    constructor(admin: { id: number; user: User }) {
        this.validate(admin);

        this.id = admin.id;
        this.user = admin.user;
    }

    getId(): number {
        return this.id;
    }

    getUser(): User {
        return this.user;
    }

    equals(admin: Admin): boolean {
        return (
            this.id === admin.id
            && this.user === admin.user
        );
    }

    validate(admin: { id?: number; user: User }) {
        if (admin.id == null) {
            throw new Error("ID is required!");
        }
        if (admin.user == null) {
            throw new Error("User is required!");
        }
    }

    static from({
        id,
        user,
    }: AdminPrisma & { user: UserPrisma; }) {
        return new Admin({
            id,
            user: User.from(user),
        });
    }
}