import { Doctor } from "../model/doctor";
import { Clinic } from "../model/clinic";
import { User } from "../model/user";

const clinic1 = new Clinic({
    id: 1,
    name: "Cairo",
    address: "Cairo",
    phone: "1234567890",
    email: "Cairo",
    description: "Cairo",
    openingHours: "Cairo",
    doctors: []
});

const clinic2 = new Clinic({
    id: 2,
    name: "Alex",
    address: "Alex",
    phone: "1234567890",
    email: "Alex",
    description: "Alex",
    openingHours: "Alex",
    doctors: []
});

const doctors = [
    new Doctor({
        id: 1,
        name: "Doctor1",
        email: "doctor1@example.com",
        password: "doctor1password",
        specialisation: "Cardiology",
        description: "Experienced cardiologist.",
        clinic: clinic1
    }),
    new Doctor({
        id: 2,
        name: "Doctor2",
        email: "doctor2@example.com",
        password: "doctor2password",
        specialisation: "Neurology",
        description: "Experienced neurologist.",
        clinic: clinic2
    })
];


const getAllDoctors = (): Doctor[] => {
    return doctors;
};


const getDoctorById = (id: number): Doctor | null => {
    const doctor = doctors.find(d => d.getId() === id);
    return doctor || null;
};

export default {
    getAllDoctors,
    getDoctorById
};
