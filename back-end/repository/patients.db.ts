import { Patient } from "../model/patient";
import { PatientInput } from "../types";

// Dummy data storage
const patients: Patient[] = [
    new Patient({
        name: "J04n D0e",
        email: "john_doe@jmail.com",
        password: "skemmer123",
        role: "patient",
        birthDate: new Date("2000-01-01")
    }),
    new Patient({
        name: "John Doe",
        email: "johndoe@gmail.com",
        password: "johndoe123",
        role: "patient",
        birthDate: new Date("1995-05-15")
    })
];

const getPatientByEmail = (email: string): Patient | undefined => {
    return patients.find((patient) => patient.getEmail() === email);
};

const convertToPatient = (patientInput: PatientInput): Patient => {
    return new Patient({
        name: patientInput.name,
        email: patientInput.email,
        password: patientInput.password,
        role: "patient",
        birthDate: new Date(patientInput.birthDate)
    });
};

const savePatient = (patientInput: PatientInput): string => {
    const newPatient = convertToPatient(patientInput);
    patients.push(newPatient);
    return "Patient successfully created";
};

export default { getPatientByEmail, savePatient };
