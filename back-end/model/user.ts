import { Role } from "../types/index";
import { Profile } from "./profile";
import { Appointment } from "./appointment";

export class User {
    private userId?: number;
    private email: string;
    private password: string;
    private role: Role;
    private userProfile: Profile;
    private userAppointments: Appointment[];

    constructor(user: { userId?: number; email: string; password: string; role: Role; userProfile: Profile; userAppointments: Appointment[]; }) {
        this.userId = user.userId;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
        this.userProfile = user.userProfile;
        this.userAppointments = user.userAppointments;
    }

    getUserId(): number | undefined {
        return this.userId;
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

    getUserProfile(): Profile {
        return this.userProfile;
    }

    getUserAppointments(): Appointment[] {
        return this.userAppointments;
    }
}