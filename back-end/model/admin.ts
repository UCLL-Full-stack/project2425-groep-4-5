import { User } from "./user";

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

    equals(): boolean {
        return true;
    }

    validate(admin: { id?: number; user: User }) {
        if (admin.id == null) {
            throw new Error("ID is required!");
        }
        if (admin.user == null) {
            throw new Error("User is required!");
        }
    }
}