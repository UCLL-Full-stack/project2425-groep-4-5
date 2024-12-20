import { Patient } from "./patient";

export class MedicalInfo {
    private id?: number
    private bloodType: string
    private allergies: string[]
    private currentMedications: string[]
    private patient: Patient

    constructor(medicalInfo: { id?: number; bloodType: string; allergies: string[]; currentMedications: string[]; patient: Patient; }) {
        this.validate(medicalInfo);

        this.id = medicalInfo.id;
        this.bloodType = medicalInfo.bloodType;
        this.allergies = medicalInfo.allergies;
        this.currentMedications = medicalInfo.currentMedications;
        this.patient = medicalInfo.patient;
    }

    getId(): number | undefined {
        return this.id;
    }

    getBloodType(): string {
        return this.bloodType;
    }

    getAllergies(): string[] {
        return this.allergies;
    }

    getCurrentMedications(): string[] {
        return this.currentMedications;
    }

    getPatient(): Patient {
        return this.patient;
    }
    validate(medicalInfo: { id?: number; bloodType: string; allergies: string[]; currentMedications: string[]; patient: Patient; }) {
        if (medicalInfo.id == null) {
            throw new Error("ID is required!");
        }
        if (medicalInfo.id == null) {
            throw new Error("ID is required!");
        }
        if (medicalInfo.patient == null) {
            throw new Error("Patient is required!");
        }
    }
    equals(medicalInfo: MedicalInfo): boolean {
        return this.bloodType === medicalInfo.bloodType
            && this.allergies === medicalInfo.allergies
            && this.currentMedications === medicalInfo.currentMedications
            && this.patient.equals(medicalInfo.patient)
    }
}