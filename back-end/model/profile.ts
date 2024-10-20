export class Profile {
    private medicalHistory?: string;
    private age: number;

    constructor(profile: { medicalHistory?: string; age: number; }) {
        this.medicalHistory = profile.medicalHistory;
        this.age = profile.age;
    }

    getMedicalHistory(): string | undefined {
        return this.medicalHistory;
    }

    getAge(): number {
        return this.age;
    }
}