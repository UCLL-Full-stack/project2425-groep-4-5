import { PatientInput } from "../types";
import userDB from "../repository/patients.db";

const registerPatient = (userInput: PatientInput) => {
    if (userDB.getPatientByEmail(userInput.email)) {
        throw new Error("Email is already in use.")
    }
    userDB.savePatient(userInput);
    return "Account successfully created"
}

const PatientService = {
    registerPatient
}

export default PatientService