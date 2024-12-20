import { PatientInput } from "../types";
import userDB from "../repository/patients.db";

const registerPatient = (patientInput: PatientInput) => {
    if (patientInput.user) {
        throw new Error("Email is already in use.")
    }
    userDB.savePatient(patientInput);
    return "Account successfully created"
}

const PatientService = {
    registerPatient
}

export default PatientService