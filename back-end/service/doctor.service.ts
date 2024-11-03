import { Doctor } from "../model/doctor";
import doctorRepository from "../repository/doctor.db";

const getAllDoctors = (): Doctor[] => {
    return doctorRepository.getAllDoctors();
}

const getDoctorById = (id: number): Doctor | null => {
    return doctorRepository.getDoctorById(id);
}    

export default {
    getAllDoctors,
    getDoctorById
}