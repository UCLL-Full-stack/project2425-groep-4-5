import { Doctor } from "../model/doctor";
import { Clinic } from "../model/clinic";
import { User } from "../model/user";

const clinic1 = [
    new Clinic({
        id: 1,
        name: "Cairo",
        address: "Cairo",
        phone: "1234567890",
        email: "Cairo",
        description: "Cairo",
        openingHours: "Cairo",
        doctors: []
    })
];

const clinic2 = [
    new Clinic({
        id: 2,
        name: "Alex",
        address: "Alex",
        phone: "1234567890",
        email: "Alex",
        description: "Alex",
        openingHours: "Alex",
        doctors: []
    })
];

const doctors = [
    new Doctor({
        id: 1,
        name: "Doctor1",
        email: "Doctor1",
        specialisation: "Doctor1",
        description: "Doctor1",
        clinic: clinic1[1],
        user: new User({
            userId: 1,
            email: "Doctor1",
            password: "Doctor1",
            role: "admin"
        })
    }),
    new Doctor({
        id: 2,
        name: "Doctor2",
        email: "Doctor2",
        specialisation: "Doctor2",
        description: "Doctor2",
        clinic: clinic2[2],
        user: new User({
            userId: 2,
            email: "Doctor2",
            password: "Doctor2",
            role: "admin"
        })
    })
    
];


const getAllDoctors = (): Doctor[] => {
    return doctors;
}

const getDoctorById = (id: number): Doctor | null => {
    const doctor = doctors.find(d => d.getId() === id);
    return doctor || null;
}

export default {
    getAllDoctors,
    getDoctorById
}