import { User } from "./user";

export class Admin extends User {
    constructor(admin: { userId?: number; name: string; email: string; password: string; }) {
        super({
            userId: admin.userId,
            name: admin.name,
            email: admin.email,
            password: admin.password
        })
        this.role = "admin";
    }
}