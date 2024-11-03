import { Appointment } from "./appointment";
import { MedicalInfo } from "./medicalInfo";

export class Patient {
    private id?: number;
    private name: string;
    private birthDate: Date;
    private patientAppointments: Appointment[];
    private medicalInfo?: MedicalInfo;

    constructor(patient: { id?: number; name: string; birthDate: Date; patientAppointments: Appointment[]; medicalInfo?: MedicalInfo; }) {
        this.id = patient.id;
        this.name = patient.name;
        this.birthDate = patient.birthDate;
        this.patientAppointments = patient.patientAppointments;
        this.medicalInfo = patient.medicalInfo;
    }

    getId(): number | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getBirthDate(): Date {
        return this.birthDate;
    }

    getPatientAppointments(): Appointment[] {
        return this.patientAppointments;
    }

    getMedicalInfo(): MedicalInfo | undefined {
        return this.medicalInfo;
    }

    equals(patient: Patient): boolean {
        return this.name === patient.name
            && this.birthDate === patient.birthDate
            && this.patientAppointments === patient.patientAppointments
            && this.medicalInfo === patient.medicalInfo
    }
}