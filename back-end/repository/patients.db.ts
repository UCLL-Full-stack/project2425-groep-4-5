import { Patient } from "../model/patient";
import { User } from "../model/user";
import { PatientInput } from "../types";

const patients: Patient[] = [
    new Patient({
        id: 1,
        user: new User({
            id: 3,
            name: "J04n D0e",
            email: "john_doe@jmail.com",
            password: "skemmer123"
        }),
        birthDate: new Date("2000-01-01"),
        medicalInfo: undefined,
        patientAppointments: []
    }),
    new Patient({
        id: 2,
        user: new User({
            id: 4,
            name: "John Doe",
            email: "johndoe@gmail.com",
            password: "johndoe123"
        }),
        birthDate: new Date("1995-05-15"),
        medicalInfo: undefined,
        patientAppointments: []
    })
];

const getPatientByEmail = (email: string): Patient | undefined => {
    return patients.find((patient) => patient.getUser().getEmail() === email);
};

const convertToPatient = (patientInput: PatientInput): Patient => {
    if (!patientInput.user?.name || !patientInput.user?.email || !patientInput.birthDate) {
        throw new Error("Invalid patient input: Name and email are required.");
    }
    return new Patient({
        id: patients.length + 1,
        user: new User({
            id: patients.length + 1,
            name: patientInput.user?.name,
            email: patientInput.user?.name,
            password: patientInput.password
        }),
        birthDate: new Date(patientInput.birthDate),
        medicalInfo: undefined,
        patientAppointments: []
    });
};

const savePatient = (patientInput: PatientInput): string => {
    const newPatient = convertToPatient(patientInput);
    patients.push(newPatient);
    return "Patient successfully created";
};

export default { getPatientByEmail, savePatient };
